import React, { useState } from "react";

const Todolist = () => {
  const [item, setItem] = useState();

  const onChange = (event) => {
    console.log(event.preventDefault);
    setItem(event.preventDefault);
  };
  return (
    <form>
      <input value={item} onChange={onChange} />
      <bottom>add</bottom>
    </form>
  );
};

export default Todolist;
