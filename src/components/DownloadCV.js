import React, { Component } from "react";
import $ from "jquery";

class DownloadCV extends Component {

    componentDidMount() {
        $("#cvs-box").hide();

        $(".slide-cvs").click(function () {
            $("#cvs-box").slideToggle(500);
        });
    }

    render() {
        return (
            <div id="download-cv">
                <div className="download-btn slide-cvs" onClick={() => toggleShow()}>{this.props.title}</div>
                <div id="cvs-box">
                    <a
                        href="https://drive.google.com/file/d/1xC__BR-q2ExZLVHHUwicO2uWKkFjGxyN/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => toggleShow()}
                        className="slide-cvs"
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
                        href="https://drive.google.com/file/d/1m1M8fJFRYGKOehk7bV3zT5_-0kYrB8EE/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => toggleShow()}
                        className="slide-cvs"
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
        );
    }
}

function toggleShow() {

}

export default DownloadCV;