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

export default React.memo(ButtonIncrement);
