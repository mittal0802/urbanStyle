import "./alert.styles.scss";
import Button from "../button/button.component";
import { Fragment } from "react";
const Alert = ({ message, onClose, alertType }) => {
  const handleOk = () => {
    onClose();
  };

  return (
    <div className="alert-overlay">
      <div className="alert-container">
        {alertType === "error" ? (
          <Fragment>
            <img
              src="https://i.ibb.co/HgzrzKf/3588294.png"
              alt="alert"
              className="alert-icon"
            />
            <div className="alert-title">Oops....!</div>
          </Fragment>
        ) : (
          <Fragment>
            <img
              src="https://i.ibb.co/PYRL1hw/Checkmark-green-tick-isolated-on-transparent-background-PNG.png"
              alt="alert"
              className="alert-icon"
            />
          </Fragment>
        )}
        <div className="alert-message">{message}</div>
        <Button buttonType="alertBox" onClick={handleOk}>
          OK
        </Button>
      </div>
    </div>
  );
};

export default Alert;
