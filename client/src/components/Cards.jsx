import React, { useState } from 'react'
const Cards = ({ login, updateCalories, users, setLogin }) => {
    const [calories, setCalories] = useState(login[0].caloriesLeft)
    const [consumed, setConsumed] = useState("")
    console.log("calories", calories);
    console.log(login);
    const userAfterUpdate = users.filter((user) => {
        return login[0]._id === user._id
    })

    console.log("userafterupadte", userAfterUpdate);
    return (
        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header bg-transparent border-success calories ">Daily Calories </div>
            <div className="card-body text-success">
                <h2 className="card-text calories">{userAfterUpdate[0].caloriesLeft}</h2>
            </div>
            <div className="card-footer bg-transparent border-success"> <div className="form-group mx-sm-3 mb-2">
                <input type="password" className="form-control calories" id="inputPassword2" placeholder="Add Calories" onChange={(e) => setConsumed(Number(e.target.value))} />
                <button type="button" className="btn btn-outline-success center" onClick={() => { updateCalories(login[0]._id, { caloriesLeft: calories - consumed }) }} >Consume</button>
            </div></div>
        </div>
    )
}

export default Cards