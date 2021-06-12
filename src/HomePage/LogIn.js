import react, { Component } from 'react';
import classes from './LogIn.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import { response } from 'express';

class LogIn extends Component{

    state = {
        username :'',
        password : '',
    }

     onLogInClick=()=>{
        //window.location.reload();
        let obj1 = document.getElementById('input1');
        let obj2 = document.getElementById('input2');
        //console.log(obj1.value)
       

        axios.get('http://localhost:5000/' , {
            params:{
                username : obj1.value ,
                password : obj2.value
            }
        })
        .then(response =>{
            if(response.data.length > 0){
                localStorage.setItem("currentUser" , response.data[0].username);
                window.location.replace("http://localhost:3000/topics");
                
            }
            else{
                window.alert("USERNAME OR PASSWORD DO NOT MATCH!!")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    
     onUsernameChange = (event)=>{
        this.setState({username : event.target.value})
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
    render(){
        return(
            <div className={classes.loginSection}>
        <h1>Log In</h1>
        <input className={classes.input} id="input1" onChange={this.onUsernameChange} placeholder="ENTER USERNAME"></input>
        <h4 className={classes.usernameAuth} id="usernameAuth2" >Enter A Valid Username</h4>
        <input className={classes.input} id="input2" type = "password" placeholder="ENTER PASSWORD"></input>
        {/* <Link to='/topics'> */}
            <button onClick={()=>{this.onLogInClick()}}
         className={classes.logInBtn}>LOG IN</button>
         {/* </Link> */}
        <Link to='/Signup'><button className={classes.createBtn}>CREATE AN ACCOUNT</button></Link>
        </div>
        )
    }
}

export default LogIn;