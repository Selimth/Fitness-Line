import React from 'react'

const Stats = ({ login }) => {
    return (
        <div>
            <li>Age :{login[0].age}</li>
            <li>Gender :{login[0].gender}</li>
            <li>Weight :{login[0].weight}</li>
            <li>Height :{login[0].height}</li>
            <li>Target :{login[0].target}</li>
            <li>Goal :{login[0].goal}</li>
            <li>Calories :{login[0].calories}</li>
        </div>

    )
}

export default Stats