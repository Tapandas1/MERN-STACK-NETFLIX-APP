import React from "react";
import './topbar.css'
import {NotificationsNoneOutlined,LanguageOutlined,ExitToApp} from  '@material-ui/icons'
import { useContext } from "react";
import {AuthContext} from '../../context/authContext/AuthContext'
import {logout} from '../../context/authContext/AuthActions'


const Topbar = () => {
  const {dispatch}=useContext(AuthContext);
  return (
    <>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">TapanAdmin</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
            <NotificationsNoneOutlined/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <LanguageOutlined/>
            <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
            <ExitToApp onclick={()=>dispatch(logout())}/>
            </div>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
