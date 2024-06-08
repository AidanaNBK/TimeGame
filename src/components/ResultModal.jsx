import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(props, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
      {/* adding "open" property to <dialog> makes it visible */}
      <h2> Your Score: {props.result}</h2>
      <p>
        The target time was <strong>{props.targetTime}</strong>
      </p>
      <p>
        You've stopped timer with <strong>X seconds</strong>
      </p>
      <form method="dialog">
        {/* If there method = "dialog" in the <dialog> component, button allows to close */}
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
