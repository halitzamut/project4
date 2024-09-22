

import "./ContactUs.css";

import { GlobalHead } from "../../component";

import {ContactUsItem} from "../../component/index"

import ContactUsData from "../../Data/ContactUsData";

const ContactUs = () => {

    const ContactUsDataShow = ContactUsData.map(oneItem => {

        return (

            <ContactUsItem key= {oneItem.id} iconnn={oneItem.icon} headerrrr={oneItem.header3} divParagrahp={oneItem.div} />
        )
    })

    return (

        <div id="contact">

            <GlobalHead h2Header= "contact us" h6Header= "where you can find us"  parag= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat" />

            <div className="contact">
                
                <div className="cont">

                    {ContactUsDataShow}

                </div>
                
            </div>
        
        </div>

    )
}

export default ContactUs;