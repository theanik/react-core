import React, { Component } from 'react'

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            name : '',
            address : ''
        }

        this.nameChanageHandel = this.nameChanageHandel.bind(this)
        this.addressChanageHandel = this.addressChanageHandel.bind(this)
        this.submitHandeler = this.submitHandeler.bind(this)
    }

    nameChanageHandel(e){
        this.setState({
            name : e.target.value
        })
    }

    addressChanageHandel(e){
        this.setState({
            address : e.target.value
        })
    }

    submitHandeler(e){
        e.preventDefault()

        alert(`Name : ${this.state.name} Address : ${this.state.address}`)

        this.setState({
            name : '',
            address : ''
        })

    }


    render() {
        return (
            <div>
                <form onSubmit={this.submitHandeler}>
                    <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.nameChanageHandel} />
                    </label>

                    <label>
                    Address:
                    <textarea type="text" value={this.state.address} onChange={this.addressChanageHandel} ></textarea>
                    </label>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form