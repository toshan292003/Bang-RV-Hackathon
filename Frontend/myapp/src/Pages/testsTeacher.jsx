import React, { useState, useEffect } from "react";
import CoolCard from "../Components/CoolCard";
import Navbar from "./navbar";
import "./test.css";
export default function TestTeacher() {

    const tests = ["Science","Mathematics","Biology","Physics","Chemistry"]
    const images=["https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , "https://images.pexels.com/photos/6256258/pexels-photo-6256258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , "https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , "https://images.pexels.com/photos/1771338/pexels-photo-1771338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
    return (
        <>
            <Navbar person="Teacher" homelink="/home/teacher"></Navbar>
            <div className="test">
                {tests.map((item,index) => (
                    <CoolCard name={item} Image={images[index]}></CoolCard>
                ))}
            </div>
            <div className="test">
                <a href="/tests/add" className="test">
                    <button>Create New Test</button>
                </a>
            </div>
        </>
    )
}


const tests = [
    {
        name: "Social Science",
        link: "https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Mathematics",
        link: "https://images.pexels.com/photos/6256258/pexels-photo-6256258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Physics",
        link: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Chemistry",
        link: "https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name: "Biology",
        link: "https://images.pexels.com/photos/1771338/pexels-photo-1771338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]