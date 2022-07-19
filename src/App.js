import React from "react";
import BelajarBinding from "./components/BelajarBinding";
import LogicBinding from "./components/LogicBinding";
import Todolist from "./components/Todolist";
// import Topbar from "./components/Topbar";
// import Menu from "./components/Menu";

// import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
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
