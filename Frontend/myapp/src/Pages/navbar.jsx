import React, { useState, useEffect } from "react";
import "./navbar.css";
export default function Navbar(props) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        console.log(window.scrollY);
        console.log('Scrolling...');
    };

    useEffect(() => {
        const listener = () => {
            handleScroll();
        };

        window.addEventListener('scroll', listener);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, []);
    return (
        <>
            <div className="navbox">
                <div className="navitems">
                    <span>Educaite</span>
                    <p>{props.person} Login</p>
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
                            <a href="/">Login/Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}