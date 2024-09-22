

import "./AboutUs.css";

import {GlobalHead} from "../../component/index";

import AboutUsItemsData from "../../Data/AboutUsData";

import {AboutUsItems} from "../../component/AboutUsItems/AboutUsItems";

const AboutUs = () => {

    const allAboutUsItems = AboutUsItemsData.map(oneEle => {

        return (
            <AboutUsItems key= {oneEle.id} icon= {oneEle.icon} header= {oneEle.header} paragraph= {oneEle.paragraph} />
        )
    })

    return (

        <div className="about" id="about">

            <GlobalHead h2Header= "about us" h6Header= "who we are"  parag= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat" />

            <div className="content">

                {allAboutUsItems}

            </div>

        </div>

    )
}

export default AboutUs;

