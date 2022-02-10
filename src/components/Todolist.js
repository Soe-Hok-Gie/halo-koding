import React, { useState } from "react";
import List from "./List";

const Todolist = () => {
  const [currentItem, setCurrentItem] = useState();
  const [itemList, UpdateItemList] = useState([]);

  const onChangeValue = (event) => {
    setCurrentItem(event.target.value);
  };

  const addItemList = () => {
    UpdateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };
  return (
    <div>
      <form>
        <input value={currentItem} onChange={onChangeValue} />
        <bottom onClick={addItemList}>add</bottom>
      </form>

      <List />
    </div>
  );
};

export default Todolist;
