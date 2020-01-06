import React from "react";

function Title() {
  console.log("Rendering-TITLE");
  return <h4>Dzikir App</h4>;
}

export default React.memo(Title);
