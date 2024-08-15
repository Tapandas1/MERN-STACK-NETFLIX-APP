import React from "react";
import "./user.css";
import {
  PermIdentity,
  CalendarToday,
  LocationSearching,
  MailOutline,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newUser" >
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Tapan Das</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">tapandas12</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className="userShowIcon" />
                <span className="userShowInfoTitle">6.6.1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <PhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">+91 9123354820</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">
                  tapandasjee1000@gmail.com
                </span>
              </div>
              <div className="userShowInfo">
                <LocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">India | Kolkata</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>UserName</label>
                  <input
                    type="text"
                    placeholder="tapandas12"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Tapan Das"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="tapandasjee1000@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="+91 9123354820"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="India | Kolkata"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="userUpdateImg"
                  />
                  <label htmlFor="file">
                    <Publish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
