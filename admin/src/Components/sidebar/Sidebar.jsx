import React from "react";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PlayCircleOutline,
  List,
  Add,
} from "@material-ui/icons";
import "./sidebar.css";
import {Link} from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
       <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
            <Link to='/' className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
              </Link>
              <li className="sidebarListItem">
                <Timeline className="sidebarIcon" />
                Analytics
              </li>
              <li className="sidebarListItem">
                <TrendingUp className="sidebarIcon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Users</h3>
            <ul className="sidebarList">
              <Link to='/users' className="link">
              <li className="sidebarListItem active">
                <PermIdentity className="sidebarIcon" />
                Users List
              </li>
              </Link>
              <Link to='/newUser' className="link">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                Create User
              </li>
              </Link>
              
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Movies</h3>
            <ul className="sidebarList">
            <Link to='/movies' className="link">
              <li className="sidebarListItem active">
                <PlayCircleOutline className="sidebarIcon" />
                Movies List
              </li>
              </Link>
              <Link to='/newmovie' className="link">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                Add Movies
              </li>
              </Link>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">List Varieties</h3>
            <ul className="sidebarList">
            <Link to='/lists' className="link">
              <li className="sidebarListItem">
                <List className="sidebarIcon" />
                Lists
              </li>
              </Link>
              <Link to='/newlist' className="link">
              <li className="sidebarListItem">
                <Add className="sidebarIcon" />
                Create Lists
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Sidebar;
