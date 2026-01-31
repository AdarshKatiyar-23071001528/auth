import React from 'react'
import { useState } from 'react'
import AppContext from '../src/Context/AppContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(AppContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const onChangeHandler = (e) =>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const {email,password} = formData;
    const submitHandler = async(e) => {
        e.preventDefault();
        const result = await login(email,password);
        if(result.success) {
            navigate('/home');
        }

    }

    return (
        <>
           

            <div className='nav'>
                <div className="page">
                    <div className="container">


                        <div className="left">
                            <center><h2>Login</h2><br /></center>

                            <form id="loginForm" onSubmit={submitHandler}>

                                <input name="email" value={formData.email} onChange={onChangeHandler} type="email" id="useremail" placeholder="UserEmail" />
                                <input name="password" value={formData.password} onChange={onChangeHandler} type="password" id="password" placeholder="Password" />


                                <div className="remember">
                                    <input type="checkbox" id="rememberMe" />
                                    <label htmlFor="rememberMe">Remember Me</label>
                                </div>

                                <a href="#" className="forgot">Forgot Password?</a>

                                <button type="submit">Login</button>

                                <p className="signup-text">
                                    Don’t have an account? <a href="/register">Sign up</a>
                                </p>



                            </form>
                        </div>

                        <div className="right">
                            <h1>Welcome to <span>SKIT</span></h1>
                            <p className="tagline">Dreams Come True Here!</p>


                            <img src="./s1.jpg"
                                alt="Student Login Illustration"
                                className="illustration" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login