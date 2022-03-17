import React, { useState, useEffect } from "react";

const LogicBinding = () => {
  const [text, setText] = useState(""); //state pertama

  const [showImage, setshowImage] = useState(false); //state kedua

  useEffect(() => {
    text == "poem" ? setshowImage(true) : setshowImage(false);
  }, [text]); // logic memunculkan gambar jika dimasukkan kata-kata "poem"

  return (
    <div className="App">
      <header className="App-header"></header>
      {showImage ? <img src="./assets/kupu-kupu.png" alt="" className="Web Developer" /> : ""} {/*logic menghilangkan gambar */}
      <h5>{text}</h5>
      <input type="text" className="text" placeholder="type here" onChange={(typing) => setText(typing.target.value)} />
    </div>
  );
};

export default LogicBinding;
