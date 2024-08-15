import React, { useRef, useState } from "react";
import "./register.css";
import axios from 'axios'
import {useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[username,setUsername]=useState("");
  const navigate=useNavigate();

  const emailRef = useRef();
  const usernameRef=useRef();
  const passwordRef = useRef();
  

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async(e) => {
    e.preventDefault();
    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
   
    try{
      await axios.post("/auth/register",{email,username,password});
      setTimeout(()=>{
        navigate("/login");
      },1000)
      
    }
    catch(err){
      console.log(err)
    }
   
  };
const handleSign=()=>{
  console.log("clicked")
  navigate("/login")
}
  return (
    <>
      <div className="register">
        <div className="top">
          <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
              alt=""
            />
            <button className="loginButton" onClick={handleSign}>Sign In</button>
          </div>
        </div>
        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="input">
              <input type="email" placeholder="email address" ref={emailRef} />
              <button className="registerButton" onClick={handleStart}>
                Get Started
              </button>
            </div>
          ) : (
            <form className="input">
              <input type="username" placeholder="username" ref={usernameRef} />
              <input type="password" placeholder="paswword" ref={passwordRef} />
              <button className="registerButton" onClick={handleFinish}>
                Register
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Register;
