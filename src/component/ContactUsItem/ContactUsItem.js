

import "./ContactUsItem.css";

export const ContactUsItem = (props) => {

    return (

        <>
            
            <div className="contact-column">

                <span>
                    {props.iconnn}
                </span>

                <div className="text">
                    <h3> {props.headerrrr} </h3>
                    <div> {props.divParagrahp} </div>
                </div>

            </div>

        </>

    )
}

export default ContactUsItem;