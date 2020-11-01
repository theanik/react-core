import React, { Component } from 'react'
import {UserConsumer} from './UserContext'

export default class Comp3 extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (val) => {
                            return (
                            <h1>Hello , {val}  Comp3</h1>
                            )
                        }
                        
                    }
                </UserConsumer>
            </div>
        )
    }
}
