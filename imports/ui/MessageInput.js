import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'

import { Messages } from '../api/messages'

export default class MessageInput extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    state = { text: ''}
    state = { author: '' }

    handleChange(event) {
        this.setState({ text: event.target.value} )
        this.setState({ author: 'José Teste'})
    }

    handleSubmit(event) {
        event.preventDefault();

        const text = event.target.value.trim()

        Messages.insert({
            text,
            author,
            createdAt: new Date(),
        });
        
        console.log(text)
        console.log(author)

        this.setState({ text: '' })
    }

    render() {
        return (
            <div className="container">
                <form className="" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        ref="textInput"
                        placeholder="Digite sua mensagem aqui"
                        maxLength="140"
                        value={this.state.text}
                        onChange={this.handleChange}/>
                    <button id="send-btn" className="">Enviar</button>
                </form>
            </div>
        )
    }
}