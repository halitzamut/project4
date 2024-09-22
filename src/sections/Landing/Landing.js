
import "./Landing.css";

import { FaAnglesDown } from "react-icons/fa6";

import Button from "../../component/Button/Button";

const Landing = () => {

    return (

        <div className="landing" id="home">

            <div className="text">

                <h2>branding have another 
                    <br />
                    defintion
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing</p>

                <Button title="buy this thime" />

            </div>

            <div>
                <FaAnglesDown className="icon" />
            </div>

        </div>
    )
}

export default Landing
