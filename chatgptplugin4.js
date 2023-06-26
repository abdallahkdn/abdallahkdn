import { LitElement, html } from 'lit';

class ChatGPTPlugin extends LitElement {
  static get properties() {
    return {
      chatGPT: {
        type: Object,
        value: null,
      },
    };
  }

  constructor() {
    super();
    this.chatGPT = new ChatGPT();
  }

  render() {
    return html`
      <div id="chat-pgt-plug">
        <input type="text" placeholder="Enter your message here" />
        <button>Send</button>
        <div id="chat-output"></div>
      </div>
    `;
  }

  handleSubmit(event) {
    const message = event.target.value;
    this.chatGPT.generate(message).then((response) => {
      document.getElementById('chat-output').innerHTML = response;
    });
  }
}

customElements.define('chat-pgt-plugin', ChatGPTPlugin);
