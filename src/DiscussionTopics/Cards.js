import react from 'react';
import classes from './Cards.module.css'
import Data from '../Data.json'
import { Link} from "react-router-dom";

//import { response } from 'express';

const Cards = (props) =>{    
    
    const titles = props.obj.map((data,index)=>{
       
        return(
            <Link style={{ textDecoration: 'none' }} to={{ 
                pathname : '/discussion' , 
                props : data._id
                }}>
            <div  onClick={props.onCardsClick} key = {data._id} className = {classes.Cards}>
                <p className ={classes.title}>
                   {index +1})   {data.title}   
                </p>
                <p className ={classes.desc}> {data.desc} </p>
            </div>
            </Link>
        )
    })

    return(
        <section  className={classes.section}>
           
        <div className = {classes.Container}>
            <div>
            <div   style={ {backgroundColor : '#ecf0f1'}} className = {classes.Cards} >
                <h1 className ={classes.first}>
                      JOIN A DISCUSSION
                </h1>
               
            </div>
        {titles}
    
        </div>
            </div>
        
        </section>
    )
}

export default Cards;