import React, { useState, useEffect } from "react";
import Button from "../Components/button";
import "./signup.css";
import { useNavigate, Link } from 'react-router-dom';

export default function Signin() {

    const navigate = useNavigate();
    const [person, setPerson] = useState("Student");
    const [route, setRoute] = useState("/home/teacher");

    const handlePerson = (event) => {
        const personName = event.target.textContent;
        setPerson(personName);
        const newRoute = "/home/" + personName.toLowerCase();
        setRoute(newRoute);
        console.log(personName);
        console.log(newRoute);
    };

    const submit = () => {
        console.log("Form submitted.");
        navigate(`/home/{person}`);
    }

    return (
        <>
            <div className="signbox">
                <section>
                    <img src="https://images.pexels.com/photos/1620389/pexels-photo-1620389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </section>
                <section>
                    <h1>Sign In</h1>
                    <div>
                        <span>Login as ?</span>
                        <p>
                            <button onClick={handlePerson}>Teacher</button>
                            <button onClick={handlePerson}>Student</button>
                        </p>
                    </div>
                    <form action="" >
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Password" />
                        <Link to={route.toString()}>
                            <button onClick={submit}>LOGIN</button>
                        </Link>
                    </form>

                    <p>
                        Yet to make an account?
                        <a href="/signup">Sign Up</a>
                    </p>
                </section>
            </div>
        </>
    )
}