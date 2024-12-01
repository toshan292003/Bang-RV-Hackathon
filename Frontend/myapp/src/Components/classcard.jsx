import React from "react";
import "./classcard.css";
import Button from "./button";

export default function ClassCard(props){
    return(
        <>
            <div className="classcard">
                <h1>{props.title}</h1>
                <span>{props.classcode}</span>
                <p>{props.desc}</p>
                <Button link={props.link} title="Go to Class"></Button>
            </div>
        </>
    )
}