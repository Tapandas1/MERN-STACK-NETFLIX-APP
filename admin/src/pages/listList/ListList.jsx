import React, {useContext, useEffect} from 'react'
import './listList.css'
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { ListContext } from '../../context/listContext/ListContext';
import { deleteLists, getLists } from '../../context/listContext/apiCalls';

const ListList = () => {
    const{lists,dispatch}=useContext(ListContext)

    useEffect(()=>{
      getLists(dispatch)
    },[dispatch])

    //console.log(movies)

    const handleDelete=(id)=>{
    deleteLists(id,dispatch)
    }
    const columns = [
      { field: "_id", headerName: "ID", width: 90 },
      { field: "genre", headerName: "Genre", width: 120 },
      { field: "title", headerName: "Title", width: 120 },
      { field: "type", headerName: "RType", width: 200 },
      { field: "action", headerName: "Action", width: 150,renderCell: (params) => {
        return (
          <>
          <Link to={"/list/"+params.row._id} state={{list:params.row}}><button className="productListEdit">Edit</button></Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
          </>
        )} },
    ];
  
  return (
    <>
      <div className="productList">
      <DataGrid
          rows={lists}
          disableRowSelectionOnClick
          pageSize={5}
          columns={columns}
          checkboxSelection
          getRowId={(r)=>r._id}
        />
      </div>
    </>
  )
}

export default ListList
