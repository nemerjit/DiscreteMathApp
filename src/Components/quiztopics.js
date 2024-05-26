import React from 'react';
import { useState } from 'react';

var checkbox=[false, false, false];

function QuizTopics() {
    const [a, b]=useState({});
    
    const handleChange = (event) => {
        const name=event.target.name;
        const value=event.target.checked;
        console.log(event.target.value);
        if (event.target.checked==true) {
            checkbox[event.target.name-1]=true;
        } else if (event.target.checked==false) {
            checkbox[event.target.name-1]=false;
        }
        b(values => ({...values, [name]:value}));
        event.target.checked=checkbox[event.target.name-1];
        console.log(checkbox);
    }

    const mouseCheckbox = (event) => function() {
        document.getElementsByName("1")[0].checked=checkbox[0];
        document.getElementsByName("2")[0].checked=checkbox[1];
        document.getElementsByName("3")[0].checked=checkbox[2];
    }

    return (
        <div>
            <div className="quizcategoriesbutton" onMouseEnter={mouseCheckbox()}>
                <button className="quizcategoriesbutton">categories</button>
            </div>
            <div className="quizcheckbox">
                <div className="quizcheckindividual">
                    <input type="checkbox" id="1" name="1" onClick={handleChange}></input>
                    <label for="1">poop;</label>
                </div>
                <div className="quizcheckindividual">
                    <input type="checkbox" id='2' name='2' onClick={handleChange}></input>
                    <label for='2'>op</label>
                </div>
                <div className="quizcheckindividual">
                    <input type="checkbox" id='3' name='3' onClick={handleChange}></input>
                    <label for='3'>op</label>
                </div>
            </div>
        </div>
    )
}

export default QuizTopics;