

function Login() {

    return (
        <div className="Parent backgroundimage">
            <form>
                <div className="center1">
                    <div>
                    <div className="textboxalign">
                        <label className="label">User ID:</label>
                        <input className="textbox" type="number" name="age" />
                    </div>

                    <div className="textboxalign">
                        <label className="label">Password:</label>
                        <input className="textbox" type="text" name="password" />
                    </div>
                    </div>
                    <div>
                        <button className="button">EMPLOYEE LOGIN</button>
                        <button className="button">MANAGER LOGIN</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;