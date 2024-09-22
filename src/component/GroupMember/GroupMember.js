


import "./GroupMember.css";

export const GroupMember = (props) => {

    return (

        <>
            <div className="col">
                <div className="num"> {props.number} </div>
                <p> {props.paragraph} </p>
            </div>
        </>

    )
}
export default GroupMember;