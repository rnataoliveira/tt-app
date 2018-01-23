import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

export default class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container">
                <span><strong>{this.props.message.author}</strong>: {this.props.message.text}</span>
            </div>
        )
    }
}