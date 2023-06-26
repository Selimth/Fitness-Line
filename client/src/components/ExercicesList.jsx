import React from 'react'
const ExercicesList = ({ ex, delUserEx, login }) => {
    return (
        <div> <a className="list-group-item list-group-item-action list-group-item-success exercices ">{ex.name}&nbsp;
            {ex.duration}m&nbsp; ({ex.status})<button type="button" className="btn btn-outline-success button" onClick={() => delUserEx(login[0]._id, ex._id)}>Remove</button></a> </div>
    )
}

export default ExercicesList