import React,{ useState , useEffect } from "react";
import Button from "../Components/button";
import "./signup.css";
import { useNavigate } from 'react-router-dom';

export default function Signup(){

    const navigate = useNavigate();
    const [person,setPerson] = useState("Student");

    const handlePerson = (event)=>{
        setPerson(event.target.textContent);
        console.log(person);
    }

    const submit = ()=>{
        console.log("Form submitted.");
        navigate('/');
    }
    return(
        <>
            <div className="signbox">
                <section>
                    <img src="https://img.freepik.com/premium-photo/abstract-collage-education-intelligence-wallpaper_468322-1437.jpg" alt="" />
                </section>
                <section>
                    <h1>Sign Up</h1>
                    <div>
                        <span>Sign Up as ?</span>
                        <p>
                            <button onClick={handlePerson}>Teacher</button>
                            <button onClick={handlePerson}>Student</button>
                        </p>
                    </div>
                    <form action="" >
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="USN"/>
                        <input type="text" placeholder="Password"/>
                        <input type="text" placeholder="Confirm Password"/>
                        <a href="/">
                            <button onClick={submit} >SIGN UP</button>
                        </a>
                    </form>

                    <p>
                        Already have an account?
                        <a href="/signin">Sign In</a>
                    </p>
                </section>
            </div>
        </>
    )
}