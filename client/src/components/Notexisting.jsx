import React from 'react'
const Notexisting = ({ exists }) => {
    console.log("exists", exists);
    if (exists === false) {
        return (
            <div></div>
        )
    } else {
        return (
            <div><span style={{ color: "red", fontWeight: 'bold' }}>Username or password wrong</span>
                <br />
                <div style={{ fontWeight: 'bold' }}>Don't have an account?</div>
            </div >

        )
    }

}

export default Notexisting