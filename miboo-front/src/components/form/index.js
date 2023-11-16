import React from "react";
import Button from "../button";
import "./form.css";

function Form() {
    return(
        <div className="form-container">

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

            <Button name="Login" />
            <div className="group-links">
                <a href="register">Create an account ?</a>
                <a href="">Forgot your password ?</a>
            </div>
        </div>
        
    )
}

export default Form;