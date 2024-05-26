import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <div className="upperhome">
                <div className="sentences">
                    <h2 id="sentencemargin">
                        Sentence.
                    </h2>
                    <h2 id="paragraphmargin">    
                        Paragraph.
                    </h2>
                </div>
                <div className="modes">
                    Description of Modes   
                    <Link to="/quizme">
                        <button class="quizMe" id="quizMeButton">Quiz Me</button>
                    </Link>
                </div>
            </div>
            <div class='quizbutton'>
                <div className="quiz">
                    <h2 id='quizzes'>
                        Quiz Me
                    </h2>
                    <h2 id='quizzesdescription'>
                        Description
                    </h2>
                    <Link to="/quizme">
                        <button class='quizMe'>Quiz Me</button>
                    </Link>
                </div>
                <div class='quizanimation'>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;