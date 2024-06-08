import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallange.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="easy timer" targetTime={1} />
        <TimerChallange title="not easy" targetTime={5} />
        <TimerChallange title="getting taught" targetTime={10} />
        <TimerChallange title="pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
