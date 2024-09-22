

import "./Footer.css";

import { FaPhone, FaTwitter, FaDribbble, FaYoutube, FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {

    return (

            <div class="footer">
                <div class="text">
                    &copy; Copyright <span>Graphberry.com</span> 2014All rights reserved
                </div>
                <div class="icons">
                    <FaPhone className="i fa-phone"/>
                    <FaTwitter className="i fa-twitter"/>
                    <FaDribbble className="i fa-square-dribbble"/>
                    <FaYoutube className="i fa-youtube"/>
                </div>
                <div class="arow">
                    <FaAngleDoubleUp className="arow-icon"/>
                </div>
            </div>

    )
}

export default Footer