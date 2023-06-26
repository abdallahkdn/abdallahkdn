import { html, css, LitElement } from 'lit';

class ChatGPTPlugin extends LitElement {
  static styles = css`
    /* Add your custom styles here */
  `;

  static properties = {
    userInput: { type: String },
    response: { type: String },
  };

  constructor() {
    super();
    this.userInput = '';
    this.response = '';
  }

  render() {
    return html`
      <form @submit="${this.handleFormSubmit}">
        <label for="user-input">User Input:</label>
        <input
          type="text"
          id="user-input"
          .value="${this.userInput}"
          @input="${this.handleInputChange}"
        />
        <button type="submit">Submit</button>
      </form>

      <div>${this.response}</div>
    `;
  }

  handleInputChange(event) {
    this.userInput = event.target.value;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.callChatGPTAPI(this.userInput);
  }

  async callChatGPTAPI(userInput) {
    // Make an API request to the Chat GPT endpoint
    // and pass the user input as a parameter
    // Return the response from the API
    // Replace the API_URL with the actual API endpoint URL
    const API_URL = 'https://api.example.com/chat-gpt';

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({ userInput }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        this.response = data.response;
      } else {
        console.error('Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

customElements.define('chat-gpt-plugin', ChatGPTPlugin);
