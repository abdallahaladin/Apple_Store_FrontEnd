import React from "react";
const forgotPasswrod=()=>{
    return(
        <div className="ForgotPassword">
            <div className="centerForgot">
        <h2>Find Your Account</h2>
        
        <div className="Email">
        <h3 className="EmailHeader">Please enter your email address to search for your account.</h3>
        <input className="textInput" type="Email" placeholder="Enter Your Email"/>
        </div>
        <button className="search">Search</button>
        <button className="cancel">Cancel</button>
        </div>
        </div>
    );
}
export default forgotPasswrod;
