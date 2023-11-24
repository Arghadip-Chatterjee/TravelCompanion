import React, { useEffect } from "react";
import firebase from "./firebase"; // Import the firebase instance from your firebase.js file
import { useNavigate } from "react-router-dom";
import travel2 from './travel2.svg';
import './Login.css';
import travel3 from './travel3.jpg';

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is already signed in
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, navigate to the home page
                navigate("/homepage");
            }
        });

        // Unsubscribe from the auth state listener when the component unmounts
        return () => unsubscribe();
    }, [navigate]);

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider);
    };

    return (
        <div className="main">
            <div className="left-side">
                <div className="heading">
                    Sign In to:-
                </div>
                <div className="body">
                    <ul>
                        <li>To See Hotels</li>
                        <li>To See Restaurants</li>
                        <li>To See Flights</li>
                        <li>To See Trip Planner</li>
                        <li>To See Weather</li>
                        <li>To See travel blogs</li>
                        <li>To See Living Prospects</li>
                    </ul>
                </div>
                {/* <div className="button"> */}
                    <button onClick={handleGoogleSignIn}> Sign In to Google</button>
                {/* </div> */}
            </div>
            <div className="right-side">
                <img src={travel3} alt="Travel" />
            </div>
        </div>
    );
}

export default Login;
