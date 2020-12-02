import { useEffect, useState } from "react"
import EmployeeTask from "./employeeTask"
import axios from "axios"

function EmployeePage(props) {
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        console.log("hit")
        let config = {
            method: 'get',
            url: `https://black-bear-back-end.herokuapp.com/api/tasks/user/${props.id}`,
            headers: {
                'Content-Type': 'application/json',
            },
        };
        
        axios(config)
        .then(function (response) {
            console.log(response.data);
            setTasks(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[props])
    const markComplete = (id) => {
        let newTasks = [...tasks]
        for (const task of newTasks) {
            if (task.id === id) {
                task.completed = 1
                setTasks(newTasks)
                return
            }
        }
    }

    return (
        <div className="Parent backgroundimage5 flexcolumn">
            <div className="whitebackground">
                <h1 className="h1" >VIEW TASKS</h1>
                <div>
                    <div className="flexrow">
                        <p className="width150 border">ID:</p>
                        <p className="width200 border">NAME:</p>
                        <p className="width150 border">DESCRIPTION:</p>
                    </div>
                    {tasks.map(task => {
                        return <EmployeeTask key={task.id} markComplete={() => markComplete(task.id)} task={task} />
                    })}
                    <div>
                        <button onClick={() => props.logout()} className="button2 logoutbuttoncorner">LOGOUT</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EmployeePage;