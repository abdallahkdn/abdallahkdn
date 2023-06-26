import ChatGPT from "chat-gpt";

const chat_gpt_plugin = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const response = ChatGPT.generateResponse(question);
    setResponse(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
      <p>{response}</p>
    </form>
  );
};

export default chat-gpt-plugin;
