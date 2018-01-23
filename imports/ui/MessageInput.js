import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

class MessageInput extends Component {
    constructor() {
        super()
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the react ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        // Insert the text, author and the time, so we can order
        Messages.insert({
            text,
            author,
            createdAt: new Date(),
        });
        
        // Clear the form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return (
            <div className="container">
                <form className="" onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                        type="text"
                        ref="textInput"
                        placeholder="Digite sua mensagem aqui"
                        maxLength="140"/>
                    <button id="send-btn" className="">Enviar</button>
                </form>
            </div>
        )
    }
}