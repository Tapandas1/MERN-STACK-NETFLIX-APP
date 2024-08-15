import React ,{useContext, useEffect, useState} from "react";
import "./newList.css";
import { getMovies } from "../../context/movieContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext} from "../../context/movieContext/MovieContext";
import { createLists } from "../../context/listContext/apiCalls";
import { useNavigate } from "react-router-dom";

const NewList = () => {
  const [list, setList] = useState(null);
  const navigate=useNavigate();

  const {dispatch}=useContext(ListContext)
  const{movies,dispatch:dispatchMovie}=useContext(MovieContext)

  const handleChange=(e)=>{
    const value=e.target.value;
    setList({ ...list, [e.target.name]: value });
  }

  useEffect(()=>{
    getMovies(dispatchMovie)
  },[dispatchMovie])

  console.log(list);

 const handleSelect=(e)=>{
 // console.log(e.target.selectedOptions)
 let value=Array.from(e.target.selectedOptions,(option)=>option.value)
 setList({ ...list, [e.target.name]: value });
 }

const handleSubmit=(e)=>{
  e.preventDefault();
  createLists(list,dispatch)
  navigate("/lists")
}

  return (
    <>
      <div className="newProduct">
        <h1 className="addProductTitle">New Lists</h1>
        <form className="addProductForm">
          <div className="formLeft">
          <div className="addProductItem">
            <label> Title</label>
            <input type="text" placeholder="Popular Movies" name="title" onChange={handleChange}/>
          </div>
          <div className="addProductItem">
            <label> Genre</label>
            <input type="text" placeholder="Action" name="genre"  onChange={handleChange}/>
          </div>
          <div className="addProductItem">
            <label> Type</label>
            <select name="type" onChange={handleChange}>
            <option >Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
          </div>
          <div className="formright">
          <div className="addProductItem">
            <label> Content</label>
            <select multiple name="content" onChange={handleSelect} style={{height:"280px"}}>
              {movies.map((movie)=>(
              <option key={movie._id} value={movie._id}>{movie.title}</option>)
              )}
              
            </select>
          </div>
          </div>
          <button className="addProductButton" onClick={handleSubmit}>Create</button>
          

        </form>
      </div>
    </>
  );
};

export default NewList;
