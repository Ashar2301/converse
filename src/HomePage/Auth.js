
//import { useHistory } from 'react-router'
class Auth{

    constructor() {
        this.authenticated = false;
      }
    
      login() {
        this.authenticated = true;
      
      }
    
      logout() {
        this.authenticated = false;
        localStorage.setItem('currentUser',"")
        
      }
    
      isAuthenticated() {
       if(localStorage.getItem('currentUser')!==""){
           return true;
       }
       else{
           return false;
       }
      }
}
export default new Auth();