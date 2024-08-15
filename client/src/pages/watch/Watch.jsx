import React from "react";
import "./watch.css";
import { ArrowBackOutlined } from "@material-ui/icons";
import{Link,useLocation } from 'react-router-dom'

const Watch = () => {
  const location=useLocation();
  console.log(location);
  
  const movie=location.state.movie;
  console.log(movie);
  return (
    <>
      <div className="watch">
        <Link to='/'> <div className="back">
          <ArrowBackOutlined />
          Home
        </div></Link>
       
        <video
          className="video"
          autoPlay
          controls
          //src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
          src={movie.video}
        />
      </div>
    </>
  );
};

export default Watch;
