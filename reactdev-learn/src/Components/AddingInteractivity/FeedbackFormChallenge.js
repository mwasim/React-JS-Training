import { useState } from "react";

export default function FeedbackFormChallenge() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("");

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    alert("Message sent!");
    setIsSent(true);
  }

  if (isSent) {
    return <h1>Thank you!</h1>;
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <textarea
        placeholder="Type your message here..."
        onChange={handleMessageChange}
        value={message}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  );
}
