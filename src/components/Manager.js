

function Manager(props) {

    return (
        <div className="Parent flexcolumn backgroundimage5">
            <h1 className="welcomemanager">WELCOME: MANAGER</h1>
            <div>
                <button onClick={() => props.navigation("create employee")} className="button2">ADD EMPLOYEE</button>
                <button onClick={() => props.navigation("current employees")} className="button2">CURRENT EMPLOYEES</button>
                <button onClick={() => props.navigation("modify tasks")} className="button2">MODIFY TASKS</button>
            </div>

            <div className="logoutbuttoncorner">
                <button className="button2">LOGOUT</button>
            </div>
        </div>

    );
}

export default Manager;