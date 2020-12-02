import { useEffect, useState } from "react";
import Task from "./Task";
import axios from "axios"


function ModifyTasks(props) {
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        console.log("hit")
        let config = {
            method: 'get',
            url: 'https://black-bear-back-end.herokuapp.com/api/tasks',
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
    },[])
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
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
                        <p className="width150 border">USER ID:</p>
                    </div>
                    {tasks.map(task => {
                    return <Task key={task.id} deleteTask={() => deleteTask(task.id)} task={task} />
                })}
                    <div>
                        <button onClick={() => props.navigation("manager")} className="logoutbutton1">RETURN</button>
                        <button onClick={() => props.navigation("add task")} className="logoutbutton1">ADD TASK</button>
                        <button onClick={() => props.logout()} className="button2 logoutbuttoncorner">LOGOUT</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ModifyTasks;