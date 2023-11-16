import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./pages/Dashboard";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Addwallet from "./components/addWallet/AddWallet";
import Buytoken from "./components/buytoken/Buytoken";

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addwallet" element={<Addwallet/>}></Route>
        <Route path="/buytoken" element={<Buytoken/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
