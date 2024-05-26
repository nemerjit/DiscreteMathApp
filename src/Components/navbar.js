import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navigation'>
            <Link to='/' class='navigationlink'>
                <div class="navigationlogo">
                    
                </div>
                <h1 class="navigationhome">
                    Name 
                </h1>
            </Link>
            <div className='navigationbar'>
                <h1 class='navigationall'>
                    About Us
                </h1>
                <Link to='/contactus' class='navigationlink'>
                    <h1 class='navigationall'>
                        Contact Us
                    </h1>
                </Link>
                <Link to='/quizme' class='navigationlink'>
                    <h1 class='navigationall'>
                        Quiz Me
                    </h1>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;