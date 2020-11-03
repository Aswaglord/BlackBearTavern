

function AddTasks() {

    return (
        <div>
            <h1 className="label">ADD TASK</h1>
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
                <button className="button2 buttonmargin">ADD</button>
            </div>
        </div>

    );
}

export default AddTasks;