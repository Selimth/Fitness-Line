import React from 'react'
import Cards from './Cards.jsx'
const Profile = ({ login, updateCalories, users, setLogin }) => {
    return (
        <div className='parent' >
            <div id='dashboard'>Dashboard</div>
            <div id='fitness'>fitness</div>
            <Cards login={login} updateCalories={updateCalories} users={users} setLogin={setLogin} />
        </div>
    )
}

export default Profile