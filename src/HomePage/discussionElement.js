
import classes from './discussionElement.module.css'
import { Link} from "react-router-dom";
const discussionElement=(props)=>{

   
    const yes =   props.discussions.map((data,index)=>{
        console.log(data);
                    
        return(
            <Link style={{ textDecoration: 'none' }} to={{ 
                pathname : '/discussion' , 
                props : data.id
                }}>
         <div className={classes.Cards}>
         <p className ={classes.title}>
               {index +1})   {data.title}  , {data.desc} 
        </p>
           {/* <p className ={classes.desc}> {data.desc} </p> */}
       </div></Link>
        )
     
 })
    const no = ()=>{
  
            return(
                <div className={classes.Cards}>
                      <p className ={classes.title}>
                            The User Has Not Started Any Discussion 
                     </p>
                      
                </div>
            )
        
    }
    return(
        <section  className={classes.section}>
           
        <div className = {classes.Container}>
            <div>
            <div   style={ {backgroundColor : '#ecf0f1'}} className = {classes.Cards} >
                <h1 className ={classes.first}>
                      DISCUSSIONS CREATED BY THE USER
                </h1>
               
            </div>
            {props.Length ? yes : no()}
    
        </div>
            </div>
        
        </section>
        
    )
}
export default discussionElement;