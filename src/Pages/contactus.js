import React from 'react'

function Contactus() {
    return (
        <div class='contactus'>
            <div class='contacts'>    
                <h2 id='contact'>
                    Contact Us
                </h2>
                <form>
                    <input class='contactmessage' placeholder='Name'/>
                    <input class='contactmessage' placeholder='Email'/>
                    <textarea class='contactmessage' placeholder='Message' rows='4'/>
                    <input class='contactsend' type='submit' value='Send'/>
                </form>
            </div>
            <div class='contactimage'>
                
            </div>
        </div>
    )
}

export default Contactus;