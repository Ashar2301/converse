
import axios from 'axios';
import { Component } from 'react';
import Auth from './Auth'
import classes from './userPage.module.css'
import DiscussionElement from './discussionElement'
import CommentsElement from './commentsElement'
import converse from '../DiscussionTopics/bird.svg'
import { withRouter } from 'react-router-dom';
class userPage extends Component{

    state={
        name:'',
        comments:[],
        discussions:[]
    }
    componentDidMount(){
        axios.get('http://localhost:5000/User',{
            params:{
                username : localStorage.getItem("currentUser")
            }
        })
        .then(response1=> {
            // console.log(response1.data[0].name);
            axios.get('http://localhost:5000/UserComments',{
                params:{
                    username:localStorage.getItem("currentUser")
                }
            })
            .then(response2=>{
                // console.log(response2.data)
                axios.get('http://localhost:5000/UserDiscussions',{
                    params:{
                        username:localStorage.getItem("currentUser")
                    }
                })
                .then(response3=>{
                    // console.log(response1.data[0].name);
                    // console.log(response2.data)
                    // console.log(response3.data)
                    const discussions = response3.data.map((data,index)=>{
                        return {id:data._id,title : data.title , desc : data.desc}
                    })
                   const comments = response2.data.map((data,index)=>{
                       return {title :data.title , comment : data.comment , username : data.username}
                   })

                   this.setState({name : response1.data[0].name , comments : comments , discussions : discussions})
                })
            })
        })

    }
    onLogOutClick=()=>{
       
        Auth.logout();
        const { history } = this.props;
                if(history) history.push('/');
                window.location.reload();
    }
   

    render(){
        const discussionLength = this.state.discussions.length > 0 ? true : false;
        const commentsLength = this.state.comments.length > 0 ? true : false;
        console.log(discussionLength)
        return(
            <main className={classes.main}>
                <div className={classes.desktop}>
                <section className={classes.section}>
                   <DiscussionElement Length={discussionLength} discussions={this.state.discussions}></DiscussionElement>
                    <CommentsElement Length={commentsLength} comments={this.state.comments}></CommentsElement>
                </section>
                <aside className={classes.aside}>
                    <div className={classes.card}>
                                               
                        <img className={classes.logo} src={converse} />
                        <p>{localStorage.getItem("currentUser")}</p>
                        <div className={classes.info}>
                            <p>Name : {this.state.name}</p>
                            <p>Comments Made : {this.state.comments.length}</p>
                            <p>Discussions Created : {this.state.discussions.length}</p>
                            
                        </div>
                    </div>
                    <div>
                            <button className={classes.logOutBtn} onClick={this.onLogOutClick}>
                                LOGOUT
                            </button>
                        </div>
                </aside>
                </div>
                <div className={classes.mobile} >
                <aside className={classes.aside}>
                    <div className={classes.card}>
                                               
                        <img className={classes.logo} style={{marginLeft:'40%'}} src={converse} />
                        <p>{localStorage.getItem("currentUser")}</p>
                        <div className={classes.info}>
                            <p>Name : {this.state.name}</p>
                            <p>Comments Made : {this.state.comments.length}</p>
                            <p>Discussions Created : {this.state.discussions.length}</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </aside>

                <div>
                            <button className={classes.logOutBtn} onClick={this.onLogOutClick}>
                                LOGOUT
                            </button>
                        </div>
                <section className={classes.section}>
                   <DiscussionElement Length={discussionLength} discussions={this.state.discussions}></DiscussionElement>
                    <CommentsElement Length={commentsLength} comments={this.state.comments}></CommentsElement>
                </section>


                </div>
            </main>
        )
    }

}

export default withRouter(userPage);