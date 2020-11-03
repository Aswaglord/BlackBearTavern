

function createEmployee() {

    return (
        <div className="Parent backgroundimage4 flexcolumn">
            <h1 className="headingemployee">CREATE NEW EMPLOYEE</h1>
            <div>
            <div className="textboxalign">
                <label className="label">NAME:</label>
                <input className="textbox" type="text" name="name" />
            </div>
            <div className="textboxalign">
                <label className="label">USER ID:</label>
                <input className="textbox" type="number" name="user-id" />
            </div>
            <div className="textboxalign">
                <label className="label">PASSWORD:</label>
                <input className="textbox" type="text" name="password" />
            </div>
            </div>
            <button className="logoutbutton1">SUBMIT</button>
            <button className="logoutbutton1">BACK</button>
            <button className="logoutbutton1">LOGOUT</button>


        </div>

    );
}

export default createEmployee;