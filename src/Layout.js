import React, { useState } from "react";
import { Header } from "./components/header/Header";
import  Sidebar  from "./components/sidebar/Sidebar";


function Layout({ children }) {
    console.log(children);
    
  return (
    <div>
    <Header />
    <Sidebar />
    {children}
    </div>
  )
}

export default Layout;