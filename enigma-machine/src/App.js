import { useState } from "react";
import "./style/index.css";
import Machine from "./components/Machine";
import OutputMessage from "./components/OutputMessage";
import Menu from "./components/base/Menu";

function App() {
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  return (
    <div className="container">
      <div className="machine">
        <Machine message={message} setMessage={setMessage} />
      </div>
      <div className="side-container">
        <Menu />
        <div className="message">
          <OutputMessage message={message} setMessage={setMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;
