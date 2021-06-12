import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './fonts.module.css'
import Header from './HomePage/Header'
import Main from './HomePage/Main'
import MainPanel from './DiscussionTopics/MainPanel'
import Navbar from './DiscussionTopics/Navbar'
import Discussion from './DiscussionTopics/Discussion'
import { Component } from 'react';
import aboutPage from './HomePage/aboutPage'
import userPage from './HomePage/userPage'
import { ProtectedRoute } from './HomePage/protected.route'

class App extends Component  {

  state = {
    showMainPanel : false,
    showNavbar : false
  }

  
  returnNavbar= ()=>{
    if(this.state.showNavbar)
    {
      return(<Navbar></Navbar>)
    }

  }

  

  render(){
    return (
      <div className="App">
        
        {/* <Header></Header> */}
      <Router>
       
          
        <Route path='/' exact component={Header}></Route>
         
          <Route path='/topics' exact component={Navbar}></Route>
         
          {/* <Route path='/topics' exact component={Navbar}></Route> */}
          {/* <Route path='/topics' exact component={MainPanel}></Route> */}
          
          <Route path='/discussion' exact component={Navbar}></Route>
         
          <Route path='/about' exact component={Navbar}></Route>
         
          <Route path='/user' exact component={Navbar}></Route>
          
          <Switch> 
             <Route path='/' exact component={Main}></Route>
             <ProtectedRoute path='/topics' exact component={MainPanel}></ProtectedRoute>
             <ProtectedRoute path='/discussion'  component={Discussion}></ProtectedRoute>
            <ProtectedRoute path='/about'  component={aboutPage}></ProtectedRoute>
            <ProtectedRoute path='/user'  component={userPage}></ProtectedRoute>
          <Route exact path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
        {this.returnNavbar()}
        {/* <MainPanel></MainPanel>
        <Main onLogInClick={this.onLogInClick} ></Main> */}
        {/* {this.mainPanelFunction()} */}
      </div>
    );
  }
}

export default App;
