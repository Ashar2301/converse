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
        window.location.replace('http://localhost:3000')
      }
    
      isAuthenticated() {
       if(localStorage.getItem('currentUser')!==""){
           console.log(true)
           return true;
       }
       else{
           return false;
       }
      }
}
export default new Auth();