import $ from "jquery";
import bootstrap from "bootstrap";
import React from "react";
import SwitchTheme from "./SwitchTheme";
import Languages from "./Languages";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: null,
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function () {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight,
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5,
            },
            750,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="nav-container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">
                  {this.props.resumeData ? this.props.resumeData.home : "Home"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">
                  {this.props.resumeData
                    ? this.props.resumeData.about
                    : "About"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#skills">
                  {this.props.resumeData
                    ? this.props.resumeData.skills
                    : "Skills"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#resume">
                  {this.props.resumeData
                    ? this.props.resumeData.experience
                    : "Experience"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#portfolio">
                  {this.props.resumeData
                    ? this.props.resumeData.projects
                    : "Projects"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">
                  {this.props.resumeData
                    ? this.props.resumeData.contact
                    : "Contact"}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="switches-container">
          <Languages applyPickedLanguage={this.props.applyPickedLanguage} />
          <SwitchTheme />
        </div>
      </nav>
    );
  }
}

export default Navbar;
