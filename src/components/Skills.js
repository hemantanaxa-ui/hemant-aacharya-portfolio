import React from 'react';
import './Skills.css';

const skillsData = {
    technical: {
        'JavaScript': 90,
        'React': 85,
        'Node.js': 80,
        'CSS': 75,
        'HTML': 80,
    },
    soft: {
        'Communication': 90,
        'Teamwork': 85,
        'Problem Solving': 80,
        'Adaptability': 75,
        'Creativity': 80,
    }
};

const SkillBar = ({ skill, level }) => {
    return (
        <div className="skill-bar">
            <div className="skill-name">{skill}</div>
            <div className="progress">
                <div className="progress-level" style={{ width: `${level}%` }}></div>
            </div>
            <div className="skill-level">{level}%</div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className="skills-section">
            <h2>Technical Skills</h2>
            {Object.entries(skillsData.technical).map(([skill, level]) => (
                <SkillBar key={skill} skill={skill} level={level} />
            ))}
            <h2>Soft Skills</h2>
            {Object.entries(skillsData.soft).map(([skill, level]) => (
                <SkillBar key={skill} skill={skill} level={level} />
            ))}
        </div>
    );
};

export default Skills;