import React from 'react'
// functional component
function SayHello(props){
    return(
    <h2> Hello {props.title} {props.name} . {props.children}</h2>
    
    )
}

export default SayHello