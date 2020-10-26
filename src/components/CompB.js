import React, { Component } from 'react'

export default class CompB extends Component {

    constructor(props){
        super(props)

        this.state = {
            newvalue : 0
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            newvalue : props.data * 5
        }
    }

    render() {
        return (
            <div>
                <h2>{this.state.newvalue}</h2>
            </div>
        )
    }
}
