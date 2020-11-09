

function Employee(props) {



    return (

        <div className="flexrow">
            <p className="width100 border">{props.id}</p>
            <p className="width100 border">{props.lName}</p>
            <p className="width100 border">{props.fName}</p>
            <p className="width100 border">{props.position}</p>
        </div>
    )
}

export default Employee