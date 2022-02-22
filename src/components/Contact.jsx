import React from "react";


class Contact extends React.Component {
  contact = {}
  social = []
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
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div className="box-shadow-full">
                  <div className="row contact-container">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="contact-subtitle">{this.contact.formTitle}</h5>
                      </div>
                      <div>
                        <form
                          action="https://formspree.io/f/xwkyolgg"
                          method="POST"
                          className="contactForm"
                        >
                          <div id="sendmessage">
                            {this.contact.success}
                          </div>
                          <div id="errormessage">{this.contact.error}</div>
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder={this.contact.labels && this.contact.labels[0]}
                                  data-rule="minlen:4"
                                  data-msg={this.contact.labels && this.contact.labels[1]}
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder={this.contact.labels && this.contact?.labels[2]}
                                  data-rule="email"
                                  data-msg="Please enter a valid email"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder={this.contact.labels && this.contact?.labels[3]}
                                  data-rule="minlen:4"
                                  data-msg="Please enter at least 8 chars of subject"
                                />
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  data-rule="required"
                                  data-msg="Please write something for us"
                                  placeholder={this.contact.labels && this.contact?.labels[4]}
                                ></textarea>
                                <div className="validation"></div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                {this.contact.submit}
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="contact-subtitle">{this.contact.title}</h5>
                      </div>
                      <div className="more-info">
                        <p className="contact-p">
                          {this.contact.description}
                          <br />
                          <br />
                          {this.contact.description2}
                        </p>
                      </div>
                      <div className="socials">
                        <ul>
                          {
                            this.social.map(item => (
                              <li key={item.name}>
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <span className="ico-circle">
                                    <i className={item.class} style={{ height: "100%", width: "100%" }}></i>
                                  </span>
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
