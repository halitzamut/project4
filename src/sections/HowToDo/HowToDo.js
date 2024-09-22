

import "./HowToDo.css";

import {Card} from "../../component/index"


import AllItems from "../../Data/AllItemsData";

const HowToDo = () => {

    const allCards = AllItems.map(oneCard => {

        return (
            <Card key={oneCard.id} icon={oneCard.icon} title={oneCard.title} li={oneCard.li} liTwo={oneCard.liTwo} />
        )
    })

    return (

        <>
    
            <div className="do-it" id="do-it">
                <div className="container">
                    <div className="adress">
                        <h3>how to do it</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                    </div>
                    <div className="box-icons">

                        {allCards}

                    </div>
                </div>
            </div>

        </>

    )
}
export default HowToDo
