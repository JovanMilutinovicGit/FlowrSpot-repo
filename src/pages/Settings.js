import react from "react";
import "../styles/Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="close">
        <i className="fa fa-times"></i>
      </div>
      <div className="window">
        <div className="titleSettings">
          <h3>
            Settings <i className="fa fa-cog"></i>
          </h3>
        </div>
      </div>
      <div className="allSettings">
        <div className="allSettings-content">
          <div className="turnNotification">
            <h4>Turn notifications</h4>
          </div>
          <div className="hint">
            <p className="hintMess">
              Select favorite flower sighting radius for <br /> notifications
            </p>
          </div>
          <div className="distanceBar">----------------------------</div>
          <div className="saveBtn">
            <button>Save settings</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
