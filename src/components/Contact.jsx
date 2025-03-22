import React from "react";
import Socials from "./Socials";

class Contact extends React.Component {
  contact = {};
  social = [];
  sectionName = "";
  render() {
    if (this.props.resumeData.contact && this.props.sharedBasicInfo) {
      this.contact = this.props.resumeData.contact;
      this.social = this.props.sharedBasicInfo.social;
      this.sectionName = this.props.resumeData.basic_info.section_name.contact;
    }
    return (
      <section id="contact">
        <h1 className="section-title contact-title">
          <span>{this.sectionName}</span>
        </h1>
        <div className="contact-container">
          <h5 className="contact-subtitle">{this.contact.title}</h5>
          <div className="more-info">
            <p className="contact-p">
              {this.contact.description}
              <br />
              <br />
              {this.contact.description2}
            </p>
          </div>
          <div className="mx-auto">
            <Socials data={this.social} />
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
