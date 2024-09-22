

import "./TheTeam.css";

import { OneTeam } from "../../component/index";

import TeamOneData from "../../Data/TeamOneData";

const TheTeam = () => {

    const ShowAllTeamData = TeamOneData.map(oneItem => {

        return (

            <OneTeam key={oneItem.id} img={oneItem.image} header3={oneItem.header3} paragraph={oneItem.parag} />
        )
    })

    return (

        <div className="team" id="team">
            <div className="container">
                <div className="text">
                    <h3>the team</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>

                
                <div className="cont">

                    { ShowAllTeamData }
                </div>


            </div>
        </div> 

    )
}
export default TheTeam;