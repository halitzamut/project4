

import "./Preferances.css";

import { GlobalHead } from "../../component/index";

const Preferances = (props) => {

    return (
        
        <div id="referances">
        
            <GlobalHead h2Header= "our referances" h6Header= "what we done so far"  parag= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat,volutpat. Ut wisi enim ad minim veniam,\quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat" />

            <div className="referances">

                <ul className="cont">

                    <li><a href="#" className="active">all</a></li>
                    <li><a href="#">web design</a></li>
                    <li><a href="#">graphic design</a></li>
                    <li><a href="#">photography</a></li>
                    <li><a href="#">illustation</a></li>

                </ul>

            </div> 

        </div>

    )
}

export default Preferances;