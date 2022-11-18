import React from 'react'
import decodeHtml from './utli'
import './styles/Questions.css';
import { nanoid } from 'nanoid';

function SingleQuestion(props) {


    const styles = {
        background: props.answers.isSelected ? "green" : 'white'
    }

    return (
        <div className="question-container">
            <h2 className="question-title">{decodeHtml(props.question)}</h2>
            <div className="answears-container">
                {props.answers.map((answer) => {
                    return (<div className="single-answer" key={nanoid()} onClick={props.selectAnswer} style={styles} >
                        {decodeHtml(answer.answer)}
                    </div>)
                })}
            </div>
            <hr></hr>
        </div>
    )
}

export default SingleQuestion