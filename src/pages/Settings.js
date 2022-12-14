import React from "react";
import "../styles/Settings.css";
import ToggleButton from "../components/buttons/ToggleButton";
import RangeSlider from "../components/RangeSlider";

// eslint-disable-next-line react/prop-types
const Settings = ({ setCloseSettings }) => (
  <div className="settings">
    <div className="close">
      <i className="fa fa-times" onClick={() => setCloseSettings(false)}></i>
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
          <ToggleButton />
        </div>
        <div className="hint">
          <p className="hintMess">
            Select favorite flower sighting radius for <br /> notifications
          </p>
        </div>
        <RangeSlider />
        <div className="saveBtn">
          <button>Save settings</button>
        </div>
      </div>
    </div>
  </div>
);

export default Settings;
