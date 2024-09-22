

import "./Button.css";

const Button = (props) => {

    return (

        <div className="button">
        
            <button className="out"> {props.title} </button>
        
        </div>

    )
}


export default Button;