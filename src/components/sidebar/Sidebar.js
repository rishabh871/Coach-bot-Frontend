import React from 'react';
import "../../App.css"

import logo from '../../Assets/home/logo.png'
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {


  const location =useLocation()
  console.log(location,"location")
  return (
    <div>
      <div className="side-bar">
        <a className="abs-bk" href="/"><i className="fa-solid fa-caret-left"></i> </a>
        <div className="logo-sec d-none">
          <img className="w-100 logo-top" src="images/logo.png" alt="" />
        </div>
        <div className='d-flex justify-content-center' >

          <img src={logo} alt="" height="80" className='p-2' />
     
        </div>
        <div className="link-div my-3">
          <ul className="link-ul">
            <li><Link className={location.pathname==="/"?"active":""}  to="/"><i className="fa-solid fa-house"></i>Home</Link></li>
            <li><Link className={location.pathname ==="/addwallet"?"active":""} to="/addwallet"><i className="fa-solid fa-user"></i>Add Wallet</Link></li>
            <li><Link className={location.pathname==="/buytoken"?"active":""} to="/buytoken"><i className="fa-solid fa-closed-captioning"></i>Buy</Link></li>
            <li><Link className={location.pathname==="userprofile"?"active":""} to="/"><i className="fa-solid fa-user"></i>User Profile</Link></li>
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
