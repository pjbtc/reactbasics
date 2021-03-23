import React from 'react'

function NameList() {
    const names=['Bruce', 'Clark', 'Diana', 'Clark']
    const nameList= names.map((name, index)=><h1 key={index}> {index}{name}</h1> )
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
