import React, {useContext, useEffect} from 'react'
import './movieList.css'
import { DataGrid } from "@mui/x-data-grid";
import {DeleteOutline} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import { MovieContext } from '../../context/movieContext/MovieContext';
import { deleteMovies, getMovies } from '../../context/movieContext/apiCalls';

const MovieList = () => {
    const{movies,dispatch}=useContext(MovieContext)

    useEffect(()=>{
      getMovies(dispatch)
    },[dispatch])

    //console.log(movies)

    const handleDelete=(id)=>{
    deleteMovies(id,dispatch)
    }
    const columns = [
      { field: "_id", headerName: "ID", width: 90 },
      {
        field: "movie",
        headerName: "Movie",
        width: 180,
        renderCell: (params) => {
          return (
            <div className="productListUser">
              <img className="productListImg" src={params.row.img} alt="" />
              {params.row.name}
            </div>
          );
        },
      },
      { field: "genre", headerName: "Genre", width: 120 },
      { field: "year", headerName: "Year", width: 120 },
      { field: "limit", headerName: "Limit", width: 200 },
      { field: "action", headerName: "Action", width: 150,renderCell: (params) => {
        return (
          <>
          <Link to={"/movie/"+params.row._id} state={{movie:params.row}}><button className="productListEdit">Edit</button></Link>
          <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
          </>
        )} },
    ];
  
  return (
    <>
      <div className="productList">
      <DataGrid
          rows={movies}
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

export default MovieList
