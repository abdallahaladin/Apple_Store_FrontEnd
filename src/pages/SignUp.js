import React, { useState } from "react";
import '../css/SignInAndSignUp.css';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const SignUp=()=>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSignUp = async () => {
        try {
            if (!name || !email || !password) {
                console.error('Please fill in all required fields');
                return;
            }
    
            const response = await axios.post('/api/v1/users/', {
                name: name,
                email: email,
                password: password,
            });
            
    
            if (response.status === 201) {
                navigate('/admin_dashboard', { state: { user: response.data.user } });
            } else {
                console.error('Sign-up failed:', response.data.message || 'Unknown error');
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };
    

    return(
        <div className="SignUp">
        <div className="centerUp">
            <h2>Sign Up</h2>
            <h3 className="headText">Create an Account</h3>

            <div className="Name">
                <div className="FirstName">
                    <h3 className="EmailHeader">Full Name</h3>
                    <input className="textInput" type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

            </div>

            <div className="Email">
                <h3 className="EmailHeader">Email</h3>
                <input className="textInput" type="email" placeholder="Enter Your Email"   value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="Password">
                <h3 className="PasswordHeader">New Password</h3>
                <input className="textInput" type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>


            <br />
            <button onClick={handleSignUp}>Create New Account</button>
            <br />
            <p className="Signin">Already Have an account? <Link to="/signin">SignIn</Link></p>
        </div>
    </div>
    );
}
export default SignUp;
