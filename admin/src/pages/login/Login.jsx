import React, { useContext, useState } from "react";
import "./login.css";
import {AuthContext} from '../../context/authContext/AuthContext'
import {login} from '../../context/authContext/apiCalls'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin=(e)=>{
    e.preventDefault();
    login({email,password},dispatch)
 }
 const{isFetching,dispatch}=useContext(AuthContext)
  return (
    <>
      <div className="login">
        <form className="loginForm">
          <input
            type="text"
            placeHolder="email"
            className="loginInput"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeHolder="password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
