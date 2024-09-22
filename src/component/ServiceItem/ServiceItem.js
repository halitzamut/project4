

import "./ServiceItem.css"

const ServiceItem = (props) => {

    return (

    <>
    
        <div className="col">            
            <span>

                { props.icon }

            </span>
            <div className="text">

                <h3> {props.header} </h3>
                <p> {props.paragraph} </p>

            </div>                   
        </div>

    </>

    )
}

export default ServiceItem