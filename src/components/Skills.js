import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { Icon } from "@iconify/react";

class Skills extends Component {
  getSkillLevelLabel(skillLevel) {
    return this.props.skillsData?.experienceLevel?.[skillLevel];
  }

  getSkillIcon(skill) {
    if (skill.class) {
      return <i className={skill.class + " skill-icon"}></i>;
    }

    if (skill.icon) {
      return <Icon icon={skill.icon} className="skill-icon" />;
    }

    return (
      <img src={`icons/${skill.asset}.svg`} className="skill-icon" alt="</>" />
    );
  }

  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;

      var skills = Object.keys(this.props.sharedSkills).map(
        (categoryKey, index) => {
          const categoryName = this.props.skillsData.categories[categoryKey];

          return (
            <React.Fragment key={categoryKey}>
              <div className="skills-container">
                <span
                  className="skill-category"
                  style={{
                    marginTop: index > 0 ? "20px" : "0",
                  }}
                >
                  {categoryName}
                </span>
                <div className="skills-divider"></div>
                <ul className="skill-icons">
                  {this.props.sharedSkills[categoryKey].map((skill, i) => {
                    const skillLevelLabel = this.getSkillLevelLabel(
                      skill.level
                    );

                    return (
                      <li
                        className="skills-tile"
                        data-tip={skillLevelLabel}
                        data-for={`skill-tooltip-${i}`}
                        key={i}
                      >
                        <div className="skill-icon-title">
                          {this.getSkillIcon(skill)}
                          <span className="skill-name">{skill.name}</span>
                          {skillLevelLabel && (
                            <ReactTooltip
                              id={`skill-tooltip-${i}`}
                              effect="solid"
                              place="top"
                            />
                          )}
                        </div>
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
        <h1 className="section-title">
          <span className="skills-title">{sectionName}</span>
        </h1>
        {skills}
      </section>
    );
  }
}

export default Skills;
