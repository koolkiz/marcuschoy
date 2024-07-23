import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillsSection = styled.section`
  padding: 4em 1em;
  background-color: #9FCC2E;
  color: #fff;
  animation: ${fadeIn} 1s ease-in;
  font-family: 'Poppins', sans-serif;
`;

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5em;
`;

const Skill = styled.div`
  background: #fff;
  color: #333;
  padding: 1.5em;
  border-radius: 15px;
  width: 150px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const SkillImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 0.5em;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #03A9F4;
  width: ${props => props.$level}%;
  border-radius: 5px;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2em;
  animation: ${fadeIn} 1.5s ease-in;
`;

const Skills = () => {
  const skills = [
    { name: 'Python', level: 80 },
    { name: 'R', level: 85 },
    { name: 'SQL', level: 70 },
    { name: 'Tableau', level: 75 },
    { name: 'Excel', level: 70 },
    { name: 'PowerBI', level: 75 },
    { name: 'Git', level: 70 },
    { name: 'AWS', level: 85 },
    { name: 'Azure', level: 80 }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Heading>Skills 🥷</Heading>
        <SkillsList>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillImage src={`/img/${skill.name.toLowerCase()}.png`} alt={skill.name} />
              {skill.name}
              <ProgressBar>
                <Progress $level={skill.level}></Progress>
              </ProgressBar>
            </Skill>
          ))}
        </SkillsList>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
