import React, { Component } from 'react'

export class Address extends Component {
    render() {
        return (
            <div>
                <h2> {this.props.place} </h2>
            </div>
        )
    }
}

export default Address
