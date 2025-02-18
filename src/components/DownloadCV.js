import React, { Component } from "react";
import $ from "jquery";

class DownloadCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    const cvsBox = $("#cvs-box");
    cvsBox.hide();

    window.addEventListener("resize", () => {
      this.setState({
        windowWidth: window.innerWidth,
      });
    });
  }

  toggleShow = () => {
    const cvsBox = $("#cvs-box");
    $(document).ready(() => {
      if (this.state.windowWidth > 500) {
        cvsBox.slideToggle(500);
      } else {
        cvsBox.show();
        if (cvsBox.hasClass("cvs-box-slidedown")) {
          cvsBox.removeClass("cvs-box-slidedown");
          cvsBox.addClass("cvs-box-slideup");
        } else if (cvsBox.hasClass("cvs-box-slideup")) {
          cvsBox.removeClass("cvs-box-slideup");
          cvsBox.addClass("cvs-box-slidedown");
          setTimeout(() => {
            cvsBox.hide();
          }, 485);
        } else {
          cvsBox.addClass("cvs-box-slideup");
        }
      }
    });
  };

  render() {
    return (
      <div id="download-cv">
        <div className="download-btn slide-cvs" onClick={this.toggleShow}>
          {this.props.title}
        </div>
        <div className="cvs-window">
          <div id="cvs-box">
            <a
              href="https://drive.google.com/file/d/1MNg8kbUt1gLZl9FC-eA8c0mTntKOrK1j/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-cvs"
              onClick={this.toggleShow}
            >
              <span
                className="iconify cv-lang-icon"
                data-icon="twemoji-flag-for-flag-united-kingdom"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
              English
            </a>
            <a
              href="https://drive.google.com/file/d/15FxRLRxjIFc9cX7EME_Yk9xxsSyyqb3t/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="slide-cvs"
              onClick={this.toggleShow}
            >
              <span
                className="iconify cv-lang-icon"
                data-icon="twemoji-flag-for-flag-argentina"
                data-inline="false"
                id={window.$primaryLanguageIconId}
              ></span>
              Español
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default DownloadCV;
