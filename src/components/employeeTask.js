import axios from "axios"

function EmployeeTask(props) {

    const markComplete = () => {
        var config = {
            method: 'put',
            url: `https://black-bear-back-end.herokuapp.com/api/tasks/${props.task.id}`,
            headers: {
                'Content-Type': 'application/json',
                "Accept": "/",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "true"
            },
        };

        axios(config)
            .then(function (response) {
                console.log(response);
                props.markComplete()

            })
            .catch(function (e) {
                console.log(e)
            });
        
    }

    return (
        <div className="flexrow">
            {props.task.completed === 0?
            <>
            <p className="width150 border">{ props.task.id }</p>
            <p className="width200 border">{ props.task.name }</p>
            <p className="width150 border">{ props.task.description }</p>
            <button onClick={() => markComplete()}>Completed</button>
            </>
        :
            <>
            <p style={{opacity: 0.6}} className="width150 border">{ props.task.id }</p>
            <p style={{opacity: 0.6}} className="width200 border">{ props.task.name }</p>
            <p style={{opacity: 0.6}} className="width150 border">{ props.task.description }</p>
            </>
        }
        </div>


    );
}

export default EmployeeTask;