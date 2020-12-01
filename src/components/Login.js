import { useState } from "react";
import axios from "axios"
import logo from "../images/logo.jpg"

function Login(props) {

    const [form, setForm] = useState({ username: "", password: "" })
    const [error, setError] = useState("")

    const inputHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        login()
    }

    const login = () => {
        let credentials = JSON.stringify(form)

        var config = {
            method: 'post',
            url: 'https://black-bear-back-end.herokuapp.com/api/login',
            headers: {
                "withCredentials": "true",
                'Content-Type': 'application/json',
                "Accept": "/",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "true"
            },
            data: credentials
        };

        axios(config)
            .then(function (response) {
                console.log(response);
                props.setLoggedIn(true)
                props.setUser(response.data.user)
            })
            .catch(function (e) {
                setError("wrong username or password")
            });
    }

    return (
        <div className="Parent backgroundimage7">

            <form>
                <div className="center1">
                    <div>
                        <img src={logo} alt="logo" className="logo"></img>
                    </div>
                    <div>
                        <div className="textboxalign">
                            <label className="label">Username:</label>
                            <input name="username" className="textbox" onChange={(e) => inputHandler(e)} value={form.username} />
                        </div>

                        <div className="textboxalign">
                            <label className="label">Password:</label>
                            <input name="password" className="textbox" onChange={(e) => inputHandler(e)} value={form.password} />
                        </div>
                    </div>
                    <div>
                        <button onClick={(e) => formSubmit(e)} className="button">LOGIN</button>
                        <h3>{error}</h3>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;