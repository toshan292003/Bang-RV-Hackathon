import React, { useState, useEffect } from "react";
import CoolCard from "../Components/CoolCard";
import Navbar from "./navbar";
import "./test.css";
export default function TestStudent() {

    const tests = ["History","Mathematics","Physics","Chemistry","Biology","English"]
    const images=["https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/1771338/pexels-photo-1771338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6929348/pexels-photo-6929348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ];
    return (
        <>
            <Navbar person="Student"></Navbar>
            <div className="test">
                {tests.map((item,index) => (
                    <CoolCard name={item} Image={images[index]}></CoolCard>
                ))}
            </div>
        </>
    )
}