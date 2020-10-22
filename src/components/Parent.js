import React, { Component } from 'react'
import Child from './Child'
class Parent extends Component {

    constructor(props){
        super(props)

        this.sayHi = this.sayHi.bind(this)
    }


    sayHi(arg){
        alert(`Hi ${arg}`)
    }

    render() {
        return (
            <div>
                <Child greetMethod={this.sayHi} />
            </div>
        )
    }
}

export default Parent
