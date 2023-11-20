import "../../App.css"
import HeaderComp from '../../components/header';
import Button from "../../components/button";
//import HomeUser from "../homeuser";
import "./login.css";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



function onClickHandle(email,password){
  if (email==="" || password ===""){
    return;
  }
  const auth = getAuth();
console.log("entrounafunc");
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
}

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  return(
    <div className="page-login-container">
      <HeaderComp />
      <div className = "form-container">
        <input 
          type = "email" 
          placeholder = "Email address" 
          value = {email} 
          onChange = { (e) => setEmail(e.target.value) }
          ></input>
          <input 
            type = "password" 
            placeholder = "Password" 
            value = { password } 
            onChange = { (e) => setPassword(e.target.value) 
            }></input>

              <Button name = "Sing in" onClick={() => onClickHandle(email,password)}/>

            
            <div className="group-links">
              <a href="/register/">Create a account?</a>
            </div>

      </div> 
    </div>
  )
};
export default Login