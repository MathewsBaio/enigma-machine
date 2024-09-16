import { useState } from "react";
import "./style/index.css";
import Machine from "./components/Machine";
import OutputMessage from "./components/OutputMessage";
import Menu from "./components/base/Menu";
import Config from "./components/Config";

function App() {
  const [message, setMessage] = useState("");
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [configShowing, setConfigShowing] = useState(false);
  const [btnSelection, setBtnSelection] = useState({
    msg: "selected",
    config: "",
  });

  const handleMsg = () => {
    if (configShowing) {
      setConfigShowing(false);
      setBtnSelection({
        msg: "selected",
        config: "",
      });
    }
  };

  const handleConfig = () => {
    if (!configShowing) {
      setConfigShowing(true);
      setBtnSelection({
        msg: "",
        config: "selected",
      });
    }
  };
  return (
    <div className="container">
      <div className="machine">
        <Machine message={message} setMessage={setMessage} />
      </div>
      <div className="side-container">
        <Menu
          handleConfig={handleConfig}
          handleMsg={handleMsg}
          handleBtn={btnSelection}
        />
        {configShowing ? (
          <div className="config">
            <Config message={message} setMessage={setMessage} />
          </div>
        ) : (
          <div className="message">
            <OutputMessage message={message} setMessage={setMessage} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
