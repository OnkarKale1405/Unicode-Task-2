import { Link } from "react-router-dom";
import { useState } from "react";
import ShowDetails from "./ShowDetails.js";

export default function Register() {

    const [fullName, setFullName] = useState("");
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [bdate, setBdate] = useState("");
    const [gender, setGender] = useState("");

    let changeFullName = (event) => {
        setFullName(event.target.value);
    }
    let changeMail = (event) => {
        setMail(event.target.value);
    }
    let changePass = (event) => {
        setPass(event.target.value);
    }
    let changePhone = (event) => {
        setPhone(event.target.value);
    }
    let changeBdate = (event) => {
        setBdate(event.target.value);
    }
    let changeGender = (event) => {
        setGender(event.target.value);
    }
    let changeAge = (event) => {
        setAge(event.target.value);
    }

    const showdetails = (e) => {
        document.getElementById("registerForm").classList.add("hidden");
        document.getElementById("details").classList.remove("hidden");
        document.getElementById("details").classList.add("flex");
        document.getElementById("register-comp").classList.add("bg-gray-200");
    }

    // console.log(fullName) ;
    // console.log(mail) ;
    // console.log(pass) ;

    return (
        <div id="register-comp" className="container h-auto w-1/2 flex mt-24 justify-center m-auto p-4">
            <form id="registerForm" className="w-2/3 bg-gray-200 flex flex-col items-center justify-center rounded-2xl">
                <div className="mb-3 field">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input onChange={changeFullName} type="text" className="form-control" id="name" required />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={changeMail} type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                    <div id="emailHelp" className="text-sm">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3 field">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={changePass} type="password" className="form-control" id="password" required />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="dob" className="form-label">Date of Birth (DOB)</label>
                    <input onChange={changeBdate} type="date" className="form-control" id="dob" required />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input onChange={changeAge} type="number" className="form-control" id="age" required />
                </div>
                <div className="mb-3 field">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <select value={gender} onChange={changeGender} className="form-select text-sm" id="gender" required>
                        <option value="" disabled>Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="mb-3 field">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input onChange={changePhone} type="tel" className="form-control" id="phone" required />
                </div>

                <button onClick={showdetails} type="button" className="form-btn">Sign UP</button>

                <div className="text-center mt-12 mb-6">
                    <p>Already a user ? <Link to="/login" className="uppercase text-blue-400">Login In</Link></p>
                </div>
            </form>

            <div id="details" className="hidden flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <ShowDetails fullname={fullName} mail={mail} pass={pass} phone={phone} gender={gender} bdate={bdate} age={age} />
            </div>
        </div>
    )
}