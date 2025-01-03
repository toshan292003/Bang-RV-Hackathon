import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import Button from "../Components/button";
import Navbar from "./navbar";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ClassCard from "../Components/classcard";

import IMGA from "../Images/aaaaaaaaaaaaaaaaaaa.png";
import IMGB from "../Images/bbbbbbbbbbbbbbbb.png";
import IMGC from "../Images/ccccccccccccccccccccccccc.png";

import "./locomotive.css";
import LocomotiveScroll from 'locomotive-scroll';

export default function HomeT() {

    const scrollRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

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

    const classes = [
        {
            title: "Class 1",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur consectetur odit totam cupiditate ipsum! Ab est amet dignissimos sed. Illum.",
            classcode: "EHVFJA"
        },
        {
            title: "Class 2",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur consectetur odit totam cupiditate ipsum! Ab est amet dignissimos sed. Illum.",
            classcode: "EHVFJA"
        },
        {
            title: "Class 3",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur consectetur odit totam cupiditate ipsum! Ab est amet dignissimos sed. Illum.",
            classcode: "EHVFJA"
        }
    ]

    return (
        <>
            <Navbar person="Teacher"></Navbar>
            <div className="home" data-scroll-container ref={scrollRef}>

                <section className="home-1">
                    <img src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" data-scroll data-scroll-speed="-3" />
                    <div>
                        <h1>
                            An online examination and grading system for students.
                        </h1>
                        <p>
                            An Online Examination and Grading System for Students streamlines assessments by enabling remote exam-taking, electronic submissions, and automated grading. This digital platform enhances accessibility and academic integrity, offering educators efficient evaluation tools while providing students with a convenient and secure means of assessment.
                        </p>
                        <Button title="MANAGE STUDENT DATABASE"></Button>
                    </div>
                </section>
                <section className="home-2">
                    <div className="home-2box">
                        <h2>
                            CLASS DASHBOARD
                        </h2>
                        <Button title="+ JOIN CLASS"></Button>
                    </div>
                    <div className="home-2box">
                        {
                            Array.isArray(classes) && classes.length > 0 ? (
                                classes.map((item) => (
                                    <div className="classcard">
                                        <h1>{item.title}</h1>
                                        <span>{item.classcode}</span>
                                        <p>{item.desc}</p>
                                        <Button title="Go to Class" link="/home/teacher/class/1"></Button>
                                    </div>
                                ))
                            ) :
                                (<></>)
                        }
                    </div>
                </section>



                <section className="home-3">
                    <img src="https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" data-scroll data-scroll-speed="3" />
                    <span></span>
                    {/* <section>
                    <img src={IMGA} alt="" data-scroll data-scroll-speed="1"/>
                </section>
                <section>
                    <img src={IMGB} alt="" data-scroll data-scroll-speed="4"/>
                </section>
                <section>
                    <img src={IMGC} alt="" data-scroll data-scroll-speed="10"/>
                </section> */}
                    <h1>How Educaite Empowers Teachers</h1>
                    <div>
                        <p>When you need urgent medical assistance, our streamlined process ensures quick and efficient service. First, select the type of ambulance service you require, whether it's emergency, non-emergency, or specialty care. Next, provide essential details such as the pickup location and any specific medical needs. Our dispatch team will swiftly process your request and deploy the nearest available ambulance equipped to handle your situation. Once confirmed, our trained professionals will arrive promptly to provide the necessary care and transportation to your desired destination. Rest assured, our seamless process prioritizes your well-being every step of the way.</p>
                    </div>
                </section>

                <section className="home-2">
                    <h2>
                        OUR SERVICES
                    </h2>
                    <div className="home-2box">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/496/496979.png" alt="" />
                            <h1>Emergency Ambulance</h1>
                            <p>Rapid response and transportation for critical medical situations.</p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/5828/5828025.png" alt="" />
                            <h1>Specialty Care</h1>
                            <p>For specialized medical needs such as neonatal care, cardiac emergencies.</p>
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/9356/9356266.png" alt="" />
                            <h1>Event Medical Services</h1>
                            <p>On-site medical support for events, ensuring the well-being of attendees.</p>
                        </div>
                    </div>
                </section>

                <section className="home-4">
                    <h1>get to know us</h1>
                    <div>
                        <section>
                            <p>We are a couple of students from Sahyadri College of Engineering and Management, Mangaluru, currently in 5th Semister, 3rd year Engineering who are passionate in Building Websites.
                                We built this website solely to test our Frontend and Basic Backend development Skills.
                                We have used frameworks like React.Js, Styling Sheets like Tailwind for Frontend and Node.Js , Express.Js, MySQL for Backend.</p>
                            <Button title="ABOUT US"></Button>
                        </section>
                        <section>
                            <img src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149373211.jpg?w=1380&t=st=1708356216~exp=1708356816~hmac=1ea948c204eec4e38695c4437d119021ad6897e2c6f42c1bdfc81dc7776e37d0" alt="" />
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
};