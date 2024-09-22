
import "./GroupNumbers.css";

import AllColumns from "../../Data/GroupNumbersData";

import {GroupMember} from "../../component/index";

const GroupNumbers = () => {

    const allChildewn = AllColumns.map(ele => {

        return (
            <GroupMember key= {ele.id} number= {ele.number} paragraph= {ele.paragraph} />
        ) 

    })

    return (

    <div  id="numbers">
    
        <div className="numbers">
            <div className="container">
                <div className="text">
                    <h3>we are groud of this numbers</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam donummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>
                <div className="box">

                    {allChildewn}

                </div>
            </div>
        </div>
    
    </div>

    )
}

export default GroupNumbers;


