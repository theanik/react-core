import React from 'react'

class Welcome extends React.Component{
    render(){
        return(
            <h2> {this.props.greet} {this.props.name}</h2>
        )
    }
}

export default Welcome