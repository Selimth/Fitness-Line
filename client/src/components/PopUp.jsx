import React from 'react'

const popUp = ({ popUp }) => {
    if (popUp === false) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <div style={{ color: "red" }}>Username already exists, choose a different one</div>
        )
    }

}

export default popUp