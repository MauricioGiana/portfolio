import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <span>
          Copyright &copy;{" "}
          {this.props.sharedBasicInfo
            ? this.props.sharedBasicInfo.name
            : "???"}
        </span>
      </footer>
    );
  }
}

export default Footer;
