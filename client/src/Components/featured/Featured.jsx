import React, { useState,useEffect } from "react";
import "./featured.css";
import {PlayArrow,Info} from '@material-ui/icons'
import axios from "axios";

const Featured = ({type,setGenre}) => {
  const[content,setContent]=useState({})
  useEffect(()=>{
    const getRandomContent=async()=>{
try{
  const response=await axios.get(`/movies/random?type=${type}`,{
    headers:{
      token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
    }
  })
  //console.log(response);
  setContent(response.data[0]) //since it is an array

}catch(err){
console.log(err)
}
  }
  getRandomContent();
  },[type])
  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type==="movie"?"Movies":"Series"}</span>
            <select  className="select" name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical">Historical</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Animation">Animation</option>
            <option value="Drama">Drama</option>
            <option value="Documentary">Documentary</option>
            </select>
          </div>
        )}
        <img
        className="image3"
         // src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
         src={content.img}
        
          alt=""
        />
        <div className="info">
          <img
          className="image4"
           // src={content.imgTitle}
           src=""
            alt=""
          />
          <span className="desc">{content.desc}
          </span>
          <div className="buttons">
            <button className="play"><PlayArrow/>
            <span className="span">Play</span>
            </button>
            <button className="more">
              <Info/>
              <span className="span">Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
