


import "./Card.css";

const Card = (props) => {

    return (

        <div className="Card">

            <div className="col">

                <span>{props.icon}</span>

                <div className="text">
                    
                    <h3>{props.title}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    </p>

                    <ul>
                        <li>{props.li}</li>
                        <li>{props.liTwo}</li>
                    </ul>
                    
                </div>
            </div>

        </div>
    )
}

export default Card