import React from 'react';

function Quizquestions(props) {
    return (
        <div class="question">
            <div>
                <h2 class="questiontitle">
                    <span class="questionNumber">{props.num}</span>
                    {props.text}
                </h2>
            </div>
            <div class="answercontainer">
                <input class="answer" placeholder="Answer"/>
            </div>
        </div>
    )
}

export default Quizquestions;