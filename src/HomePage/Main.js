import react from 'react';
import LogIn from './LogIn';
import classes from './Main.module.css'
import Section from './Section'
import SignUp from './SignUp'
import { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

class Main extends Component{
    
    render(){
        return(
            <main className={classes.main}>
            
            <Section></Section>
            
            <aside className={classes.aside}>

            <Router>
              <Route path='/' exact component={LogIn}></Route>
              <Route path='/Signup' exact component={SignUp}></Route>
            </Router>
                
                {/* {this.showLogIn()} */}
            </aside>
          </main>
        )
    }
}

export default Main;