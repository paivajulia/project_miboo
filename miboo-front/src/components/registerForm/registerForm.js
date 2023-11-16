import React from "react";
import Button from "../button";
import "./registerForm.css";

function Register_form() {
    return(
        <div className="register-form-container">

                <input
                    type="text"
                    name="Fist Name"
                    id="First Name"
                    placeholder="First Name"
                />
                 
                <input
                    type="text"
                    name="Last Name"
                    id="Last Name"
                    placeholder="Last Name"
                />

                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="e-mail"
                />
                <input
                    type="password"  
                    name="password"  
                    id="password"   
                    placeholder="password"
                />

            <Button name="Submit" />

        </div>
        
    )
}

export default Register_form;