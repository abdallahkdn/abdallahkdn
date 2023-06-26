import React, { Component } from "react"; 
import ChatGPT from "chat-gpt";
class chat-gpt-plugin extends Component {
  state = {
    question: "",
    response: "",
  };

  handleChange = (event) => {
    this.setState({
      question: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const response = ChatGPT.generateResponse(this.state.question);
    this.setState({
      response,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter your question"
          value={this.state.question}
          onChange={this.handleChange}
        />
        <input type="submit" value="Submit" />
        <p>{this.state.response}</p>
      </form>
    );
  }
}

export default chat-gpt-plugin;
