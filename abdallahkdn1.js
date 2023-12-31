
import { html, css, LitElement } from 'lit';
import { LitElementWithProps } from 'lit-element-with-props';

class ChatGPTPlugin extends LitElementWithProps(LitElement) {
  

  render() {
    return html`
      <div id="chat-container">
        <div id="messages">
          <!-- Display chat messages here -->
        </div>
        <input id="input" type="text" placeholder="Type a message..." />
        <button @click="${this.sendMessage}">Send</button>
      </div>
    `;
  }

  sendMessage() {
    const input = this.shadowRoot.getElementById('input');
    const message = input.value.trim();

    if (message !== '') {
      const messagesContainer = this.shadowRoot.getElementById('messages');
      const userMessage = document.createElement('div');
      userMessage.classList.add('message', 'user');
      userMessage.textContent = message;
      messagesContainer.appendChild(userMessage);


      const apiUrl = 'https://chat.openai.com/?model=text-davinci-002-render-sha'; 
      const requestData = {
        message: message
      };

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      })
        .then(response => response.json())
        .then(data => {
          const botMessage = document.createElement('div');
          botMessage.classList.add('message', 'bot');
          botMessage.textContent = data.response;
          messagesContainer.appendChild(botMessage);
        })
        .catch(error => {
          console.error('Error:', error);
        });

      // Clear input field
      input.value = '';
    }
  }
}

customElements.define('chat-gpt-plugin', ChatGPTPlugin);
