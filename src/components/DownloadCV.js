import React, { Component } from "react";

class DownloadCV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow = () => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        return (
            <div id="download-cv">
                <div className="download-btn" onClick={this.toggleShow}>{this.props.title}</div>
                {this.state.show && (
                    <div id="cvs-box">
                        <a
                            href="https://drive.google.com/file/d/1xC__BR-q2ExZLVHHUwicO2uWKkFjGxyN/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
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
                            href="https://drive.google.com/file/d/1m1M8fJFRYGKOehk7bV3zT5_-0kYrB8EE/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
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
                )
                }
            </div>
        );
    }
}

export default DownloadCV;