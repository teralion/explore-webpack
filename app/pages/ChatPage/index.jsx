import React, { Component, Fragment } from 'react';

export default class ChatPage extends Component {
  state = {
    messages: [],
    value: ''
  }

  componentDidMount() {
    this.subscribe();
  }

  pushMessage = message => {
    this.setState(prevState => ({
      messages: prevState.messages.concat([message])
    }));
  }

  clearMessages = () => {
    this.setState({
      messages: []
    });
  }

  handleInput = event => {
    const {value} = event.target;

    this.setState({value});
  }

  clearInput = () => {
    this.setState({value: ''});
  }

  publish = async event => {
    const { value } = event.target.message;

    event.preventDefault();

    const publishRequest = new Request(
      'http://localhost:8000/api/publish', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          message: value
        })
      }
    );

    await fetch(publishRequest);

    this.clearInput();
  }

  subscribe = async () => {
    const subscribeRequest = new Request(
      `http://localhost:8000/api/subscribe?rnd=${Math.random()}`,
    );

    const response = await fetch(subscribeRequest);
    const { message } = await response.json();

    this.pushMessage(message);
    this.subscribe();
  }

  renderMessages = () => {
    const { messages } = this.state;

    return messages.map((message, i) => (
      <div key={`message-${i}`}>{ message }</div>
    ));
  }

  render() {
    return (
      <Fragment>
        { this.renderMessages() }
        <form onSubmit={ this.publish }>
          <input 
            type="text" 
            name="message" 
            onChange={ this.handleInput }
            value={ this.state.value }
          />
          <input type="submit" value="Отправить" />
        </form>
      </Fragment>
    );
  }
};
