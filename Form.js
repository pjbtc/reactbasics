import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username:'' , // state object has property called username
            comments: '', // state object has property called comments
            topic: ''   // state object has property called topic
             
        }
    }
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        }

        )
    }
    handleCommentChange=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange=event=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit=event=>{
       
            alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
            event.preventDefault()   // prevent the default action of form which erase form text after refesh
       
    }
    
    render() {
        const{username, comments, topic}= this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" 
                    //value={this.state.username}
                     value={username}
                    onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                    //value={this.state.comments}
                     value={comments}
                     onChange= {this.handleCommentChange}> </textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select 
                    //value= {this.state.topic}
                     value= {topic}
                        onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button>Submit</button>

            </form>
            
        )
    }
}

export default Form
