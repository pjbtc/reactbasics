import React, { Component } from 'react'

 class UserGreeting extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             isLoggedIn :false
              
         }
     }
     
    render() {
        return this.state.isLoggedIn && <div>welcome pjbh</div>
        // ternary operator 
        // return(
        //     this.state.isLoggedIn ?(
        //     <div>Welcome pjbtc</div> 
        //     ):(
        //     <div>Welcome Guest</div>
        //     )
        // )
        // let message
        // if (this.state.isLoggedIn){
        //     message=<div>Welcome pjbtc</div>
        // }
        // else{
        //     message=<div> Welcome Guest</div>
        // }
        // return<div>{message}</div>
        //return (
            //<div>
            //<div> Welcome pjbtc</div>
               
            //<div> Welcome Guest</div>
            //</div>
        //)
    }
}
export default UserGreeting
