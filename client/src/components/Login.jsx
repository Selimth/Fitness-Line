import React, { useState } from 'react'
import Notexisting from './Notexisting.jsx'
const Login = ({ checkUser, setView }) => {
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [exists, setExists] = useState(false)
    return (
        <div>
            Login
            <table className='login-table'>
                <tbody>
                    <tr>
                        <td>
                            <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="Login" onClick={() => {
                                if (checkUser(username, password)) {
                                    setView("profile")
                                    setExists(false)
                                } else {
                                    setExists(true)
                                }

                            }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Notexisting exists={exists} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button" value="Sign Up" onClick={() => setView("signup")} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login