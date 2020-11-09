

function AddTasks(props) {

    return (
        <div className="Parent backgroundimage5 flexcolumn">
            <h1 className="h1">ADD TASK</h1>
            <div>
                <div className="textboxalign">
                    <label className="label">EMPLOYEE ID:</label>
                    <input className="textbox" type="text" name="name" />
                </div>
                <div className="textboxalign">
                    <label className="label">TASK:</label>
                    <input className="textbox" type="text" name="task" />
                </div>
                <div className="textboxalign">
                    <label className="label">DESCRIPTION:</label>
                    <input className="textbox" type="text" name="description" />
                </div>
                <button className="logoutbutton1">ADD</button>
                <button onClick={() => props.navigation("modify tasks")} className="logoutbutton1">RETURN</button>              
                <button className="button2 logoutbuttoncorner">LOGOUT</button>
            </div>
        </div>

    );
}

export default AddTasks;