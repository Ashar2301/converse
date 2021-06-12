//import react from 'react';
import classes from './Header.module.css'
import converse from './converse.png'

const Header = () =>{
    return(
        <header className={classes.header}>
        <nav className={classes.navbar}>
        <img src={converse} className={classes.logo}></img>     

        </nav>
      </header>
    )
}

export default Header;