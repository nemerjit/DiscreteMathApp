import {React, useEffect, useState} from 'react'
import Quizquestions from '../Components/quizquestions.js';
import QuizTopics from '../Components/quiztopics.js';
import { Link } from 'react-router-dom';
import {db} from '../firebaseconfig.js'
import {getDoc, collection, doc} from "firebase/firestore"

function Quizme() {
    const [testQuestions, setTestQuestions] = useState([]);
    const [dropdownVisible, makeVisible]=useState(false);
    const [timeLeft, setTimeLeft] = useState("0 seconds");
    const [showButton, setShowButton] = useState(true);
    const [showSubmit, makeSubmit] = useState(false);
    //const testQuestionRef=collection(db, "Questions");

    useEffect(() => {
        const TestQ = async () => {
            const docRef = doc(db, "Questions", "discretemathchapter1");
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = await docSnap.data();
                setTestQuestions(Array.from(data));
                console.log(Array.from(data));
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        };
        TestQ();
    }, [])
    console.log("Test Questions", testQuestions);
    const submit = () => {
        window.location.replace('/');
    };
    const changeSubmit = () => {
        makeSubmit(!showSubmit);
        document.getElementsByClassName("quizSubmitbutton")[0].style.display="inline-block";
    };
    const toggleButton = () => {
        setShowButton(!showButton);
        changeSubmit();
        timer()
    };
    var time=10000;
    const timer = () => setInterval(function() {
        if (time!==0) {
            // document.getElementsByClassName("quiztime").innerHTML=/*Math.floor(time/(60*60*1000))+" hours "+Math.floor((time%(60*60*1000))/(60*1000))+" minutes "+(time%(60*1000))/1000+" seconds"*/time/1000;
            console.log(Math.floor(time/(60*60*1000))+" hours "+Math.floor((time%(60*60*1000))/(60*1000))+" minutes "+(time%(60*1000))/1000+" seconds");
            setTimeLeft(Math.floor(time/(60*60*1000))+" hours "+Math.floor((time%(60*60*1000))/(60*1000))+" minutes "+(time%(60*1000))/1000+" seconds")
            time=time-1000;
        } else {
            window.location.replace("/");
        }
    }, 1000);
    //useEffect(() => {
    //    timer()
    //}, [])
    const onMouse = () => function() {
        makeVisible(true);
        console.log(true);
    }
    const notMouse = () => function() {
        makeVisible(false);
        console.log(false);
    }
    return (
        <div>
            <div class="quizmecolor">
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
                <h2>
                </h2>
            </div>
            <div class="bottombar">
                <div className="startButton">
                    {showButton && <button className="quizStartbutton" onClick={toggleButton}>Start</button>}
                </div>
                <div class="quiztime">
                    Time Remaining: - {timeLeft}
                </div>
                <div class="submitButton" name="submitButton"> 
                    <button class="quizSubmitbutton" onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Quizme;