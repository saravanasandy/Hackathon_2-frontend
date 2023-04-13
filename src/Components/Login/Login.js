import React, { useEffect, useState } from 'react'
import photo1 from './photo1.jpeg';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {emailValidator,passwordValidator} from './RegexValidator';

const Login = () => {

      const navigate = useNavigate();
          // const login = ()=>{
          //     navigate('/portal/');
          // }

          useEffect(()=>{
                if(localStorage.setItem('auth', true)) navigate('/portal/');
          },[])

          const [Input,SetInput] = useState({
            email:"",
            password:""
          });
            
          const [errorMessage,SetErrorMessage] = useState("");
          const [SuccessMessage,SetSuccessMessage] = useState("");

            const inputHandler = (e)=>{
                e.preventDefault();
                SetSuccessMessage("");
                if(!emailValidator(Input.email)) return SetErrorMessage("Please Enter Valid Email Id ");
                if(!passwordValidator(Input.password)) return SetErrorMessage(` Password Should have minimum 8 character with Combination of Uppercase,LowerCase, Number & Special Character`);
                SetSuccessMessage("SuccessFully validate");
                SetErrorMessage("");
                localStorage.setItem('auth', true)
              
                navigate('/portal/');
               
                
                console.log(Input);
            }

  return (
    <>
      <div className="App">
      <img src= {photo1} className = "body-container" alt='' />
    <div className="container" >
      <form onSubmit={inputHandler}>
        {errorMessage.length > 0 && <div style={{marginBottom: "10px" , color : "white"}}>{errorMessage}</div>}
        {SuccessMessage.length > 0 && <div style={{marginBottom: "10px" ,fontSize:"20px" ,color : "darkGreen"}}>{SuccessMessage}</div>}
    <h1 id="heading"> Login Page</h1>

    <label for="Email" id="label2"> Email</label>   <br/>
    <input type="email" name="" id="Email"   onChange={(e)=>SetInput({...Input,email:e.target.value })} value={Input.email} /> <br/>
    
    <label for="pass" id="label3"> Password</label>   <br/>
    <input type="password" name="" id="pass"  onChange={(e)=>SetInput({...Input,password:e.target.value })} value={Input.password}/>    <br/>

    
    {/* <button id="btn" onClick={login} >Login</button> */}
    <button id="btn" >Login</button>
    </form>
    </div>
    </div>
  
    </>

  )
}

export default Login