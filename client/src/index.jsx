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
  const [exercices, setExercices] = useState([])
  const [userExercices, setUserExercices] = useState([])

  useEffect(() => {
    fetch()
    allExercices()
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
  //! Add exercice to db
  const addExerciceToDb = (exercice) => {
    console.log("exercice inside add", exercice);
    axios.post("http://localhost:3000/api/Fitness-Line/addExercice", exercice)
      .then((response) => { console.log("Successfully added"); setRefresh(!refresh) })
      .catch((err) => console.log(err))
  }

  //! Get all exercices from database
  const allExercices = () => {
    axios.get("http://localhost:3000/api/Fitness-Line/allExercices")
      .then((response) => setExercices(response.data))
      .catch((err) => console.log(err))
  }

  //!Add exercice to user
  const addExToUser = (id, exercice) => {
    axios.put(`http://localhost:3000/api/Fitness-Line/userExercice/${id}`, exercice)
      .then((res) => { console.log("Updated successfully"), setRefresh(!refresh); getUserEx(id) })
      .catch((err) => console.log(err))
  }

  //!Get user exercices
  const getUserEx = (id) => {
    axios.get(`http://localhost:3000/api/Fitness-Line/getUserExercice/${id}`)
      .then((res) => setUserExercices(res.data))
      .catch((err) => console.log(err))
  }
  //!Delete user's exercice
  const delUserEx = (idUs, idEx) => {
    axios.delete(`http://localhost:3000/api/Fitness-Line/${idUs}/deleteUserEx/${idEx}`)
      .then((res) => console.log("Deleted Successfully"), getUserEx(idUs))
      .catch((err) => console.log(err))
  }

  //! ChangeView
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
          <Profile setView={setView} delUserEx={delUserEx} login={login} updateCalories={updateCalories} users={users} setLogin={setLogin} addExerciceToDb={addExerciceToDb} exercices={exercices} addExToUser={addExToUser} getUserEx={getUserEx} userExercices={userExercices} />
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
