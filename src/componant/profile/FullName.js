import React, { Component } from 'react'

export class FullName extends Component {
    render() {
        return (
            <div>
                <h1> Hello {this.props.Name} </h1>
            </div>
        )
    }
}

export default FullName
