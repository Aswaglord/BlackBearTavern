import {useEffect} from "react"
import EmployeeTask from "./employeeTask"

function EmployeePage(props) {
    const { getTasks } = props
    useEffect(() => {
        getTasks()
    },[getTasks])

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
                    {props.tasks.map(task => {
                    return <EmployeeTask markComplete={() => props.markComplete(task.id)} task={task} />
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