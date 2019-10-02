import React from 'react'
import './Suggestion.css'

export default function Suggestion({ user, onClick }) {
    return (
        <div onClick={(e) => onClick(e,user)} className="suggestion">
            <img className="user-icon" src="https://github.com/identicons/Bret.png" alt="" />
            <div className="user-name">
                {user.name}
            </div>
            <div className="user-email">
                {user.email}
            </div>
        </div>
    )
}

