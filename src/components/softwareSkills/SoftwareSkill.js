import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";


export default function SoftwareSkill() {
    return (
        <div className="software-skills-main-div">
            <ul className="skills-list">
                {skillsSection.softwareSkills.map((skills, i) => (
                    <li key={i} className="skill-item">
                        
                        <img
                            crossOrigin={"anonymous"}
                            src={skills.imageScr}
                            alt={skills.skillName}
                            className="skill-image"
                        />
                        <p>{skills.skillName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
