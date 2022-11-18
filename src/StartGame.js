import React from 'react'
import './styles/Start.css';

export default function StartGame(props) {
    return (
        <div className="start-screen">
            <div className="main-start-section">
                <h1 className="title">Quizzical</h1>
                <button className="start-btn" onClick={props.start}>Start quiz</button>
            </div>
        </div>
    )
}
