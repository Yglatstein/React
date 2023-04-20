import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function handleSubmit(event: any) {
    event.preventDefault();
    try {
        const email = event.target.elements.emailRegister.value;
        console.log(email)
        const name = event.target.elements.nameRegister.value;
        console.log(name)
        // const imageLink = event.target.elements.imageLinkRegister.value;
        const password = event.target.elements.passwordRegister.value;
        console.log("password: " , password)
        const { data } = await axios.post("/api/users/register", {email, password, name});
        console.log("recived: ", data);
      } catch (error) {
        console.error(error);
      }
  }
  return (
      <div className="login-signup-page">
        <div className="form">
          <form className="register-form" onSubmit={handleSubmit}>
            <input id="emailRegister" type="text" placeholder="email address"/>
            <input id="nameRegister" type="text" placeholder="name"/>
            {/* <input id="imageLinkRegister" type="text" placeholder="image link"/> */}
            <input id="passwordRegister" type="password" placeholder="password"/>
            
            <button>create</button>
            <p className="message">Already Registered? <Link to="/">Sign In</Link></p>
          </form>
        </div>
      </div>
  );
};

export default Register;
