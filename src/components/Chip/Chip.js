import React from 'react'
import './Chip.css'

export function Chip({ user, onClose }) {
    return (
        <div className="chip">
            <img className="chip-icon" src={`http://placekitten.com/30/30`} alt="" />
            <div className="user-name">
                {user.name}
            </div>
            <div className="close-icon" onClick={(e) => onClose(e, user)}>&#10006;</div>
        </div>
    )
}


export default Chip
