import classes from './SignUp.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
const SignUp = (props) =>{

    const [email , setEmail] = useState(true)
    const [pswd , setPswd] = useState(true)
    const [cpswd , setCpswd] = useState(true)
    const [name , setName] = useState(true)

    
    let pwd = '';
    const usernameAuth=(event)=>{
        const elm = document.getElementById('usernameAuth2');
        let pattern = /^[\w]{6,8}$/;
        const test = pattern.test(event.target.value);
        if(!test){
            elm.style.display = 'block';
            setEmail(true)
        }
        else{
            elm.style.display = 'none';
            setEmail(false)
        }
    }
    const passwordAuth=(event)=>{
        pwd = event.target.value;
        const elm = document.getElementById('passwordAuth2');
        let pattern = /^[\w]{4,}$/;
        const test = pattern.test(event.target.value);
        if(!test){
            elm.style.display = 'block';
            setPswd(true)
        }
        else{
            elm.style.display = 'none';
            setPswd(false)
        }
    }
    const cPasswordAuth=(event)=>{
        const elm= document.getElementById('passwordAuth3');
        if(event.target.value != document.getElementById('inputpswd').value){
            elm.style.display = 'block';
            setCpswd(true)
        }
        else{
            elm.style.display = 'none';
            setCpswd(false)
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
        axios.post('https://converse-node-api.herokuapp.com/Signup' , obj)
        .then(response => {
            console.log(response.data);
            window.alert('Sign In Successfull . Redirecting To Log In Page !')
        })
        .catch(err => console.log(err))
    }
    const onNameChange=(event)=>{
        if(event.target.value.length > 0){
            document.getElementById('nameAuth2').style.display = "none"
            setName(false)
        }
        else{
            document.getElementById('nameAuth2').style.display = "block"
            setName(true)
        }
    }
    return(
        <div className={classes.SignUpSection}>
        <h1>Sign Up</h1>
        <input className={classes.input} onChange={onNameChange} id="input1" placeholder="ENTER NAME"></input>

        <h4 className={classes.usernameAuth} id="nameAuth2" >Enter Your Name!</h4>

        <input className={classes.input} id="input2" onChange={usernameAuth} placeholder="ENTER USERNAME"></input>

        <h4 className={classes.usernameAuth} id="usernameAuth2" >Enter A Valid Username [A-Z,a-z,0-9 , between 6-8 letters] !</h4>

        <input className={classes.input} id="inputpswd" onChange={passwordAuth} type = "password" placeholder="ENTER PASSWORD"></input>

        <h4 className={classes.passwordAuth} id="passwordAuth2" >Enter A Valid Password [A-Z,a-z,0-9 , atleast 4 letters] !</h4>

        <input className={classes.input} id="input3" onChange={cPasswordAuth} type = "password" placeholder="CONFIRM PASSWORD"></input>

        <h4 className={classes.passwordAuth2} id="passwordAuth3" >Password Does Not Match !</h4>
        <Link to='/'><button
        //  onClick={()=>props.onCAClick()} 
         className={classes.SignUpBtn} disabled={name || email || pswd || cpswd} onClick={onSignInClick}>Sign Up</button></Link>
        </div>
    )
}

export default SignUp;