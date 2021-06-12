import react from 'react';
import classes from './MainPanel.module.css'
import Cards from './Cards'
import {Component}  from 'react'
import axios from 'axios';

class MainPanel extends Component{
    state = {
        title:'',
        desc:'',
        displayDiscussions : false,
        obj:[],
        reload : false
    }
    title='';
    desc='';
    id = '';

   componentDidMount(){
    axios.get('http://localhost:5000/topics/')
    .then(response=>{
        if (response.data.length > 0) {
            this.setState({obj : response.data.map(object => object)})

            console.log("yolo")
            
    }
    })
   }

    
    handleTitleChange=(event)=>{
        this.title = event.target.value;
        
    }

    handleDescChange=(event)=>{
        this.desc = event.target.value;
       
    }
    onCreateBtnClick=()=>{
        var obj = 
        {
            title: this.title,
            desc : this.desc,
            user : localStorage.getItem("currentUser")
        };
        axios.post('http://localhost:5000/topics/add',obj)
        .then(res=>{
            console.log(res.data)
            this.setState({title : this.title,desc : this.desc})
        
            axios.get('http://localhost:5000/topics/')
            .then(response=>{
                if (response.data.length > 0) {
                    this.setState({obj : response.data.map(object => object)})
          
            }
            })
            

        
        })
        .catch(err=>{console.log(err)})
         
        
    }
    onCardsClick=(data)=>{

        console.log('card clicked!')
        this.setState({reload : !this.state.reload})
    }

   

    render(){
        return(
            <main className ={classes.Main}>
                 <div className={classes.mainDiv}>
                
             
                <Cards onCardsClick={this.onCardsClick} obj={this.state.obj}></Cards>
                <aside className={classes.aside}>
                    <div className={classes.createNew}>
                    <h1>Start Your Own Discussion</h1>
                    <input className={classes.input} placeholder="Enter Title" onChange={this.handleTitleChange}></input>
                    <textarea className={classes.input} placeholder="Enter Description" onChange={this.handleDescChange}></textarea>
                    <button className={classes.createBtn} onClick={this.onCreateBtnClick}>Create</button>
                    </div>
                </aside>
                </div>
               
                
            </main>
            )
    }
}

export default MainPanel;