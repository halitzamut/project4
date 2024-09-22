

import "./SendMessage.css";

import { Button } from "../../component/index";

const SendMessage = () => {

    return (

        <>
        
            <div className="message">
                <div className="container">
                    <div className="text">
                        <h3>send us a message</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et viverra ipsum.
                        </p>
                    </div>
                    <div className="info-us">
                        <input className="inf" type="name" placeholder="Your Name" name="name" />
                        <input className="inf" type="number" placeholder="Your Number" name="number" />
                        <input className="inf" type="email" placeholder="Your Email" name="email" />
                    </div>
                    <div className="mesg">
                        <textarea className="messa" type="message" placeholder="Your Message" name="message"></textarea>
                    </div>

                    <Button title="send message" />

                </div>
            </div>
        
        
        </>

    )
}
export default SendMessage;