import React from 'react'
import './newUser.css'

const NewUser = () => {
  return (
    <>
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form  className="newUserForm">
            <div className="newUserItem">
                <label >UserName</label>
                <input type="text" placeholder='tapan12' />
            </div>
            <div className="newUserItem">
                <label >Full Name</label>
                <input type="text" placeholder='Tapan Das' />
            </div>
            <div className="newUserItem">
                <label >Email</label>
                <input type="email" placeholder='tapan12@gmail.com' />
            </div>
            <div className="newUserItem">
                <label >Password</label>
                <input type="password" placeholder='password' />
            </div>
            <div className="newUserItem">
                <label >Phone</label>
                <input type="text" placeholder='+91 9123345768' />
            </div>
            <div className="newUserItem">
                <label >Address</label>
                <input type="text" placeholder='India | Kolkata' />
            </div>
            <div className="newUserItem">
                <label >Gender</label>
                <div className="newUserGender">
                <input type="radio" name='gender'  id='male' value='male'/>
                <label for="male">Male</label>
                <input type="radio" name='gender'  id='female' value='female'/>
                <label for="female">Female</label>
                <input type="radio" name='gender'  id='other' value='other'/>
                <label for="other">Other</label>
                </div>
            </div>
            <div className="newUserItem">
            <label >Active</label>
            <select name="active" id="active" className="newUserSelect">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
            </div>
            <button className="newUserButton">Create</button>
        </form>
      </div>
    </>
  )
}

export default NewUser
