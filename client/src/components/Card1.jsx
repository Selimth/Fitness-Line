import React, { useState } from 'react'
const Card1 = ({ login, updateCalories, users }) => {
    const [caloriesLeft, setCalories] = useState(login[0].caloriesLeft)
    const [consumed, setConsumed] = useState("")
    console.log("caloriesLeft const", caloriesLeft);
    console.log("login", login[0].calories);
    const userAfterUpdate = users.filter((user) => {
        return login[0]._id === user._id
    })

    console.log("userafterupadte", userAfterUpdate);
    return (
        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header bg-transparent border-success dailycalories ">Daily Calories Left </div>
            <div className="card-body text-success">
                <h2 className="card-text calories">{userAfterUpdate[0].caloriesLeft}</h2>
            </div>
            <div className="card-footer bg-transparent border-success"> <div className="form-group mx-sm-3 mb-2">
                <input type="text" className="form-control calories" id="inputPassword2" placeholder="Add Calories" onChange={(e) => setConsumed(Number(e.target.value))} /><br />
                <button type="button" className="btn btn-outline-success button" onClick={() => {
                    if (caloriesLeft <= 0) {
                        setCalories(login[0].calories)
                        updateCalories(login[0]._id, { caloriesLeft: login[0].caloriesd });
                    } else {
                        updateCalories(login[0]._id, { caloriesLeft: caloriesLeft - consumed });
                        setCalories(caloriesLeft - consumed)
                    }
                }} >Consume</button>
            </div></div>
        </div>
    )
}

export default Card1