import {React, useEffect, useState} from 'react'
import Quizquestions from '../Components/quizquestions.js';
import QuizTopics from '../Components/quiztopics.js';
import { Link } from 'react-router-dom';
import {db} from '../firebaseconfig.js'
import {getDoc, collection, doc, getDocs} from "firebase/firestore"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import TestImg from '../Images/stupidtest.jpg'
import { query, orderBy, limit } from "firebase/firestore";  

function Quizme() {
    const [testQuestions, setTestQuestions] = useState([]);
    // const [dropdownVisible, makeVisible]=useState(false);
    // const [timeLeft, setTimeLeft] = useState("0 seconds");
    // const [showButton, setShowButton] = useState(true);
    const [showSubmit, makeSubmit] = useState(false);
    //const testQuestionRef=collection(db, "Questions");
    
    // Here are the set of test questions in array format, 
    // any new tests that are added, add them to this list
    // This method is more efficient
    const tests = ['discretemathchapter1', 'discretemathchapter2'];
    
    const testq = async (testName) => {
        const docRef = doc(db, "Questions", testName);
        console.log("bitch", docRef)
        const testRef = collection(docRef, "question");
        console.log("whore", testRef)
        const q = query(testRef, orderBy("num"));
        console.log("query", q);
        const docSnap = await getDocs(q)
        const filteredData = docSnap.docs.map((doc) => ({
            doc, ...doc.data()
        }));
        console.log("bob", filteredData)
        setTestQuestions(filteredData);
        
        console.log('hello', testQuestions);
    };

    function testMapping(){
        testQuestions.map((testQuestion) => {
            console.log(testQuestion)
            console.log(testQuestion.num, testQuestion.text);
        })
    }
    
    // const submit = () => {
    //     window.location.replace('/');
    // };
    // const changeSubmit = () => {
    //     makeSubmit(!showSubmit);
    //     document.getElementsByClassName("quizSubmitbutton")[0].style.display="inline-block";
    // };
    // const toggleButton = () => {
    //     setShowButton(!showButton);
    //     changeSubmit();
    //     timer()
    // };
    // var time=10000;
    // const timer = () => setInterval(function() {
    //     if (time!==0) {
    //         // document.getElementsByClassName("quiztime").innerHTML=/*Math.floor(time/(60*60*1000))+" hours "+Math.floor((time%(60*60*1000))/(60*1000))+" minutes "+(time%(60*1000))/1000+" seconds"*/time/1000;
    //         console.log(Math.floor(time/(60*60*1000))+" hours "+Math.floor((time%(60*60*1000))/(60*1000))+" minutes "+(time%(60*1000))/1000+" seconds");
    //         setTimeLeft(Math.floor(time/(60*60*1000))+" hours "+Math.floor((time%(60*60*1000))/(60*1000))+" minutes "+(time%(60*1000))/1000+" seconds")
    //         time=time-1000;
    //     } else {
    //         window.location.replace("/");
    //     }
    // }, 1000);
    //useEffect(() => {
    //    timer()
    //}, [])
    // const onMouse = () => function() {
    //     makeVisible(true);
    //     console.log(true);
    // }
    // const notMouse = () => function() {
    //     makeVisible(false);
    //     console.log(false);
    // }

    return (
        <div id="quiz-me-container">
            <div id="quiz-me-left-side">
                <br/>
                <h4>Quiz Questions</h4>

                <br/>

                {/* Dropdown menu documentation - https://react-bootstrap.github.io/docs/components/dropdowns/ */}
                
                <DropdownButton id="dropdown-basic-button" title="Select a Quiz">
                    {tests.reverse().map((testitem) => (
                        <Dropdown.Item
                        onClick={() => testq(testitem)}
                        >
                            {testitem}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>

                <br/>

                <p style={{color:"green"}}>Quiz Question</p>

                <div id="quiz-details">
                    <img id="test-img" src={TestImg}/>
                    <p>The quizzes are 25 questions long. We will be adding a timed feature soon</p>
                </div>
            </div>
            <div id="quiz-me-right-side">
                <br/>
                <h4>Questions</h4>
                {testQuestions.map((testQuestion) => (
                    <Quizquestions
                    num = {testQuestion.num}
                    text= {testQuestion.text}
                    />
                ))}
                <div id="btn-container">
                    <button id="submit-btn-quiz">Submit</button>
                </div>
            </div>
            {/* <div class="quizmecolor"> */}
                {/* <div className="quizcategoriesbutton" onMouseEnter={onMouse()} onMouseLeave={notMouse()}>
                    <button className="quizcategoriesbutton">categories</button>
                    {dropdownVisible && <QuizTopics/>}
                </div> */}
                {/* {testQuestions.map((testQuestion) => (
                    <Quizquestions
                    text={testQuestion.text}
                    num={testQuestion.num}
                    />
                    ))} */}
            {/* </div> */}
            {/* <div class="bottombar">
                <div className="startButton">
                    {showButton && <button className="quizStartbutton" onClick={toggleButton}>Start</button>}
                </div>
                <div class="quiztime">
                    Time Remaining: - {timeLeft}
                </div>
                <div class="submitButton" name="submitButton"> 
                    <button class="quizSubmitbutton" onClick={submit}>Submit</button>
                </div>
            </div> */}
            
        </div>
    )
}

export default Quizme;