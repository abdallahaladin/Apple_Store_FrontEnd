import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/SignInAndSignUp.css';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/v1/users/login', {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                setError(null);
                navigate('/admin_dashboard', { state: { user: response.data.user } });
            } else {
                setError(response.data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="Sign">
            <div className="center">
                {error && <h1 className="error-message">{error}</h1>}
                {!error && (
                    <>
                        <h2>Welcome Back !</h2>
                        <h3 className="headText">Sign In</h3>
                    </>
                )}
                <div className="Email">
                    <h3 className="EmailHeader">Email</h3>
                    <input
                        className="textInput"
                        type="Email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="Password">
                    <h3 className="PasswordHeader">Password</h3>
                    <input
                        className="textInput"
                        type="password"
                        placeholder="******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <br></br>
                <div className="checkBox" >
                    <input type="checkbox" /> <b>Remember me</b>
                </div>
                <Link className="Forgot" to={"/forgot"}>Forgot Password?</Link>
                <a className="Forgot"></a>
                <br/>
                <button onClick={handleLogin}>Login</button>
                <br/>
                <a className="SignU">Don't have an account? <Link to={"/signup"}>SignUp</Link></a>
            </div>
        </div>
    );
}

export default SignIn;
