import react from 'react';
import classes from './SignUp.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
const SignUp = (props) =>{
    
    let pwd = '';
    const usernameAuth=(event)=>{
        const elm = document.getElementById('usernameAuth2');
        let pattern = /^[\w]{6,8}$/;
        const test = pattern.test(event.target.value);
        if(!test){
            elm.style.display = 'block';
        }
        else{
            elm.style.display = 'none';
        }
    }
    const passwordAuth=(event)=>{
        pwd = event.target.value;
        const elm = document.getElementById('passwordAuth2');
        let pattern = /^[\w]{4,}$/;
        const test = pattern.test(event.target.value);
        if(!test){
            elm.style.display = 'block';
        }
        else{
            elm.style.display = 'none';
        }
    }
    const cPasswordAuth=(event)=>{
        const elm= document.getElementById('passwordAuth3');
        if(pwd != event.target.value){
            elm.style.display = 'block';
        }
        else{
            elm.style.display = 'none';
        }
    }
    const onSignInClick=()=>{
        let obj1 = document.getElementById('input1');
        let obj2 = document.getElementById('input2');
        let obj3 = document.getElementById('input3');
        var obj = {
            name : obj1.value,
            username : obj2.value,
            password : obj3.value
        }
        axios.post('http://localhost:5000/Signup' , obj)
        .then(response => {
            console.log(response.data);
            window.alert('Sign In Successfull . Redirecting To Log In Page !')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className={classes.SignUpSection}>
        <h1>Sign Up</h1>
        <input className={classes.input} id="input1" placeholder="ENTER NAME"></input>
        
        <input className={classes.input} id="input2" onChange={usernameAuth} placeholder="ENTER USERNAME"></input>
        <h4 className={classes.usernameAuth} id="usernameAuth2" >Enter A Valid Username [A-Z,a-z,0-9 , between 6-8 letters] !</h4>
        <input className={classes.input}  onChange={passwordAuth} type = "password" placeholder="ENTER PASSWORD"></input>
        <h4 className={classes.passwordAuth} id="passwordAuth2" >Enter A Valid Password [A-Z,a-z,0-9 , atleast 4 letters] !</h4>
        <input className={classes.input} id="input3" onChange={cPasswordAuth} type = "password" placeholder="CONFIRM PASSWORD"></input>
        <h4 className={classes.passwordAuth2} id="passwordAuth3" >Password Does Not Match !</h4>
        <Link to='/'><button
        //  onClick={()=>props.onCAClick()} 
         className={classes.SignUpBtn} onClick={onSignInClick}>Sign Up</button></Link>
        </div>
    )
}

export default SignUp;