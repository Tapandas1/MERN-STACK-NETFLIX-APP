import React ,{useEffect,useState}from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from 'axios'

const WidgetSm = () => {
  const[newUsers,setNewUsers]=useState([]);

  useEffect(()=>{
    const getnewUsers=async()=>{
      try{

        const response=await axios.get("/users?new=true",{
          headers:{
            token:"Bearer "+JSON.parse(localStorage.getItem("user")).accessToken
          }
        })
        //console.log(response);
        setNewUsers(response.data);
      }catch(err){
        console.log(err);
      }
    }
    getnewUsers();
  },[])

  return (
    <>
      <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
          {newUsers.map((user)=>(
             <li className="widgetSmListItem">
             <img
               className="widgetSmImg"
               src={user.profile_pic || "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"}
               alt=""
             />
             <div className="widgetSmUser">
               <span className="widgetSmUsername">{user.username}</span>
        
             </div>
             <button className="widgetSmButton">
               <Visibility />
               Display
             </button>
           </li>
          ))}
         
        </ul>
      </div>
    </>
  );
};

export default WidgetSm;
