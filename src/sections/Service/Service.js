

import "./Service.css";

import { GlobalHead } from "../../component/index";

import ServiceItemsData from "../../Data/ServiceData";

import {ServiceItem} from "../../component/index";

const Service = () => {

    const AllServiceItems = ServiceItemsData.map(oneItem => {

        return (

            <ServiceItem key= {oneItem.id}  icon= {oneItem.icon}    header= {oneItem.header}  paragraph= {oneItem.paragraph} />
        )
    })

    return (

        <div id="service">
        
            <GlobalHead h6Header= "our service" h2Header= "what we love to do"  parag= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat" />

            <div className="service four-icons">

                {AllServiceItems}

            </div>
            
        </div>
    )
}

export default Service;

