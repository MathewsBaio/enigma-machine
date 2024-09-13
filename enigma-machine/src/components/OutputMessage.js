import { useState } from "react";
import "../style/index.css";
export default function OutputMessage({ message, setMessage }) {
  return (
    <div className="message">
      <textarea value={message} readOnly />
    </div>
  );
}
