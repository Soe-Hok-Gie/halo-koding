import React, { useState } from "react";

const BelajarBinding = () => {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <header className="App-header"></header>

      <input type="text" className="text" placeholder="type here" onChange={(typing) => typing.target.value} />
    </div>
  );
};

export default BelajarBinding;
