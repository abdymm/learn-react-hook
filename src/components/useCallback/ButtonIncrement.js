import React from "react";

function ButtonIncrement({ onClick, children }) {
  console.log("Rendering-Button", children);
  return (
    <div>
      <button
        className="waves-effect waves-light btn btn-block"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

function areEqual(prevProps, nextProps) {
  // console.log("Diff-Props-prev", prevProps);
  // console.log("Diff-Props-next", nextProps);
}
export default React.memo(ButtonIncrement, areEqual);
