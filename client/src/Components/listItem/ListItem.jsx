import React, { useState,useEffect } from "react";
import "./listItem.css";
import {
  PlayArrow,
  Add,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import axios from'axios';
import {Link} from 'react-router-dom'

const ListItem = ({index,item}) => {
  const[isHovered,setIsHovered]=useState(false);
  const[movie,setMovie]=useState({});
  useEffect(()=>{
    const getMovie=async()=>{
      try{
        const response=await axios.get('/movies/find/'+ item,{/* item mai id hai isliye uska movie nikal rahe*/
          headers:{
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          }
        })
       //console.log(response);
       setMovie(response.data);
      }catch(err)
      {
        console.log(err);
      }
    }
    getMovie();
  },[item])
  //console.log(movie)
  //const trailer="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  return (
    <>
    <Link to='/watch' state={{movie:movie}}>
    <div className="listItem" 
      style={{left:isHovered && index*225-50 + index*2.5}}
      onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <img
          className="img"
          src={movie.img} //since item ka id value movie so not item. but movie.
          alt=""
        />{isHovered && (<><video src={movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow className="icon"/>
            <Add className="icon"/>
            <ThumbUpOutlined className="icon"/>
            <ThumbDownOutlined className="icon"/>
          </div>
          <div className="itemInfoTop">
            <span>{movie.duration}</span>
            <span className="limit">+{movie.limit}</span>
            <span>{movie.year}</span>
          </div>
          <div className="description">
            {movie.desc}
          </div>
          <div className="genre">{movie.genre}</div>
        </div></>)}
        
      </div>
    </Link>
      
    </>
  );
};

export default ListItem;
