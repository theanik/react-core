import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.greetMethod("anik")}>Say Hi</button>
        </div>
    )
}

export default Child
