

function ModifyTasks(props) {

    return (
        <div className="Parent backgroundimage5 flexcolumn">
            <div className="whitebackground">
                <h1 className="h1" >VIEW TASKS</h1>
                <div>
                    <div className="flexrow">
                        <p className="width150 border">TASK:</p>
                        <p className="width200 border">DESCRIPTION:</p>
                        <p className="width150 border">ASSIGNMENT</p>

                    </div>
                    <div className="flexrow">
                        <p className="width150 border">Hand soaps</p>
                        <p className="width200 border">Check hand soaps</p>
                        <p className="width150 border">Gordon</p>

                    </div>
                    <div className="flexrow">
                        <p className="width150 border">Paper Towels</p>
                        <p className="width200 border">Check paper towels</p>
                        <p className="width150 border">John</p>

                    </div>
                    <div className="flexrow">
                        <p className="width150 border">Pig buckets</p>
                        <p className="width200 border">Set up front</p>
                        <p className="width150 border">Jane</p>
                    </div>
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