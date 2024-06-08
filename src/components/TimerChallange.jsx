import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange(props) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, props.targetTime * 1000);
    setTimerStarted(true);
  }
  function handleStop() {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
    dialog.current.open();
  }
  return (
    <>
      {/* {timerExpired && (
        <ResultModal
          ref={dialog}
          targetTime={props.targetTime}
          result={"lost"}
        />
      )} */}
      <ResultModal ref={dialog} targetTime={props.targetTime} result={"lost"} />
      <section className="challenge">
        <h2>{props.title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {props.targetTime} second{props.targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
