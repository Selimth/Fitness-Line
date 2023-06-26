import React, { useState } from 'react'
import PopUp from './PopUp.jsx'
const Signup = ({ addUser, users, setRefresh, refresh, setView, setLogin }) => {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [goal, setGoal] = useState("")
    const [target, setTarget] = useState("")
    const [calories, setCalories] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [popUp, setPopUp] = useState(false)
    const caloriesLeft = calories

    const personalInfo = { username, password, weight, height, target, age, gender, goal, calories, caloriesLeft }

    return (
        <div>
            SignUP
            <table className='login-table' >
                <tbody>
                    <tr>
                        <td>
                            <input type='text' placeholder='Username' minLength="8" maxLength="15" onChange={(e) => {
                                //! check if username exists
                                for (var i = 0; i < users.length; i++) {
                                    console.log("true or false", e.target.value.toUpperCase() === users[i].username.toUpperCase());
                                    if (e.target.value.toUpperCase() === users[i].username.toUpperCase()) {
                                        return setPopUp(true)
                                    } else {
                                        setUsername(e.target.value)
                                        setPopUp(false)
                                    }
                                };
                                setRefresh(!refresh)
                            }} />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" placeholder='Password' minLength="8" maxLength="20" onChange={(e) => setPassword(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder='Weight' onChange={(e) => setWeight(Number(e.target.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder='Height' onChange={(e) => setHeight(Number(e.target.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder='Age' onChange={(e) => setAge(Number(e.target.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" placeholder='Target Weight' onChange={(e) => setTarget(Number(e.target.value))} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Gender : Male <input type="checkbox" value="male" onChange={(e) => {
                                if (e.target.checked) {
                                    setGender(e.target.value)
                                }
                            }} />
                        </td>
                        <td>
                            Female <input type="checkbox" value="female" onChange={(e) => {
                                if (e.target.checked) {
                                    setGender(e.target.value)
                                }
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Goal : Gain Weight<input type="checkbox" value="gain" onChange={(e) => {
                                if (e.target.checked) {
                                    setGoal(e.target.value);
                                    if (gender === "male") {//!calories for men to gain weight
                                        var bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)

                                        var calo = (target * 15) + bmr + 500

                                        setCalories(Number(calo.toFixed()));

                                    }
                                    else if (gender === "female") {//!calories for women to gain weight
                                        var bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)

                                        var calo = (target * 15) + bmr + 500

                                        setCalories(Number(calo.toFixed()));
                                    }
                                }
                            }} />
                        </td>
                        <td>
                            Lose Weight<input type="checkbox" value="lose" onChange={(e) => {
                                if (e.target.checked) {
                                    setGoal(e.target.value);
                                    if (gender === "male") {//! calories for men to lose weight 
                                        var bmr = 66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age)

                                        var calo = (target * 15) + bmr - 500

                                        setCalories(Number(calo.toFixed()));

                                    }
                                    else if (gender === "female") {//! calories for women to lose weight
                                        var bmr = 655.1 + (9.563 * weight) + (1.85 * height) - (4.676 * age)

                                        var calo = (target * 15) + bmr - 500

                                        setCalories(Number(calo.toFixed()));
                                    }
                                }
                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <PopUp popUp={popUp} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="Begin your journey" onClick={() => {
                                addUser(personalInfo);
                                setLogin(personalInfo)
                                setView("profile")
                            }} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Signup