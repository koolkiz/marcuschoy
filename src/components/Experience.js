import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the slide-up animation
const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ExperienceSection = styled.section`
  padding: 4em 1em;
  background-color: #FA9F1B;
  color: #fff;
`;

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;

const Job = styled.div`
  margin-bottom: 2em;
  display: flex;
  align-items: center;
  background: #fff;
  color: #333;
  padding: 1.5em;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(50px);
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1em;
  border-radius: 50%;
`;

const JobDetails = styled.div`
  flex: 1;
  text-align: left;
`;

const Date = styled.p`
  font-weight: bold;
  color: #25476A;
  margin-bottom: 0.5em;
`;

const Company = styled.p`
  font-weight: bold;
  color: #03A9F4;
  margin-bottom: 0.5em;
`;

const Title = styled.p`
  font-weight: bold;
  color: #AB47BC;
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  color: #555;
  margin-bottom: 0;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  margin-bottom: 2em;
  animation: ${slideUp} 0.3s ease-out forwards;
`;

const Experience = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    const jobs = containerRef.current.querySelectorAll('.job');
    jobs.forEach(job => observer.observe(job));

    return () => {
      jobs.forEach(job => observer.unobserve(job));
    };
  }, []);

  const experiences = [
    {
      logo: `${process.env.PUBLIC_URL}/img/austriathlon-logo.png`,
      date: 'March 2024 – July 2024',
      company: 'AusTriathlon',
      title: 'Data Analyst Intern',
      description: 'Worked with a data analyst to automate the processing of cycling race data from Australian athletes competing abroad using R and Power BI. Generated detailed race reports with visualizations of laps and metrics, enhancing player performance and supporting strategic decisions.',
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/shoesandsox-logo.png`,
      date: 'July 2022 – May 2024',
      company: 'Shoes and Sox',
      title: 'Sales',
      description: 'Exceeded sales targets by 5-15%, driving revenue growth. Enhanced communication and customer service skills, including regular discussions with the regional manager to optimize store hours and reduce unnecessary costs. Played a key role in creating a customer loyalty program, increasing repeat business and customer engagement.',
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/nepaloilcorp-logo.png`,
      date: 'November 2020 – November 2021',
      company: 'Nepal Oil Corporation',
      title: 'IT Support',
      description: 'Key contributor to Nepal\'s first ERP implementation project. Assisted in IT networking and provided SAP Business One support and training for non-technical government employees. Implemented ERP systems and managed ITIL practices, streamlining operations.',
    },
  ];

  return (
    <ExperienceSection id="experience">
      <Container ref={containerRef}>
        <Heading>Experience 👨🧑‍💻</Heading>
        {experiences.map((experience, index) => (
          <Job key={index} className="job" $delay={index * 0.1}>
            <Logo src={experience.logo} alt={experience.company} />
            <JobDetails>
              <Date>{experience.date}</Date>
              <Company>{experience.company}</Company>
              <Title>{experience.title}</Title>
              <Description>{experience.description}</Description>
            </JobDetails>
          </Job>
        ))}
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
