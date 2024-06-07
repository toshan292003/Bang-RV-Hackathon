import React, { useState, useEffect } from "react";
import Button from "../Components/button";
import "./signup.css";
import { useNavigate, Link } from 'react-router-dom';

export default function Signin() {

    const navigate = useNavigate();
    const [route, setRoute] = useState("/home/teacher");

    const [warning, setwarn] = useState("");

    const [formData, setFormData] = useState({
        person: '',
        username: '',
        password: ''
    });
    const handlePerson = (event) => {
        const role = event.target.textContent;
        setFormData({ ...formData, person: role });
        setRoute("/home/" + role.toLowerCase());
        console.log(route);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const submit = async (event) => {
        event.preventDefault();
        console.log("Form submitted.");

        setwarn("");

        try {
            const response = await fetch('http://127.0.0.1:5000/api/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
            navigate(route);
        } catch (error) {
            console.error('Error submitting form data:', error);
            setwarn("User doesnt exist");
        }
    };

    return (
        <>
            <div className="signbox">
                <section>
                    <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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
                        <input type="text" name="username" placeholder="Name" onChange={handleChange} value={formData.username} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
                        <span>{warning}</span>
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