import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

export default class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <span><strong>{this.props.author}</strong>: {this.props.text}</span>
            </div>
        )
    }
}