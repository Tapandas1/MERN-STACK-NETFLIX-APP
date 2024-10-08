import React ,{useContext, useState} from "react";
import "./newMovie.css";
import {storage} from "../../firebase";
import { createMovies } from "../../context/movieContext/apiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { getDownloadURL,ref,uploadBytesResumable } from "firebase/storage";
import {useNavigate} from "react-router-dom"

const NewMovie = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const {dispatch}=useContext(MovieContext)
  const navigate=useNavigate();

  const handleChange=(e)=>{
    const value=e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  }

  const upload =(items)=>{
   items.forEach((item)=>{
    const fileName=new Date().getTime +item.label+ item.file.name;
     //file name is created and through put it will store it and upload
    const storageRef=ref(storage,`/items/${fileName}`);
    const uploadTask=uploadBytesResumable(storageRef,item.file)
    uploadTask.on("state_changed",snapshot=>{
      const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log("upload is"+progress+"% done.")
    },(err)=>{
      console.log(err)
    },async()=>{
      try{
      const url=await getDownloadURL(uploadTask.snapshot.ref);
      console.log("Download URL:", url);
      setMovie((prev) => {
        return { ...prev, [item.label]: url };
      });
      setUploaded((prev) => prev + 1);
      }catch(err)
      {
console.log(err);
      }
    })
   })
  }

  console.log(movie);

  const handleUpload=(e)=>{
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ])
  }
const handleSubmit=(e)=>{
  e.preventDefault();
  createMovies(movie,dispatch)
  setTimeout(()=>{
    navigate("/movies")
  },2000)
}

  return (
    <>
      <div className="newProduct">
        <h1 className="addProductTitle">New Movie</h1>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Image</label>
            <input type="file" id="img"  name="img" onChange={(e)=>setImg(e.target.files[0])}/>
          </div>
          <div className="addProductItem">
            <label>Title Image</label>
            <input type="file" id="imgTitle" name="imgTitle"  onChange={(e) => setImgTitle(e.target.files[0])}/>
          </div>
          <div className="addProductItem">
            <label>ThumbNail Image</label>
            <input type="file" id="imgSm" name="imgSm"  onChange={(e) => setImgSm(e.target.files[0])} />
          </div>
          <div className="addProductItem">
            <label> Title</label>
            <input type="text" placeholder="Apple AirPod" name="title" onChange={handleChange}/>
          </div>
          <div className="addProductItem">
            <label> Description</label>
            <input type="text" placeholder="description" name="description"  onChange={handleChange}/>
          </div>
          <div className="addProductItem">
            <label> Year</label>
            <input type="text" placeholder="year" name="year" onChange={handleChange}/>
          </div>
          <div className="addProductItem">
            <label> Genre</label>
            <input type="text" placeholder="genre" name="genre" onChange={handleChange}/>
          </div>
          <div className="addProductItem">
            <label> Duration</label>
            <input type="text" placeholder="duration" name="duration"  onChange={handleChange}/>
          </div>
          <div className="addProductItem">
            <label> Limit</label>
            <input type="Number" placeholder="limit" name="limit" onChange={handleChange} />
          </div>
          <div className="addProductItem">
            <label> Is Series?</label>
            <select name="isSeries" id="isSeries" onChange={handleChange}>
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
          </div>
          <div className="addProductItem">
            <label> Trailer</label>
            <input name="video" type="file" onChange={(e) => setTrailer(e.target.files[0])} />
          </div>
          <div className="addProductItem">
            <label> Video</label>
            <input name="trailer" type="file"   onChange={(e) => setVideo(e.target.files[0])}/>
          </div>
          {uploaded === 5? (<button className="addProductButton" onClick={handleSubmit}>Create</button>) :
          (<button className="addProductButton" onClick={handleUpload}>Upload</button>)}
          

        </form>
      </div>
    </>
  );
};

export default NewMovie;
