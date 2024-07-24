import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useTypewriter from './hooks/useTypewriter';

const images = [
  `${process.env.PUBLIC_URL}/img/vector.jpg`,
  `${process.env.PUBLIC_URL}/img/vector2.jpg`,
  `${process.env.PUBLIC_URL}/img/vector3.jpg`
];

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${images[0]});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  height: 80vh;
  text-align: center;
  padding: 0 2rem;
  position: relative;

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

const HeaderContent = styled.div`
  max-width: 80%;
  text-align: center;
  position: relative; /* Ensure the text content is above the dimming overlay */
  z-index: 2; /* Ensure the text and buttons are above the dimming overlay */
`;

const FixedText = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const AnimatedTextContainer = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  z-index: 2; /* Ensure the buttons are above the dimming overlay */
`;

const StyledButton = styled.a`
  background-color: ${props => props.$bgColor};
  color: #ffffff;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  box-shadow: 0px 4px 15px rgba(50, 205, 50, 0.2);
  transition: background-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
  width: 200px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.$hoverColor};
    box-shadow: 0px 6px 20px rgba(34, 139, 34, 0.4);
    transform: scale(1.1);
  }

  & > img {
    margin-right: 10px;
  }
`;

const CreditLink = styled.a`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 0.45rem;
  color: #A9A9A9;
  text-decoration: none;
  z-index: 1; /* Ensure the credit link is dimmed with the background */

  &:hover {
    color: #cccccc;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 15s ease-in-out;
  z-index: 1; /* Ensure the overlay is above the background but below the text and buttons */
`;

const DimmingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${props => (props.$dim ? 0.4 : 0)});
  transition: background 15s ease-in-out; /* Slow transition for dimming */
  pointer-events: none;
  z-index: 1; /* Ensure the overlay is above the background but below the text and buttons */
`;

const Header = () => {
  const { text, color } = useTypewriter(['Data Analytics', 'Research', 'Cloud Services'], 70, 50, 800);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 60000); // Change image every 60 seconds

    return () => clearInterval(intervalId);
  }, []);

  const isDimmed = currentImageIndex !== 0;

  return (
    <HeaderContainer>
      {images.map((image, index) => (
        <BackgroundImage key={index} src={image} active={index === currentImageIndex} />
      ))}
      <DimmingOverlay $dim={isDimmed} />
      <HeaderContent>
        <FixedText>
          Hi 👋! People call me Arish, I Specialise in
        </FixedText>
        <AnimatedTextContainer style={{ color }}>
          {text}
        </AnimatedTextContainer>
        <ButtonContainer>
          <StyledButton
            href={`${process.env.PUBLIC_URL}/img/arish_resume.pdf`}
            $bgColor="#1e90ff"
            $hoverColor="#1c86ee"
          >
            <img src={`${process.env.PUBLIC_URL}/img/resume-icon.png`} alt="Resume Icon" width="20" height="20" />
            View Resume
          </StyledButton>
          <StyledButton
            href="https://github.com/acharyaarish"
            $bgColor="#F96167"
            $hoverColor="#DC3545"
          >
            <img src={`${process.env.PUBLIC_URL}/img/github-icon.png`} alt="GitHub Icon" width="20" height="20" />
            View GitHub
          </StyledButton>
        </ButtonContainer>
      </HeaderContent>
      <CreditLink href="https://www.vecteezy.com/free-vector/sky">Sky Vectors by Vecteezy</CreditLink>
    </HeaderContainer>
  );
};

export default Header;
