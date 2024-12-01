import React, { useState } from "react";
import "./classcard.css";
export default function Activity(props) {

    const [pos,setPos] = useState(780);

    const handleMouseEnter = ()=>{
        setPos(0);
    }
    const handleMouseLeave = ()=>{
        setPos(780);
    }

    const navigatetopage = ()=>{
        window.location.href = props.link;
    }

    return (
        <>
            <div style={{ background: `url(${props.image})` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={navigatetopage}>
                <b></b>
                <i style={{left:`${pos}px`}}></i>
                <img src={props.icon} alt="" />
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        </>
    )
}