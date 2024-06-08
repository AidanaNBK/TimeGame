import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange(props) {
  const timer = useRef();
  const dialog = useRef();

  //   const [timerStarted, setTimerStarted] = useState(false);
  //   const [timerExpired, setTimerExpired] = useState(false);
  const [timeRemaining, setRemaining] = useState(props.targetTime * 1000);

  const timerActive =
    timeRemaining > 0 && timeRemaining < props.targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setRemaining(props.targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemaining((current) => current - 10);
    }, 10);
    // it's better to use the interval, as it will be possible to configure time remaining
    // use Interval just repeats itself in the configured interval
  }
  function handleStop() {
    clearInterval(timer.current);
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
      <ResultModal
        ref={dialog}
        targetTime={props.targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{props.title}</h2>
        {/* {timerExpired && <p>You lost!</p>} */}
        <p className="challenge-time">
          {props.targetTime} second{props.targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challange
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
