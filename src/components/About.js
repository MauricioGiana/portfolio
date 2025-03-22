import React, { Component } from "react";
import DownloadCV from "./DownloadCV";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
      var downloadTitle = this.props.resumeBasicInfo.download_cv;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 className="section-title">
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto" style={{ marginBottom: "5%" }}>
            <img
              className="my-photo"
              src={profilepic}
              alt="Avatar placeholder"
            />
            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about?.split("\n").map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="download-cv-box">
                  <DownloadCV title={downloadTitle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
