import React from 'react';

function ContactComponent(props) {
    return (

        <div className="contact">
            <div className="body-cover">
                <div className="wrapper ">
                    <div className="vectorside flex-center-colum">
                        <img src="assets/images/Messaging-rafiki.png" alt=""/>
                        <p>
                            Let's Descuss the good part
                        </p>
                    </div>
                    <div className="contactside flex-center-colum">
                        <div className="contact-form flex-center-colum">
                            <form action="https://api.web3forms.com/submit" method="POST" >
                            <input type="hidden" name="access_key" value="96dfec8b-2442-41ef-b291-a01b5f495183"/>
                                <div className="tab" style={{color:'black',display:'flex',flexDirection:'column'}}>
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required placeholder="name"/>
                                </div>
                                <div className="tab" style={{color:'black',display:'flex',flexDirection:'column'}}>
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required placeholder="email"/>
                                </div>
                                <div className="tab" style={{color:'black',display:'flex',flexDirection:'column'}}>
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required placeholder="subject"/>
                                </div>
                                <div className="tab" style={{color:'black',display:'flex',flexDirection:'column'}}>
                                    <label for="message">Message</label>
                                    <textarea name="message" id="message" className="message" rows="10" placeholder="message"></textarea>
                                </div>
                                <button  type="submit" className="primary-button" style={{display: 'block',marginRight: 'auto'}}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactComponent;