import React from "react";

function Counter({ count, children }) {
  console.log("Rendering-Counter", children);
  return (
    <div>
      <h5>{count}</h5>
      <h6>{children}</h6>
    </div>
  );
}

export default React.memo(Counter);
