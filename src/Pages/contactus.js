import React from 'react'

function Contactus() {
    var recipient='courseforstudents@gmail.com';
    var subject='Discrete Math Website';
    var body='Hi, my name is ';
    const mail = () => {
        body=body+document.getElementsByClassName("contactmessageName")[0].value;;
        body=body+'.';
        body=body+' ';
        body=body+'\n\n';
        body=body+document.getElementsByClassName("contactmessage")[0].value;
        body=body+' '+'\n\n'+"Feel free to contact me at "+document.getElementsByClassName("contactmessageEmail")[0].value;
        body=body+'.';
        body=body+' ';
        window.location.href=`mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        body='Hi, my name is ';
    };
    return (
        <div class='contactus'>
            <div class='contacts'>    
                <h2 id='contact'>
                    Contact Us
                </h2>
                <form>
                    <input className='contactmessageName' placeholder='Name'/>
                    <input className='contactmessageEmail' placeholder='Email'/>
                    <textarea className='contactmessage' placeholder='Message' rows='4'/>
                    <input className='contactsend' type='submit' value='Send' onClick={mail}/>
                </form>
            </div>
            <div class='contactimage'>
                
            </div>
        </div>
    )
}

export default Contactus;