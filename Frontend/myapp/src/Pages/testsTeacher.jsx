import React , {useState,useEffect} from "react";
import TestCard from "../Components/TestCard";
import Navbar from "./navbar";
export default function TestTeacher(){
    return(
        <>
            <Navbar person="Teacher"></Navbar>
            <TestCard name="Science" Image="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></TestCard>
        </>
    )
}