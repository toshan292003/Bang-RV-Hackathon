import { React, useRef, useState, useEffect } from "react";
import "./locomotive.css";
import LocomotiveScroll from 'locomotive-scroll';


//importing all components
import Button from "../Components/button";
import "./classDash.css";
import Activity from "../Components/Activity";



//importing all icons
import chat from "../Icons/messenger.png";
import test from "../Icons/approval.png";
import analysis from "../Icons/analytics.png";




export default function ClassDashboard() {
    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [pos,setPos] = useState(2000);

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        console.log(scrollPosition);
        const scrollInstance = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 0.5
        });
        return () => {
            scrollInstance.destroy();
        };
    }, []);



    const Class = {
        title: "Class 1",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur consectetur odit totam cupiditate ipsum! Ab est amet dignissimos sed. Illum.",
        classcode: "EHVFJA",
        image: "https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

    const navigateBack = () => {
        window.location.href = `/home/teacher`;
    }
    const navigatetopage = () => {
        window.location.href = `/home/teacher`;
    }

    const handleMouseEnter = ()=>{
        setPos(300);
    }
    const handleMouseLeave = ()=>{
        setPos(2000);
    }

    return (
        <>
            <div className="classdash" data-scroll-container ref={scrollRef}>
                <button className="classButton" onClick={navigateBack}>&#x25c0; Back to Dashboard</button>
                <button className="classButton">&#x2715; Leave Class</button>
                <section className="home-1">
                    <img src={Class.image} data-scroll data-scroll-speed="-3" />
                    <div>
                        <h1>
                            Welcome to {Class.title}.
                        </h1>
                        <p>
                            {Class.desc}
                        </p>
                        <span>Class code : {Class.classcode}</span>
                        <Button title="MANAGE STUDENT DATABASE"></Button>
                    </div>
                </section>
                <h2>ACTIVITIES</h2>
                <section className="activity-box">
                    <Activity image="https://plus.unsplash.com/premium_photo-1681487683141-e72c5ccd94e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" icon={chat} title="CHAT" desc="Interact with your ducuments" link={`/home/teacher/class/${Class.classcode}/chat`}></Activity>

                    <Activity image="https://images.pexels.com/photos/6684372/pexels-photo-6684372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" icon={test} title="ASSESSMENTS" desc="Setup Tests and Quizzes" link={`/home/teacher/class/${Class.classcode}/assessments`}></Activity>

                    <Activity image="https://wallpaperaccess.com/full/8111956.jpg" icon={chat} title="PARTICIPANTS" desc="See who's in the Class" link={`/home/teacher/class/${Class.classcode}/studentlist`}></Activity>

                    <Activity image="https://arize.com/wp-content/uploads/2023/10/leaderboard-art.jpg" icon={chat} title="LEADERBOARDS" desc="View Class Rankings and Achievements" link={`/home/teacher/class/${Class.classcode}/leaderboards`}></Activity>
                </section>
                <section style={{ background: `url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={navigatetopage} className="activity-lastcard">
                    <b></b>
                    <i style={{ left: `${pos}px` }}></i>
                    <img src={analysis} alt="" />
                    <h1>ANALYTICS</h1>
                    <p>View detailed class performance metrics</p>
                </section>
            </div>
        </>
    )
}