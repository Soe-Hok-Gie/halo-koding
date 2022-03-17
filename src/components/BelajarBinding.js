import React, { useState } from "react";

const BelajarBinding = () => {
  const [text, setText] = useState(""); //state untuk menampung data

  return (
    <div className="App">
      <header className="App-header"></header>
      <h5>{text}</h5> {/*mengambil state yg telah diubah */}
      <input type="text" className="text" placeholder="type here" onChange={(typing) => setText(typing.target.value)} />
      {/* Binding data */}
    </div>
  );
};

export default BelajarBinding;
