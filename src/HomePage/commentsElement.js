import classes from "./commentsElement.module.css"

const commentsElement =(props)=>{
    
    const yes= props.comments.map((data,index)=>{
        console.log(data.username)
        return(
            <div className={classes.Cards}>
                <p className={classes.title}> {data.username} Commented On {data.title} :</p>
                <div className={classes.box}>
                <p className={classes.desc}>"{data.comment}"</p>
                </div>
            </div>
        )
    })

    const no=()=>{
        return(
            <div>
                <p className={classes.title}>User Has Not Made Any Comments</p>
            </div>
        )
    }

    return(
        <section  className={classes.section}>
           
        <div className = {classes.Container}>
            <div>
            <div   style={ {backgroundColor : '#ecf0f1'}} className = {classes.Cards} >
                <h1 className ={classes.first}>
                Comments By The User
                </h1>
               
            </div>
            {props.Length ? yes : no()}
    
        </div>
            </div>
        
        </section>
        
    )

}

export default commentsElement;