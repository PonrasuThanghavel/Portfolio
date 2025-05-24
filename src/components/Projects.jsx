import React, { useState } from 'react';
import '../assets/css/Projects.css';

const projects = [
  {
    name: 'Noctune',
    status: 'In Progress',
    description: 'An AI-powered music app that curates personalized playlists using machine learning algorithms.',
    skills: ['React Native', 'Python', 'Machine Learning'],
    benefits: 'Improved understanding of ML algorithms and React Native development.',
    github: 'https://github.com/yourusername/noctune',
  },
//   {
//     name: 'Strix OS',
//     status: 'Concept Stage (Not started development)',
//     description: 'A developer-focused operating system built on NetBSD, designed for speed, security, and flexibility.',
//     skills: ['NetBSD', 'C', 'Linux System Development'],
//     benefits: 'Learning in OS design, low-level system tools, and kernel tweaking.',
//     github: 'N/A',
//   },
//   {
//     name: 'Talon Search',
//     status: 'Prototype',
//     description: 'A Spotlight-style system search tool for Debian-based Linux distributions.',
//     skills: ['Python', 'Linux', 'System APIs'],
//     benefits: 'Improved system scripting, performance optimization, and Linux internals.',
//     github: 'https://github.com/ponrasuthanghavel/talon-search',
//   },
  {
    name: 'ZapBill',
    status: 'In Progress',
    description: 'A Smart Billing System to manage inventory, expenses, and sales with QR-based billing and multi-factor authentication.',
    skills: ['Node.js', 'MongoDB', 'React', 'QR Code', 'Auth'],
    benefits: 'Learned end-to-end app architecture, security best practices, and dynamic UI design.',
    github: 'https://github.com/ponrasuthanghavel/zapbill',
  },
  {
    name: 'Smart Task Management System',
    status: 'Progress',
    description: 'A task-tracking tool for agile teams with sprint planning and workflow management features.',
    skills: ['React', 'Node.js', 'MongoDB', 'Agile Practices'],
    benefits: 'Contributed to scalable task workflows and dashboard UI for productivity tracking.',
    github: 'https://github.com/ponrasuthanghavel/smart-task-manager',
  }
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`project-card ${expandedIndex === idx ? 'expanded' : ''}`}
            onClick={() => toggleExpand(idx)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => { if (e.key === 'Enter') toggleExpand(idx); }}
          >
            <div className="project-name">
              {project.name}
              <span className={`arrow ${expandedIndex === idx ? 'up' : 'down'}`}></span>
            </div>
            {expandedIndex === idx && (
              <div className="project-details">
                <p><strong>Status:</strong> {project.status}</p>
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>Skills Required:</strong> {project.skills.join(', ')}</p>
                <p><strong>Benefits / What I Gained:</strong> {project.benefits}</p>
                <p><strong>GitHub:</strong> <a href={project.github} target="_blank" rel="noopener noreferrer">{project.github}</a></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
