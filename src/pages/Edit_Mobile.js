import React from "react";
import '../css/Edit_Mobile.css';
const DBUser =()=>{
    return(
        <>
        <div className="con03">
      <div class="ProfilePic">
        <div class="image"><img src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&uid=R20689868&ga=GA1.1.2128443553.1687617830&semt=sph'/>
        </div>
      </div>

        <div class="input_Mobile">
        <h2>Enter New Mobile Number</h2>
       
       
        <input type="email" placeholder="+02:***********"></input>
        </div>
        </div>
        </>
    );
}
export default DBUser;