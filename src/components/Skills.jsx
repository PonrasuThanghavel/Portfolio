import React from 'react';
import '../assets/css/Skills.css';

const skills = {
  Languages: ['Python', 'Java', 'JavaScript', 'C/CPP'],
  Frontend: ['React.js', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Express.js', 'Spring Boot'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
//   DevOps: ['Docker', 'Kubernetes', 'CI/CD'],
  Tools: ['ElasticSearch', 'Logstash', 'Kibana', 'Git', 'Linux'],
  AI_ML: ['Machine Learning', 'Deep Learning', 'Data Engineering'],
};

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], idx) => (
          <div className="skills-category" key={idx}>
            <h3>{category}</h3>
            <ul>
              {items.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
