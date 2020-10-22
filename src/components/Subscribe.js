import React from 'react'

class Subscribe extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            message : "Please Subscribe",
            message2 : "message 2"
        }
    }


    subscribe(){
        this.setState({
            message : this.state.message2
        })
    }



    render(){
        return(
            <div>
                <h2> {this.state.message}</h2>
                <button onClick={ () => this.subscribe()} >Subscribe</button>
            </div>
            
        )
    }
}

export default Subscribe