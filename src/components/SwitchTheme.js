import React, { Component } from "react";
import Switch from "react-switch";

class SwitchTheme extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    return (
      <div className="switch-container">
        <Switch
          checked={this.state.checked}
          onChange={this.onThemeSwitchChange}
          offColor="#858ae3"
          onColor="#0c1821"
          className="react-switch mx-auto"
          width={90}
          height={40}
          uncheckedIcon={
            <span
              className="iconify"
              data-icon="emojione-monotone:crescent-moon"
              data-inline="false"
              style={{
                display: "block",
                height: "100%",
                fontSize: 25,
                textAlign: "end",
                marginLeft: "20px",
                color: "#353239",
              }}
            ></span>
          }
          checkedIcon={
            <span
              className="iconify"
              data-icon="emojione-v1:sun"
              data-inline="false"
              style={{
                display: "block",
                height: "100%",
                fontSize: 25,
                textAlign: "end",
                marginLeft: "10px",
                color: "#353239",
              }}
            ></span>
          }
          id="icon-switch"
        />
      </div>
    );
  }
}

export default SwitchTheme;