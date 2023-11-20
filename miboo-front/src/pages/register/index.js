import "../../App.css"
import "./register.css"
import HeaderComp from '../../components/header';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Button from "../../components/button";

function onClickHandleRegister(email,password){
  const auth = getAuth();
  console.log("entrounafunc");
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ..
    });
}


function Register() {
// TODO code
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  return (
    <div className="page-register-container">
        <HeaderComp />
        <div className="register-form-container">
            <input 
              type = "email" 
              placeholder = "Email address" 
              value = {email} 
              onChange = { (e) => setEmail(e.target.value) 
            }></input>
            <input 
              type = "password" 
              placeholder = "Password" 
              value = {password} 
              onChange = { (e) => setPassword(e.target.value) 
            }></input>
          </div>
          <Button name="Submit" onClick={() => onClickHandleRegister(email,password)}/>
          <div className="link-back" >
            <a href="/">Back</a>
          </div> 
    </div>
  );
}

export default Register;