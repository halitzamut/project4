

import "./Header.css";

import logo from "../../assets/images/logo.png"

import { FaBars } from "react-icons/fa6";

import { useState } from "react";

const Header = () => {

    const [navbar ,setnavbar] = useState(false);

    return (

        <div className="header">

            <div className="head-container">

                <img src={logo}  alt="" /> 

                <ul className= {` navigation-dash ${navbar ? "appear" : ""} `}>
                    <li><a onClick={() => { setnavbar(false)} } href="#home" >Home</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#service">Service</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#do-it">Doit</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#referances">Preferances</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#potfolio">Potfolio</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#numbers">Group</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#about">About</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#team">Team</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#skills">Skills</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#clients">Clients</a></li>
                    <li><a onClick={() => { setnavbar(false)} } href="#contact">Contact</a></li>

                </ul>

                <FaBars className="three-bars" onClick={() => {

                    setnavbar(!navbar)
                }} />

            </div>

        </div>

    )
}

export default Header