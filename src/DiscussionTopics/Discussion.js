import react, { Component } from 'react';
 import classes from './Discussion.module.css'
import axios from 'axios'

class Discussion extends Component{

    state = {
        title : '',
        desc :'',
        commentarr : [],
        reload: false,
        render :false
    }
    titlename = '';
    comments = [];

     componentDidMount=()=>{

        if(localStorage.getItem('currentUser') === null){
            this.setState({render:false})
        }
        else{
            this.setState({render:true})
        }
            console.log(this.props.location.props);
            axios.get('https://converse-node-api.herokuapp.com/topics/' + this.props.location.props)
        .then(response=>{
            console.log(response.data);
            this.titlename = response.data.title;
            this.setState({title : response.data.title,
                desc : response.data.desc})
            
        })
        .catch(err=>{
            console.log(err)
        })
        .then(()=>{
            axios.get('https://converse-node-api.herokuapp.com/discussion/getComments', {
            params: {
              title: this.titlename
            }
          })
        .then(response =>{
            //console.log(response.data[0].username)
            this.setState({
                commentarr : response.data.map((data,index)=>{
                    return {username : data.username , comment : data.comment}
                })
            })
           // console.log(this.state.commentarr);
        })
        .catch(err=>{
            console.log(err)
        })
        })
        
         
    
     }

     onPostButtonClick=()=>{
            var obj = document.getElementById("textarea");
            var comment = obj.value;
            if(obj.value !== "")
            {
                var post = {
                    title : this.state.title,
                    username : localStorage.getItem("currentUser"),
                    comment : obj.value
                }
                console.log(comment);
                axios.post('https://converse-node-api.herokuapp.com/discussion/addComment',post)
                .then(response =>{
                    var newcommentobj = {username : post.username , comment : post.comment}
                const arr = this.state.commentarr;
                arr.push(newcommentobj);
                obj.value = "";
                this.setState({reload : !this.state.reload , commentarr : arr});
                })
                .catch(error=> console.log(error))
    
                
            }
            

          
     }
    

    render(){
        return(
            <div className={classes.container}>
                {this.state.render?  
                <section className={classes.section}>
                    <div className={classes.card}>
                        <div className={classes.title}>
                             <h1>{this.state.title}</h1>
                             <p>{this.state.desc}</p>
                        </div>
                        <br></br>
                       
                        {this.state.commentarr.map((data,index)=>{
                      
        //if(index!=0){
            //console.log(Data[index].username);
                         return(
                             <div className={classes.commentCards}>
                             <p className={classes.username}>{data.username} :  
                             </p>
                             <p   className={classes.comment}>{data.comment} </p>
                             </div>
                                )
       // }
                                                                })}
                       
                        <div >
                            <textarea id ="textarea" className={classes.textarea} placeholder="Share Your Views Here !"></textarea>
                            <button className={classes.submitBtn} onClick={this.onPostButtonClick}>POST</button>
                        </div>
                    </div>
                </section> 
                : 
                <div>xoxo</div>
                }
               
               
                
            </div>
         )
    }
}

export default Discussion;