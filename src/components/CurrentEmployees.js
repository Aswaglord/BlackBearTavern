
import { useEffect } from "react"
import Employee from "./Employee"

function CurrentEmployees(props) {

    useEffect(() => {
        props.getEmployees()
    }, [null])


    return (
        <div className="Parent backgroundimage5 flexcolumn ">
            <div className="whitebackground">
                <h1>EMPLOYEE LIST</h1>
                <div>
                    <div className="flexrow">
                        <p className="width100 border">ID:</p>
                        <p className="width100 border">USERNAME:</p>
                        <p className="width100 border">LAST NAME:</p>
                        <p className="width100 border">FIRST NAME:</p>
                        <p className="width100 border">POSITION:</p>
                    </div>
                {props.employees.map(employee => {
                    return <Employee person={employee} />
                })}
                </div>
                <button onClick={() => props.navigation("manager")} className="logoutbutton1">RETURN</button>
                
                <button className="button2 logoutbuttoncorner">LOGOUT</button>
            </div>
        </div>

    );
}

export default CurrentEmployees;