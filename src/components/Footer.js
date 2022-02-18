import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <small>
          Copyright &copy;{" "}
          {this.props.sharedBasicInfo
            ? this.props.sharedBasicInfo.name
            : "???"}
        </small>
      </footer>
    );
  }
}

export default Footer;
