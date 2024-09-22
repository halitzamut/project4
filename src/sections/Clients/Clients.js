

import "./Clients.css";

import {GlobalHead} from "../../component/index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import logo1 from "../../assets/images/clients/logo1.png";
import logo2 from "../../assets/images/clients/logo2.png";
import logo3 from "../../assets/images/clients/logo3.png";
import logo4 from "../../assets/images/clients/logo4.png";
import logo5 from "../../assets/images/clients/logo5.png";
import logo6 from "../../assets/images/clients/logo6.png";
import logo7 from "../../assets/images/clients/logo7.png";

const Clients = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <>
            <GlobalHead h2Header= "our clients" h6Header= "who love to work with us"  parag= "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat" />

            <div class="clients" id="clients">

    
                <div className="www">
            
                    <div className="slider-container">

                        <Slider {...settings}> 
                            <div>
                                <img src={logo1} alt="" />
                            </div>
                            <div>
                                <img src={logo2} alt="" />
                            </div>
                            <div>
                                <img src={logo3} alt="" />
                            </div>
                            <div>
                                <img src={logo4} alt="" />
                            </div>
                            <div>
                                <img src={logo5} alt="" />
                            </div>
                            <div>
                                <img src={logo6} alt="" />
                            </div>
                            <div>
                                <img src={logo7} alt="" />
                            </div>
                        </Slider>


                    </div>


                </div>


            </div>

        </>
    )
}

export default Clients;