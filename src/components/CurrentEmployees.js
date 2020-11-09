import Employee from "./Employee"

function CurrentEmployees(props) {

    return (
        <div className="Parent backgroundimage5 flexcolumn ">
            <div className="whitebackground">
                <h1>EMPLOYEE LIST</h1>
                <div>
                    <div className="flexrow">
                        <p className="width100 border">ID:</p>
                        <p className="width100 border">LAST NAME:</p>
                        <p className="width100 border">FIRST NAME:</p>
                        <p className="width100 border">POSITION:</p>
                    </div>
                {props.employees.map(employee => {
                    return <Employee id={employee.id} lName={employee.lName} fName={employee.fName} position={employee.position} />
                })}
                </div>
                <button onClick={() => props.navigation("manager")} className="logoutbutton1">RETURN</button>
                
                <button className="button2 logoutbuttoncorner">LOGOUT</button>
            </div>
        </div>

    );
}

export default CurrentEmployees;