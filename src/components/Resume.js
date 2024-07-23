import React from 'react';
import styled from 'styled-components';

const ResumeSection = styled.section`
  padding: 4em 0;
  background-color: #333;
  color: #fff;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Summary = styled.p`
  margin: 2em 0;
  font-size: 1.1em;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Resume = () => {
  return (
    <ResumeSection id="resume">
      <Container>
        <h2>Resume</h2>
        <Summary>
          With a solid background in data science and analytics, I have extensive experience in Python, R, SQL, and visualization tools like Tableau and Power BI. I have worked on various projects that showcase my ability to analyze and interpret data, providing actionable insights.
        </Summary>
        <ResumeButton href="../public/img/arish_resume.pdf" target="_blank" download>
          Download Resume
        </ResumeButton>
      </Container>
    </ResumeSection>
  );
};

export default Resume;
