import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import axios from 'axios'
import Profile from './components/Profile.jsx'
const App = () => {
  const [users, setUsers] = useState([])
  const [view, setView] = useState("login")
  const [refresh, setRefresh] = useState(false)
  const [login, setLogin] = useState({})
  useEffect(() => {
    fetch()
  }, [refresh])
  //!fetch data
  const fetch = () => {
    axios.get("http://localhost:3000/api/Fitness-Line/getAllUsers")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err))
  }

  //!Check if user exists
  const checkUser = (username, password) => {
    const userinfo = users.filter((user) => user.username === username)
    if (userinfo.length !== 0) {
      setLogin(userinfo)
      if (userinfo[0].password === password) {
        return true
      }
      else return false
    }
    else {
      return false
    }
  }

  //! Update Calories based on what the user consumes
  const updateCalories = (id, calories) => {
    axios.put(`http://localhost:3000/api/Fitness-Line/caloriesLeft/${id}`, calories)
      .then((response) => setRefresh(!refresh))
      .catch((err) => console.log(err))
  }

  //!Make a new user
  const addUser = (info) => { //*info is personal information
    axios.post("http://localhost:3000/api/Fitness-Line/addUser", info)
      .then((response) => console.log("Added user successfully"))
      .catch((err) => console.log(err))
    setRefresh(!refresh)
  }

  //! changeView
  if (view === "login") {
    return (
      <div className='main'>
        <div className='login-container'>
          <Login checkUser={checkUser} setView={setView} setLogin={setLogin} />
        </div>
      </div>
    )
  }
  else if (view === "signup") {
    return (
      <div className='main'>
        <div className='signup-container'>
          <Signup addUser={addUser} users={users} setRefresh={setRefresh} refresh={refresh} setView={setView} setLogin={setLogin} />
        </div>
      </div>
    )
  }
  else if (view === "profile") {
    return (
      <div className='main'>
        <div className='profile-container'>
          <Profile login={login} updateCalories={updateCalories} users={users} setLogin={setLogin} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
