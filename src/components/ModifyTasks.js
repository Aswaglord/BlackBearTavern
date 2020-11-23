import { useEffect } from "react";
import Task from "./Task";


function ModifyTasks(props) {
    useEffect(() => {
        props.getTasks()
    },[null])


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
                    {props.tasks.map(task => {
                    return <Task task={task} />
                })}
                    <div>
                        <button onClick={() => props.navigation("manager")} className="logoutbutton1">RETURN</button>
                        <button onClick={() => props.navigation("add task")} className="logoutbutton1">ADD TASK</button>
                        <button className="button2 logoutbuttoncorner">LOGOUT</button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ModifyTasks;