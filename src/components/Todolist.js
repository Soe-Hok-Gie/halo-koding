import React from "react";

const Todolist = () => {
  const hendleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={(event) => hendleSubmit(event)}>
      <input></input>
      <bottom>add</bottom>
    </form>
  );
};

export default Todolist;
