import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

class Skills extends Component {
  getSkillLevelLabel(skillLevel) {
    return this.props.skillsData?.experienceLevel?.[skillLevel];
  }

  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

      var skills = Object.keys(this.props.sharedSkills).map(
        (categoryKey, index) => {
          const categoryName = this.props.skillsData.categories[categoryKey];

          return (
            <React.Fragment key={categoryKey}>
              <div className="subheading mb-3">
                <span
                  className="skill-category"
                  style={{
                    marginTop: index > 0 ? "30px" : "0",
                  }}
                >
                  {categoryName}
                </span>
                <div className="skills-divider"></div>
                <ul className="list-inline mx-auto dev-icons skill-icons">
                  {this.props.sharedSkills[categoryKey].map((skill, i) => {
                    const skillLevelLabel = this.getSkillLevelLabel(
                      skill.level
                    );

                    return (
                      <li className="list-inline-item mx-3" key={i}>
                        <span>
                          <div
                            className="text-center skills-tile"
                            data-tip={skillLevelLabel}
                            data-for={`skill-tooltip-${i}`}
                          >
                            <dic
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                              }}
                            >
                              <div className="skill-icon-title">
                                <i
                                  className={skill.class}
                                  style={{ fontSize: "2rem" }}
                                ></i>
                                <span
                                  style={{ display: "flex", fontSize: "1rem" }}
                                >
                                  {skill.name}
                                </span>
                                {skillLevelLabel && (
                                  <ReactTooltip
                                    id={`skill-tooltip-${i}`}
                                    effect="solid"
                                    place="top"
                                  />
                                )}
                              </div>
                            </dic>
                            <div
                              className="skill-progress-container"
                              style={{
                                display: skill.score ? "block" : "none",
                              }}
                            >
                              <div
                                className="skill-progress"
                                style={{
                                  width: `${skill.score}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </React.Fragment>
          );
        }
      );
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title">
              <span className="skills-title">{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">{skills}</div>
        </div>
      </section>
    );
  }
}

export default Skills;
