import React, { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { setEmployees } from "./localStorage";

function CreateEmployee(props) {


    const [newEmployee, setNewEmployee] = useState({
        id: uuidv4(),
        fName: "",
        lName: "",
        position: ""
    })

    const inputHandler = (e) => {
        console.log(e.target)
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
        console.log(newEmployee)
    }

    const createNewEmployee =() => {
        props.setEmployees([...props.employees, newEmployee])
        setEmployees([...props.employees, newEmployee])
        setNewEmployee({
            id: 10,
            fName: "",
            lName: "",
            position: ""
        })
    }

    return (
        <div className="Parent backgroundimage5 flexcolumn">
            <h1 className="headingemployee">CREATE NEW EMPLOYEE</h1>
            <div>
            <div className="textboxalign">
                <label className="label">FIRST NAME:</label>
                <input name="fName" className="textbox" onChange={(e) => inputHandler(e)} value={newEmployee.fName} />
            </div>
            <div className="textboxalign">
                <label className="label">LAST NAME:</label>
                <input name="lName" className="textbox" onChange={(e) => inputHandler(e)} value={newEmployee.lName} />
            </div>
            <div className="textboxalign">
                <label className="label">USER ID:</label>
                <input className="textbox" type="number" name="user-id" />
            </div>
            <div className="textboxalign">
                <label className="label">PASSWORD:</label>
                <input className="textbox" type="text" name="password" />
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