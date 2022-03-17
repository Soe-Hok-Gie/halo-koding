import React, { useState } from "react";

const LogicBinding = () => {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <header className="App-header"></header>
      <h5>{text}</h5>
      <input type="text" className="text" placeholder="type here" onChange={(typing) => setText(typing.target.value)} />
    </div>
  );
};

export default LogicBinding;
