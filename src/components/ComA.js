import React, { Component } from 'react'
import CompB from './CompB'
class ComA extends Component {

    constructor(props){
        super(props)

        this.state = {
            value : 0
        }

        this.increment = this.increment.bind(this)
    }

    increment(){
        this.setState({
            value : this.state.value + 1
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.increment} >Inc</button>

                <CompB data={this.state.value} />
            </div>
        )
    }
}

export default ComA
