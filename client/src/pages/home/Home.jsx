import React from "react";
import axios from "axios";
import Navbar from "../../Components/navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import List from "../../Components/list/List";
import "./home.css";
import { useEffect, useState } from "react";

const Home = ({type}) => {
  const[lists,setLists]=useState([]);
  const[genre,setGenre]=useState(null);
  useEffect(()=>{
    const getRandomLists=async()=>{
      try{
        const response=await axios.get(`lists${type ? "?type=" +type:" "}${genre ?  "&genre=" +genre:""}`,{
          headers:{
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          }
        });
       // console.log(response);
        setLists(response.data);

      }catch(err)
      {
        console.log(err);
      }
    }
    getRandomLists();
  },[type,genre])
 // console.log(lists)
  return (
    <>
      <div className="home">
        <Navbar />
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list)=>{
        return  (<List list={list}/>)
        })}
        
      </div>
    </>
  );
};

export default Home;
