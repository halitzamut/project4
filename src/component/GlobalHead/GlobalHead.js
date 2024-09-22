

import "./GlobalHead.css";

const GlobalHead = (props) => {

    return (

        <div className="main-head">

            <h6> {props.h6Header} </h6>
            <h2> {props.h2Header} </h2>
            <p> {props.parag} </p>
            
        </div>

    )
}

export default GlobalHead;