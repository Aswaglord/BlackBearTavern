

function Employee(props) {

    return (

        <div className="flexrow">
            <p className="width100 border">{props.person.id}</p>
            <p className="width100 border">{props.person.username}</p>
            <p className="width100 border">{props.person.last_name}</p>
            <p className="width100 border">{props.person.first_name}</p>
            <p className="width100 border">{props.person.position}</p>
        </div>
    )
}

export default Employee