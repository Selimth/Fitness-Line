import React, { useState } from 'react'
import Notexisting from './Notexisting.jsx'
const Login = ({ checkUser, setView }) => {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [exists, setExists] = useState(false)
    return (
        <form >

            <div className="form-group">
                <h1 onClick={() => setView("login")}>Login</h1><br />
                <br />
                <label >Username</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" onChange={(e) => setUsername(e.target.value)} style={{ maxWidth: "18rem" }} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} style={{ maxWidth: "18rem" }} />
                <br />
                <button type="button" className="btn btn-outline-success" onClick={() => {
                    if (checkUser(username, password)) {
                        setView("profile")
                        setExists(false)
                    } else {
                        setExists(true)
                    }

                }}>Login</button>

                <Notexisting exists={exists} />
                <br />
                <button type="button" className="btn btn-outline-success" onClick={() => setView("signup")}>SignUp</button>
            </div>

        </form>


    )
}

export default Login