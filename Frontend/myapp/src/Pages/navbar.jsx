import React, { useState, useEffect } from "react";
import "./navbar.css";
export default function Navbar(props) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const [homeLink,sethomeLink] = useState("/home/" + props.person.toLowerCase());
    const [testsLink,settestsLink] = useState("/tests/" + props.person.toLowerCase());
    
    return (
        <>
            <div className="navbox">
                <div className="navitems">
                    <span>Educaite</span>
                    <p>{props.person}</p>
                </div>
                <div className="navitems">
                    <ul>
                        <li>
                            <a href={homeLink}>Home</a>
                        </li>
                        <li>
                            <a href={testsLink}>Tests</a>
                        </li>
                        <li>
                            <a href="/input">Inputs</a>
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/">Login/Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}