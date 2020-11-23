function Task(props) {



    return (

        <div className="flexrow">
            <p className="width150 border">{ props.task.id }</p>
            <p className="width200 border">{ props.task.name }</p>
            <p className="width150 border">{ props.task.description }</p>
            <p className="width150 border">{ props.task.user_id }</p>
        </div>


    );
}

export default Task;