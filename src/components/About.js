import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 4em 1em;
  background-color: #002349;
  color: #fff;
  font-family: 'Poppins', sans-serif;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  font-size: 2.5em;
  margin-bottom: 0.5em;
`;

const SubHeading = styled.h3`
  font-size: 1.5em;
  margin-bottom: 1em;
  color: #f39c12;
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 2em;
`;

const GifImage = styled.img`
  width: 100px;
  height: 100px;
  margin: 0.5em;
  border-radius: 10px;
`;

const Joke = styled.p`
  font-size: 1.1em;
  color: #fff;
  margin: 1em 0;
  font-style: italic;
`;

const AnimatedText = styled(motion.div)`
  font-size: 1.2em;
  color: #FFEB3B;
  margin-top: 20px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Heading
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me <span role="img" aria-label="wave">👋</span>
        </Heading>
        <SubHeading>
          Data Science Enthusiast <span role="img" aria-label="computer">💻</span>
        </SubHeading>
        <Description>
          I'm Arish, a data science student who loves playing with datasets. I turn data into gold for companies but somehow not for myself (lol). My dream? To buy a Porsche 🏎️ and retire early so I can be like my pug 🐶 : happy 😺, eating, sleeping 😴, and running 🏃‍♂️ around.
        </Description>
        <GifImage src="https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif" alt="Data Enthusiast" />
        <GifImage src="https://media.giphy.com/media/l0HlN5tZoRNC6O5kc/giphy.gif" alt="Coding Fun" />
        <GifImage src="https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif" alt="Pug Running" />
        <GifImage src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Funny Coding" />
        <Joke>
          Why did the data scientist go broke? Because he couldn't find his significant other! <span role="img" aria-label="laugh">😂</span>
        </Joke>
        <AnimatedText
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          "To analyze or not to analyze, that is the question!" <span role="img" aria-label="thinking">🤔</span>
        </AnimatedText>
      </Container>
    </AboutSection>
  );
};

export default About;
