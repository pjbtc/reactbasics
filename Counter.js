import React,{Component} from 'react';


class Counter extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            count:0
             
        }
    }
    increment(){
        //this.setState({
       // count: this.state.count+1   // object that set state value
        
       // },
       // ()=>{
         //   console.log('callback value', this.state.count)  // arrow function that logs updated this.state.count value
       // }
        
        //)

        this.setState((prevState)=> ({
            count: prevState.count+1

        }))
        console.log(this.state.count)
    }

    incrementFive() { //method  that give increment five times
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    

    render(){
        return(
            <div>
                <div>count- {this.state.count}</div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>

        )
    }
}
export default Counter;