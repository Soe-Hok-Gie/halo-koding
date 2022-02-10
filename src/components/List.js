import React from "react";

const List = (props) => {
  return (
    <ul>
      {props.itemList.map((itemObj) => (
        <li>{itemObj.item}</li>
      ))}
    </ul>
  );
};

export default List;
