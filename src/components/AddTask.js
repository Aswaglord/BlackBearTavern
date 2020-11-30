import { useState } from "react"
import axios from "axios"

function AddTasks(props) {

    const [newTask, setNewTask] = useState({
        name: "",
        description: "",
        user_id: "",
    })

    const inputHandler = (e) => {
        console.log(e.target)
        setNewTask({ ...newTask, [e.target.name]: e.target.value })
        console.log(newTask)
    }

    const AddTasks = () => {
        var data = JSON.stringify(newTask);

        var config = {
            method: 'post',
            url: 'https://black-bear-back-end.herokuapp.com/api/tasks/',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'monkey=s%3AufQ3L8cn0wrN8EvB5WAQLOEIVe8OYfRb.AtoPAvod%2Fu%2BwDwrkGXo1HxU5fv4BRc0eZI%2FnamJbfSM'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="Parent backgroundimage5 flexcolumn">
            <h1 className="h1">ADD TASK</h1>
            <div>
                <div className="textboxalign">
                    <label className="label">EMPLOYEE ID:</label>
                    <input name="user_id" className="textbox" onChange={(e) => inputHandler(e)} value={newTask.user_id} />
                </div>
                <div className="textboxalign">
                    <label className="label">NAME:</label>
                    <input name="name" className="textbox" onChange={(e) => inputHandler(e)} value={newTask.name} />
                </div>
                <div className="textboxalign">
                    <label className="label">DESCRIPTION:</label>
                    <input name="description" className="textbox" onChange={(e) => inputHandler(e)} value={newTask.description} />
                </div>
                <button className="logoutbutton1" onClick={() => AddTasks()}>ADD</button>
                <button onClick={() => props.navigation("modify tasks")} className="logoutbutton1">RETURN</button>
                <button onClick={() => props.logout()} className="button2 logoutbuttoncorner">LOGOUT</button>
            </div>
        </div>

    );
}

export default AddTasks;