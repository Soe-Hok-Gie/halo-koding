import React, { useState } from "react";

const Todolist = () => {
  const [item, setItem] = useState();

  const onChangeValue = (event) => {
    setItem(event.preventDefault);
  };

  const addItemList = () => {};
  return (
    <form>
      <input value={item} onChange={onChangeValue} />
      <bottom onClick={addItemList}>add</bottom>
    </form>
  );
};

export default Todolist;
