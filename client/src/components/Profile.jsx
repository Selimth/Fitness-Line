import React from 'react'
import Card1 from './Card1.jsx'
import ExercicesList from './ExercicesList.jsx'
import Card2 from './Card2.jsx'
const Profile = ({ login, updateCalories, users, setLogin }) => {
    return (

        <div className="container,parent">
            <h1 id='dashboard'>Dashboard</h1>

            <div className="row">
                <div className="col-sm f">
                    <h2 id='Fitness'>Fitness</h2>
                    <Card1 login={login} updateCalories={updateCalories} users={users} setLogin={setLogin} />
                </div>
                <div className="col-sm p">
                    <h2 id='Personal'>Personal Stats</h2>
                    <Card2 login={login} />
                </div>
            </div>
            <h2 className='Exercices'>Exercices</h2>
            <ExercicesList />
        </div>
    )
}

export default Profile