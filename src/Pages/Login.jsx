import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import styles from '../Components/Styles/login.module.css'

const Login = () => {
    const auth = useContext(AuthContext);
    const[creds, setCreds] = useState({});
    const navigate = useNavigate();
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCreds({
            ...creds,
            [name]:value
        });
    };

const handleSubmit=(e)=>{
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creds)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Success");
        // console.log(auth.state.isAuth);
        auth.handleLogin(res.token);
        // console.log(auth.state.isAuth);
        navigate("/asos-clone");

      })
      .catch((err) => {});
};


  return (
    <div className={styles.loginDiv}>
      <br />
        <h1> <b>Login Page</b> </h1> 
        
        <div className={styles.loginForm}>
        <form onSubmit={handleSubmit}>
           <div>
            <input type="text"
             name='email'
             onChange={handleChange}
             placeholder="Enter Email"
             required
             />

            </div> 
            <div>
            <input type="password"
             name='password'
             onChange={handleChange}
             placeholder="Enter Password"
             required
             />
            </div>
            <div>
                <button type='submit' >Login</button>
            </div>
             
        </form>
        <br />
        <h2> <b>Email:</b> eve.holt@reqres.in </h2>
        <h2> <b>Password:</b> cityslicka </h2>
        </div>
        
    </div>
  )
}

export default Login