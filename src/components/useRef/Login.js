import React, { useRef, useEffect } from "react";

function Login() {
  const usernameInputRef = useRef(null);

  useEffect(() => {
    usernameInputRef.current.focus();
    
  }, []);

  return (
    <div>
      <input ref={usernameInputRef} type="text" placeholder="Username"></input>
      <input type="text" placeholder="Password"></input>
    </div>
  );
}

export default Login;
