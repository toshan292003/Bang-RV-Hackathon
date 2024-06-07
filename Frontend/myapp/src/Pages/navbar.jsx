import React,{ useState , useEffect } from "react";
import "./navbar.css";
export default function Navbar(props){

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        console.log(scrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
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