import { useState } from "react";
import "./style/index.css";
import Machine from "./components/Machine";
import OutputMessage from "./components/OutputMessage";

function App() {
  const [message, setMessage] = useState("");
  return (
    <div className="container">
      <div className="machine">
        <Machine message={message} setMessage={setMessage} />
      </div>
      <div className="message">
        <OutputMessage message={message} setMessage={setMessage} />
      </div>
    </div>
  );
}

export default App;
