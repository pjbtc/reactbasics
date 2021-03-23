import React from 'react'

function ChildComponent(props) { // props as parameter
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button>*/}
            {/* greetHandler method is passed to ChildComponent as props from ParentComponent*/ } 
            <button onClick={()=> props.greetHandler('child')}>Greet Parent</button>

        </div>
    )
}

export default ChildComponent
