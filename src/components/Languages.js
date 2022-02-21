import React, { Component } from "react";
import $ from "jquery";

class Languages extends Component {
    render() {
      return (
        <div className="lang-container">
          <div
            onClick={() =>
              this.props.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
          >
            <span
              className="iconify language-icon lang-icon"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
            ></span>
          </div>
          <div
            onClick={() =>
              this.props.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
          >
            <span
              className="iconify language-icon lang-icon"
              data-icon="twemoji-flag-for-flag-spain"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
            ></span>
          </div>
        </div>
      );
    }
  }
  
  export default Languages;