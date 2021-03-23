import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "pjbtc"
        }
        console.log("LifeCycleA constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null

    }
    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name: 'btclab'
        })
    }
    render() {
        console.log('LifeCycleA render')
        return(<div>
            <div>LifeCycleA</div>
            <button onClick={this.changeState}>change state</button>
            <LifecycleB/>

        </div>

        ) 
    }
}

export default LifecycleA
