import logo from "../images/logo.jpg"

function Login() {

    return (
        <div className="Parent backgroundimage7">

            <form>
                <div className="center1">
                    <div>
                        <img src={logo} className="logo"></img>
                    </div>
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
                        <button className="button">LOGIN</button>
                        

                    </div>
                    <button className="forgotbutton">FORGOT USER ID OR PASSWORD</button>
                </div>
            </form>
        </div>
    );
}

export default Login;