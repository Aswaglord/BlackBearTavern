import React, { useState } from "react"
import axios from "axios"

function CreateEmployee(props) {


    const [newEmployee, setNewEmployee] = useState({
        first_name: "",
        last_name: "",
        position: "",
        username: ""
    })

    const inputHandler = (e) => {
        console.log(e.target)
        setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
        console.log(newEmployee)
    }

    const createNewEmployee = () => {
        var data = JSON.stringify(newEmployee);

        var config = {
            method: 'post',
            url: 'https://black-bear-back-end.herokuapp.com/api/users',
            headers: {
                "withCredentials": "true",
                'Content-Type': 'application/json',
                "Accept": "/",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "true"
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
            <h1 className="headingemployee">CREATE NEW EMPLOYEE</h1>
            <div>
                <div className="textboxalign">
                    <label className="label">FIRST NAME:</label>
                    <input name="first_name" className="textbox" onChange={(e) => inputHandler(e)} value={newEmployee.fName} />
                </div>
                <div className="textboxalign">
                    <label className="label">LAST NAME:</label>
                    <input name="last_name" className="textbox" onChange={(e) => inputHandler(e)} value={newEmployee.lName} />
                </div>
                <div className="textboxalign">
                    <label className="label">USERNAME:</label>
                    <input name="username" className="textbox" onChange={(e) => inputHandler(e)} value={newEmployee.username} />
                </div>
                <div className="textboxalign">
                    <label className="label">POSITION:</label>
                    <input name="position" className="textbox" onChange={(e) => inputHandler(e)} value={newEmployee.position} />
                </div>
            </div>
            <button onClick={() => createNewEmployee()} className="logoutbutton1">SUBMIT</button>
            <button onClick={() => props.navigation("manager")} className="logoutbutton1">RETURN</button>
            <button className="button2 logoutbuttoncorner">LOGOUT</button>


        </div>

    );
}

export default CreateEmployee;