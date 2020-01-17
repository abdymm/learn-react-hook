import React, { useState } from "react";
import useInput from "./hooks/useInput";

function Form() {
  const initialValue = "";

  const [username, usernameReset, usernameBind] = useInput(initialValue);
  const [password, passwordReset, passwordBind] = useInput(initialValue);

  const reset = () => {
    alert(`Halo ${username} & ${password}`);
    usernameReset();
    passwordReset();
  };

  return (
    <div className="row">
      <div>
        <label>Username</label>
        <input type="text" {...usernameBind} />
      </div>

      <div>
        <label>Password</label>
        <input type="text" {...passwordBind} />
      </div>

      <button
        className="waves-effect waves-light btn btn-block"
        onClick={reset}
      >
        LOGIN
      </button>
    </div>
  );
}

export default Form;
