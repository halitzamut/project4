

import "./AboutUsItems.css";


export const AboutUsItems = (props) => {

    return (

        <>
        
            <div className="boxx">
                
                <div className="icon">
                    
                    {props.icon}

                </div>
                <div className="text">

                    <h3> {props.header} </h3>

                    <p> 
                        {props.paragraph}
                    </p>
                    
                </div>

            </div>
        
        </>

    )
}

export default AboutUsItems;