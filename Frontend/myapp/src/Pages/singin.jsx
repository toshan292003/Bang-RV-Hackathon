import React,{ useState , useEffect } from "react";
import Button from "../Components/button";
import "./signup.css";
import { useNavigate } from 'react-router-dom';

export default function Signin(){
    
    const navigate = useNavigate();

    const submit = ()=>{
        console.log("Form submitted.");
        navigate('/');
    }

    return(
        <>
            <div className="signbox">
                <section>
                    <img src="https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=" alt="" />
                </section>
                <section>
                    <h1>Sign In</h1>
                    <div>
                        
                    </div>
                    <form action="" >
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Password"/>
                        <a href="/">
                            <button onClick={submit} >SIGN UP</button>
                        </a>
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