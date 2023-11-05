import React, { useState, useEffect } from "react";
import "./toast.styles.scss"; // Create a CSS file for styling
import beep from "../../../assets/beep.mp3";
const Toast = ({ color, message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Display the toast on mount

    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, []);

  return visible ? (
    <div className={`toast ${color} show`}>
      <audio src={beep} controls autoPlay style={{ display: "none" }} />
      <div className="toast-content">
        <div className="toast-message">{message}</div>
        <div className="progress">
          <div className="progress-value"></div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Toast;
