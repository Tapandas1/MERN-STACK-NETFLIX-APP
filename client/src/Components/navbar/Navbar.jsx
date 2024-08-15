import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {Search,Notifications,ArrowDropDown} from "@material-ui/icons"
import './navbar.css'
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const[isScrolled,setIsScrolled]=useState(false);
   const {dispatch}=useContext(AuthContext)

  window.onscroll = ()=>{
    setIsScrolled(window.pageYOffset === 0? false :true) //0 means at the top console.log(window.pageYOffset)
    return () => (window.onscroll=null) //cleanup function otherwise it will be a loop
  }
//console.log(isScrolled);

  return (
    <>
      <div className={isScrolled?"navbarscrolled":"navbar"}>
        <div className="container">
          <div className="left">
            <img
            className="image1"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            <Link to='/' className="link"><span className="span1">HomePage</span></Link>
            <Link to="/series" className="link"><span className="span1">Series</span></Link>
            <Link to="/movies"className="link"><span className="span1">Movies</span></Link>
            <span className="span1">New and Popular</span>
            <span className="span1">My List</span>
          </div>
          <div className="right">
          <Search className="span1"/>
          <span className="span1">KID</span>
          <Notifications className="span1"/>
          <img
          className="image2"
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <div className="profile">
            <ArrowDropDown className="span1"/>
            <div className="options">
              <span className="span2">Settings</span>
              <span className="span2" onClick={()=>dispatch(logout())}>Logout</span>
            </div>
          </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Navbar;
