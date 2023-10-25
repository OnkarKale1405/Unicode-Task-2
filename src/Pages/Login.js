import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSuccess, setLoginSuccess] = useState(false);

    const changeEmail = (e) => {
        setEmail(e.target.value);
    }

    const changePassword = (e) => {
        setPassword(e.target.value);
    }

    const showStatus = (e) => {

        if (email.trim() !== "" && password.trim() !== "") {
            setLoginSuccess(true);
        }
        document.getElementById("toast-success").classList.remove("invisible");
        document.getElementById("toast-success").classList.add("visible");
        setTimeout(() => {
            window.location.href = '/';
        }, 2000)
    }

    return (
        <div className="container h-auto w-1/2 flex mt-24 justify-center m-auto p-4 max-sm:w-3/4 ">
            <form className="w-2/3 bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                <div className="mb-3 field">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input onChange={changeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 field">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onChange={changePassword} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check flex flex-row items-center">
                    <input type="checkbox" className="form-check-input m-1" id="exampleCheck1" />
                    <label className="form-check-label " for="exampleCheck1">Remember me</label>
                </div>

                <button onClick={showStatus} type="button" className="form-btn">Submit</button>

                {loginSuccess && (<div id="toast-success" className="mt-5 flex items-center w-full max-w-xs p-4 rounded-lg border border-gray-700 shadow text-white bg-green-800 invisible" role="alert">
                    <div className="text-sm font-medium">
                        Login Successful !
                    </div>
                </div>
                )}

                <div className="text-center mt-12 mb-6">
                    <p> Or Sign Up Using </p>
                    <Link to="/register" className="uppercase text-sky-400">Sign UP</Link>
                </div>
            </form>
        </div>

    )
};
