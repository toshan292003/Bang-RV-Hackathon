import React from "react";
import "./navbar.css";
export default function Navbar(){
    return(
        <>
            <div className="navbox">
                <div className="navitems">
                    <span>Educaite</span>
                </div>
                <div className="navitems">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/input">Inputs</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/signin">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}