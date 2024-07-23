import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Keyframes for the color fill animation
const colorFill = keyframes`
  from {
    background-color: #fff;
  }
  to {
    background-color: #e0f7fa;
  }
`;

const EducationSection = styled.section`
  padding: 4em 1em;
  background-color: #4BCBEB;
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

const EducationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`;

const EducationDetails = styled(motion.div)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #333;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.1s, background-color 0.2s;
  width: 45%;
  min-width: 280px;
  animation: ${colorFill} 0.3s ease-in-out;

  &:hover {
    background-color: #e0f7fa;
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1em;
  border-radius: 50%;
`;

const Details = styled.div`
  text-align: left;
`;

const Heading = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 2em;
`;

const Education = () => {
  const education = [
    {
      logo: `${process.env.PUBLIC_URL}/img/university-logo.png`,
      degree: 'Master of Data Science',
      institution: 'University of Canberra',
      date: 'July 2022 – June 2024',
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/another-university-logo.png`,
      degree: 'Bachelor of Computer Networking and IT Security',
      institution: 'Islington College (London Metropolitan University)',
      date: 'July 2017 – March 2020',
    },
  ];

  return (
    <EducationSection id="education">
      <Container>
        <Heading
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education 🎒🏫
        </Heading>
        <EducationWrapper>
          {education.map((edu, index) => (
            <EducationDetails
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Logo src={edu.logo} alt={edu.institution} />
              <Details>
                <p><strong>{edu.institution}</strong></p>
                <p>{edu.degree}</p>
                <p>{edu.date}</p>
              </Details>
            </EducationDetails>
          ))}
        </EducationWrapper>
      </Container>
    </EducationSection>
  );
};

export default Education;
