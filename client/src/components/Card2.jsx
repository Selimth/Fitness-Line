import React, { useState } from 'react'
import Stats from './Stats.jsx'
const Card2 = ({ login }) => {



    return (
        <div className="card border-success mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header bg-transparent border-success dailycalories ">{login[0].username} </div>
            <div className="card-body text-success">
                <h4 className="card-text ul"><ul className='ul'> <Stats login={login} /></ul></h4>
            </div>
        </div>
    )
}

export default Card2