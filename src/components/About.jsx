import React from 'react';
import '../assets/css/About.css';
import profileImage from '../assets/images/profile.jpg';

const calculateDuration = (start, end) => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const diffYears = endDate.getFullYear() - startDate.getFullYear();
  const diffMonths = endDate.getMonth() - startDate.getMonth();

  let years = diffYears;
  let months = diffMonths;
  if (diffMonths < 0) {
    years--;
    months += 12;
  }

  let duration = '';
  if (years > 0) duration += `${years} year${years > 1 ? 's' : ''} `;
  if (months > 0) duration += `${months} month${months > 1 ? 's' : ''}`;
  return duration.trim() || 'Less than a month';
};

const About = () => {
  const workExperience = {
  company: 'TCS',
  role: 'Assistant System Engineer',
  startDate: '2024-08-08',
  endDate: null,
  responsibilities: [
    'Develop and maintain Python scripts to monitor application health and automate routine checks.',
    'Utilize Elasticsearch, Logstash, and Kibana (ELK stack) to collect, analyze, and visualize log data for efficient error detection and troubleshooting.',
    'Modify and optimize field mappings in Elasticsearch to improve data indexing and query performance.',
    'Collaborate with cross-functional teams to understand application behavior and enhance monitoring solutions.',
    'Investigate and resolve application issues by analyzing logs and performance metrics.',
    'Implement automation workflows to streamline monitoring and alerting processes.',
    'Document monitoring procedures, scripts, and troubleshooting guides to ensure knowledge sharing.',
    'Continuously learn new tools and techniques to improve monitoring capabilities and system reliability.'
  ],
};


  return (
    <section className="about-section">
      <div className="about-container">

        {/* About Me Section */}
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Your Name" loading="lazy" />
          </div>
          <div className="about-text-content">
            <h2 className="about-title">About Me</h2>
            <p>
                Hello! I'm Ponrasu Thangavel, a passionate developer with a strong foundation in full-stack development, DevOps automation, and machine learning projects. I love solving complex problems and continuously expanding my technical skills.
            </p>
            <p>
                Outside of work, I enjoy tinkering with Linux terminals, writing technical blogs. I’m also an avid reader and enjoy staying up-to-date with the latest tech trends.
            </p>
            <p>
                My hobbies include music playlists, and experimenting with new coding projects that push the boundaries of AI and automation.
            </p>
            <p>
                Currently, I’m working on innovative projects like <em>Noctune</em> (an AI-powered music app) and <strong>Strix OS</strong>, a concept operating system designed specifically for developers. Strix OS aims to offer a rich set of developer-friendly features to boost productivity. I’m actively learning and building knowledge to bring this vision to life.
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="work-experience">
          <h2 className="work-title">Work Experience</h2>
          <div className="work-item">
            <h3>{workExperience.company}</h3>
            <p className="work-duration">
              {new Date(workExperience.startDate).toLocaleString('default', { month: 'short', year: 'numeric' })} -{' '}
              {workExperience.endDate
                ? new Date(workExperience.endDate).toLocaleString('default', { month: 'short', year: 'numeric' })
                : 'Present'}{' '}
              ({calculateDuration(workExperience.startDate, workExperience.endDate)})
            </p>
            <p className="work-role"><strong>Role:</strong> {workExperience.role}</p>
            <ul className="work-responsibilities">
              {workExperience.responsibilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
