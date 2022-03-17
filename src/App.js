import React from "react";
import BelajarBinding from "./components/BelajarBinding";
import LogicBinding from "./components/LogicBinding";
import Todolist from "./components/Todolist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/belajarbinding" element={<BelajarBinding />} />
          <Route path="/logicbinding" element={<LogicBinding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
