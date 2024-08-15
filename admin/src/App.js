import React, { useContext } from 'react'
import Topbar from './Components/topbar/Topbar'
import Sidebar from './Components/sidebar/Sidebar'
import Home from './pages/home/Home'
import {Routes,Route, Navigate} from 'react-router-dom'
import './App.css'
import UserList from './pages/userList/UserList'
import User from './pages/user/User'
import NewUser from './pages/newUser/NewUser'
import MovieList from './pages/movieList/MovieList'
import Movie from './pages/movie/Movie'
import NewMovie from './pages/newMovie/NewMovie'
import Login from './pages/login/Login'
import { AuthContext } from './context/authContext/AuthContext'
import ListList from './pages/listList/ListList'
import List from './pages/list/List'
import NewList from './pages/newList/NewList'

const App = () => {
  const {user}=useContext(AuthContext)
  return (
    <>
   <Routes>
      <Route path="/login" element={user?<Navigate to='/'/>:<Login/>}/>
      </Routes>
      {user &&
      <>
      <Topbar/> 
   
     <div className='container'>
      <Sidebar/> 
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/users" element={<UserList/>}/>
        <Route  path="/user/:userId" element={<User/>}/>
        <Route  path="/newUser" element={<NewUser/>}/>
        <Route  path="/movies" element={<MovieList/>}/>
        <Route  path="/movie/:movieId" element={<Movie/>}/>
        <Route  path="/newmovie" element={<NewMovie/>}/>
        <Route  path="/lists" element={<ListList/>}/>
        <Route  path="/list/:listId" element={<List/>}/>
        <Route  path="/newList" element={<NewList/>}/>
        </Routes>
     
     </div>
     </>
    }
    </>
  )
}

export default App
