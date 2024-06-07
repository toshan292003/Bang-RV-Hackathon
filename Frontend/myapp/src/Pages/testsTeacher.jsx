import React, { useState, useEffect } from "react";
import TestCard from "../Components/TestCard";
import Navbar from "./navbar";
export default function TestTeacher() {

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

    return (
        <>
            <Navbar person="Teacher" homelink="/home/teacher"></Navbar>
            <div className="test">
                {tests.map(item => (
                    <div>
                        <TestCard name={item.name} Image={item.link}></TestCard>
                    </div>
                ))}
            </div>
        </>
    )
}