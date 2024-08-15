import React, { useState } from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from '@material-ui/icons'
import {userRows} from '../../dummyData'
import {Link} from 'react-router-dom'

const UserList = () => {
  const[data,setData]=useState(userRows);
  const handleDelete=(id)=>{
  setData(data.filter((item)=>item.id!==id))
  }
  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "username",
      headerName: "User",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 180 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction Volume", width: 200 },
    { field: "action", headerName: "Action", width: 150,renderCell: (params) => {
      return (
        <>
        <Link to={"/user/"+params.row.id}><button className="userListEdit">Edit</button></Link>
        
        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
        </>
      )} },
  ];

  
  return (
    <>
      <div className="userList">
        <DataGrid
          rows={data}
          disableRowSelectionOnClick
          pageSize={5}
          columns={columns}
          checkboxSelection
          
        />
      </div>
    </>
  );
};

export default UserList;
