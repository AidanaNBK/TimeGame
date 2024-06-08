import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(props, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const userLost = props.remainingTime <= 0;
  const score =
    (1 - props.remainingTime / (props.targetTime * 1000)).toFixed(2) * 100;
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={props.onReset}>
      {/* adding "open" property to <dialog> makes it visible */}
      <h2> {userLost ? "You've lost" : `Your Score ${score}`}</h2>
      <p>
        The target time was <strong>{props.targetTime}</strong>
      </p>
      {userLost ? (
        ""
      ) : (
        <p>
          You've stopped timer with{" "}
          <strong>{(props.remainingTime / 1000).toFixed(2)}</strong>
        </p>
      )}
      <form method="dialog" onSubmit={props.onReset}>
        {/* If there method = "dialog" in the <dialog> component, button allows to close */}
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
