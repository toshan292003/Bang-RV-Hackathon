import React, { useState, useEffect } from "react";
import Button from "../Components/button";
import "./signup.css";
import { useNavigate, Link } from 'react-router-dom';

export default function CreateTest() {

    const navigate = useNavigate();
    const [route, setRoute] = useState("/home/teacher");

    const [warning, setwarn] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        link: '',
        q1: '',
        ans1: '',
        q2: '',
        ans2: '',
        q3: '',
        ans3: '',
        q4: '',
        ans4: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const submit = async (event) => {
        event.preventDefault();
        console.log("Form submitted.");

        setwarn("");

        try {
            const response = await fetch('http://127.0.0.1:5000/create_test_with_questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
            navigate(route);
        } catch (error) {
            console.error('Error submitting form data:', error);
            setwarn("User doesnt exist");
        }
    };

    return (
        <>
            <div className="signbox">
                <section>
                    <img src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </section>
                <section className="scrollable">
                    <button>back</button>
                    <h1>Create a Test</h1>
                    <form action="">
                        <input type="text" name="name" placeholder="Subject Name" onChange={handleChange} value={formData.name} />

                        <input type="text" name="q1" placeholder="Question 1" onChange={handleChange} value={formData.q1} required />
                        <textarea name="ans1" placeholder="Answer key for Question 1" onChange={handleChange} value={formData.ans1} />

                        {/* <input type="text" name="q2" placeholder="Question 2" onChange={handleChange} value={formData.q2} required />
                        <textarea name="ans2" placeholder="Answer key for Question 2" onChange={handleChange} value={formData.ans2} /> */}
{/* 
                        <input type="text" name="q3" placeholder="Question 3" onChange={handleChange} value={formData.q3} required />
                        <textarea name="ans3" placeholder="Answer key for Question 3" onChange={handleChange} value={formData.ans3} />

                        <input type="text" name="q4" placeholder="Question 4" onChange={handleChange} value={formData.q4} required />
                        <textarea name="ans4" placeholder="Answer key for Question 4" onChange={handleChange} value={formData.ans4} /> */}

                        <span>{warning}</span>
                        <Link to={route.toString()}>
                            <button onClick={submit}>Create Test</button>
                        </Link>
                    </form>
                </section>
            </div>
        </>
    )
}