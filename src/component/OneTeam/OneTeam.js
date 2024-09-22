

import "./OneTeam.css";

export const OneTeam = (props) => {

    return (

        <div className="box">
            <img src={props.img} alt="" />
            <div className="box">
                <h3> {props.header3} </h3>
                <p> {props.paragraph} </p>
            </div>
        </div>

    )
}

export default OneTeam;