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

const ProjectsSection = styled.section`
  padding: 4em 1em;
  background-color: #AB47BC;
  color: #fff;
  animation: ${fadeIn} 0.5s ease-in;
  font-family: 'Poppins', sans-serif;
`;

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;

const ProjectsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`;

const Project = styled.div`
  background: #fff;
  color: #333;
  padding: 1.5em;
  border-radius: 15px;
  width: calc(100% - 2em);
  max-width: 400px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    width: calc(50% - 2em);
  }

  @media (min-width: 1200px) {
    width: calc(33.333% - 2em);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 1em;
  border-radius: 10px;
`;

const ProjectLink = styled.a`
  color: #03A9F4;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;

  &:hover {
    color: #0288d1;
  }
`;

const ProjectDescription = styled.p`
  margin: 0.5em 0 1em 0;
  font-size: 1em;
  color: #666;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5em;
  margin-top: 0.5em;
`;

const Tag = styled.span`
  background: #03A9F4;
  color: #fff;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  font-size: 0.8em;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2em;
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

const GifImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const Projects = () => {
  const projects = [
    { 
      name: 'Python Dashboard', 
      link: 'https://github.com/acharyaarish/Python_Dashboard', 
      description: 'Wildlife Incidents Dashboard made by Python (Dash and Plotly), hosted in AWS EC2. ACT Government Dataset, the project involves analyzing incident hotspots, peak time, and seasons showcasing wildlife trends and patterns.',
      tags: ['Python', 'Dashboard', 'AWS']
    },
    { 
      name: 'Dog Breed Detector', 
      link: 'https://github.com/acharyaarish/dog_breed_detector', 
      description: 'Dog Breed Detector Game using Node.js for backend and React for frontend via DogCeo API',
      tags: ['Node.js', 'React', 'API']
    },
    { 
      name: 'IOT Project', 
      link: 'https://github.com/acharyaarish/Excel_Dashboard', 
      description: 'IoT system for home that captures nearby human image and alerts user through text and email.',
      tags: ['IoT', 'Security', 'Automation']
    },
    { 
      name: 'Wildlife Incidents Report', 
      link: 'https://github.com/acharyaarish/Python_Dashboard/blob/main/Wildlife%20Incidents%20ACT.pdf', 
      description: 'Wildlife Incidents Analysis (2016-24) from government dataset from Australian Capital Territory(ACT). The report contains analysis of Wildlife Incidents in detail such as Wildlife Hotspots for Incidents, Most Prone time and seasons for incidents along with the species who are involved in incidents.',
      tags: ['Report', 'Analysis', 'Wildlife']
    },
    { 
      name: 'Excel Dashboard', 
      link: 'https://github.com/acharyaarish/Excel_Dashboard', 
      description: 'Excel Dashboard for Supermarket using PivotTable showcasing in-depth analysis of Sales.',
      tags: ['Excel', 'Dashboard', 'Sales']
    },
    { 
      name: 'Professor', 
      link: 'https://paldip.com/', 
      description: 'Helped my University Professor for testing and debugging this Edtech Platform.',
      tags: ['Edtech', 'Testing', 'Debugging']
    },
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Heading>
          Projects 
          <GifImage src="https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="Projects" />
        </Heading>
        <ProjectsList>
          {projects.map((project, index) => (
            <Project key={index}>
              <ProjectImage src={`/img/${project.name.toLowerCase().replace(/\s+/g, '-')}.png`} alt={project.name} />
              <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</ProjectLink>
              <ProjectDescription>{project.description}</ProjectDescription>
              <Tags>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
            </Project>
          ))}
        </ProjectsList>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
