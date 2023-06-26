import React, { useState } from 'react'
import Card1 from './Card1.jsx'
import ExercicesList from './ExercicesList.jsx'
import Card2 from './Card2.jsx'
import AllExercices from "./AllExercices.jsx"
const Profile = ({ setView, delUserEx, login, updateCalories, users, setLogin, addExerciceToDb, exercices, addExToUser, userExercices, getUserEx }) => {
    const [name, setExerciceName] = useState("")
    const [duration, setDuration] = useState("")
    return (
        <div>
            <nav id='logout'><span onClick={() => setView("login")}>Logout</span></nav>
            <div className="container,parent">
                <h1 id='dashboard'>Dashboard</h1>

                <div className="row">
                    <div className="col-sm ">
                        <h2 id='Fitness'>Fitness</h2>
                        <Card1 login={login} updateCalories={updateCalories} users={users} setLogin={setLogin} />
                    </div>
                    <div className="col-sm ">
                        <h2 id='Personal'>Personal Stats</h2>
                        <Card2 login={login} />
                    </div>
                </div>
                <div className="row s">
                    <div className="col-sm f">
                        <h2 className='All Exercices'>Exercices</h2>
                        {userExercices.map((ex, i) => {
                            return <ExercicesList ex={ex} key={i} delUserEx={delUserEx} login={login} />
                        })}
                        <button type="button" className="btn btn-outline-success button2" onClick={() => getUserEx(login[0]._id)}>Show</button>

                    </div>
                    <div className="col-sm p">
                        <h2 className=' Exercices'>All Exercices</h2>
                        {exercices.map((exercice) => {
                            return <AllExercices exercice={exercice} key={exercice._id} addExToUser={addExToUser} login={login} />
                        })}

                        <div className="input-group">
                            <input type="text" className="form-control calories addExercice " placeholder=" Exercice Name" style={{ maxWidth: "18rem" }} onChange={(e) => setExerciceName(e.target.value)} />
                            <input type="text" className="form-control calories addExercice " placeholder=" Exercice Length" style={{ maxWidth: "18rem" }} onChange={(e) => setDuration(Number(e.target.value))} />
                        </div>
                        <button type="button" className="btn btn-outline-success button2" onClick={() => addExerciceToDb({ name, duration })}>Add</button>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default Profile