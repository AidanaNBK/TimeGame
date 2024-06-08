import { useState, useRef } from "react";

export default function Player(props) {
  let playerName = useRef();
  let [userName, setUserName] = useState("unknown entity");

  function handleClick() {
    setUserName(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {userName ? userName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

/*
// Before importing useRef
export default function Player(props) {
  let [submitted, setSubmitted] = useState(false);
  let [userName, setUserName] = useState("unknown entity");
  function handleChange(event) {
    setUserName(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>Welcome {userName}</h2>
      <p>
        <input
          type="text"
          value={submitted?userName:"unknown event"}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={(event) => handleClick(event)}>Set Name</button>
      </p>
    </section>
  );
}

*/
