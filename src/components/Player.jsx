import { useState } from "react";

export default function Player(props) {
  let [submitted, setSubmitted] = useState(false);
  let [userName, setUserName] = useState("unknown entity");

  function handleChange(event) {
    setUserName(event.target.value);
  }
  function handleClick(event) {
    event.preventDefault();
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? userName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          value={userName}
          onChange={(event) => handleChange(event)}
        />
        <button onClick={(event) => handleClick(event)}>Set Name</button>
      </p>
    </section>
  );
}
