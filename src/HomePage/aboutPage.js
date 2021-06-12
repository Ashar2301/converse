import classes from './aboutPage.module.css'
import {IoLogoInstagram} from 'react-icons/io'
import {IoLogoGithub} from 'react-icons/io'
import {IoIosMail} from 'react-icons/io'

const aboutPage =()=>{
    return(
        <main className={classes.main}>
      
               
                <div className={classes.meCard}>
                <div className={classes.dp}></div>
                <h1 style={{marginBottom:"2vh"}}>Ashar Rashid</h1>
                <div className={classes.social}>
                <div style={{display:"flex"}}>
                    {/* <p className={classes.contact}>Instagram</p> */}
                    <a href="https://www.instagram.com/datguyusher/" target="_blank"><IoLogoInstagram className={classes.logo}></IoLogoInstagram> </a>                   
                </div>
                <div style={{display:"flex"}}>
                    {/* <p className={classes.contact}>GitHub</p> */}
                    <a href="https://github.com/Ashar2301" target="_blank"><IoLogoGithub className={classes.logo}></IoLogoGithub></a>
                </div>
                <div style={{display:"flex"}}>
                    {/* <p className={classes.contact}>Email Address</p> */}
                    <a href="mailto:ashar.rashid2301@gmail.com" target="_blank"><IoIosMail className={classes.logo}></IoIosMail></a>
                </div>
            </div>
                <p>
                This website is a side-project I  did during the pandemic lockdown. The technologies that I've used are the JavaScript Framework React and MongoDB Database
                </p>
                </div>
          
          
          
           
           
        </main>
    )
}

export default aboutPage;