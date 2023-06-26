import React, { useState } from 'react'

const AllExercices = ({ exercice, addExToUser, login }) => {
    return (
        <div><div> <a className="list-group-item list-group-item-action list-group-item-success exercices ">

            {exercice.name} &nbsp;
            {exercice.duration}m
            <button type="button" className="btn btn-outline-success button3" onClick={() => addExToUser(login[0]._id, { id: exercice._id })}>
                Add</button></a></div></div >
    )
}

export default AllExercices