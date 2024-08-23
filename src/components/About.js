import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  const bgPattern = useColorModeValue(
    'url(https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png)',
    'url(https://www.toptal.com/designers/subtlepatterns/patterns/dark-mosaic.png)'
  );
  const bgGradient = useColorModeValue(
    'linear(to-r, rgba(255, 255, 255, 0.8), rgba(230, 230, 250, 0.8))',
    'linear(to-r, rgba(26, 32, 44, 0.8), rgba(45, 55, 72, 0.8))'
  );
  const textColor = useColorModeValue('#1a202c', '#E2E8F0');
  const headingColor = useColorModeValue('#E7717D', '#F6AD55');
  const subHeadingColor = useColorModeValue('#319795', '#63B3ED');
  const highlightColor = useColorModeValue('#ED8936', '#F6E05E');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Box
      id="about"
      bgImage={bgPattern}
      bgBlendMode="overlay"
      bgGradient={bgGradient}
      color={textColor}
      py={20}
      px={6}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      boxShadow="2xl"
      borderRadius="xl"
      overflow="hidden"
    >
      <Container maxW="container.lg" textAlign="center">
        <Heading
          as={motion.h2}
          size="xl"
          mb={8}
          color={headingColor}
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          fontWeight="extrabold"
          letterSpacing="tight"
          lineHeight="shorter"
        >
          About Me <span role="img" aria-label="wave">👋</span>
        </Heading>
        <Text
          as={motion.p}
          fontSize="lg"
          mb={8}
          color={subHeadingColor}
          fontWeight="bold"
          letterSpacing="wide"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Tech Enthusiast, Coffee Lover & Adventurer <span role="img" aria-label="coffee">☕</span> <span role="img" aria-label="mountain">🏔️</span>
        </Text>
        <Text
          fontSize="md"
          mb={10}
          color={textColor}
          maxW="container.md"
          mx="auto"
          lineHeight="taller"
          letterSpacing="normal"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          I've been in love with tech since my mother's womb. I adore coffee, but let's be honest - the best coffee is the one I brew at home. Even my pug agrees, but please don't tell anyone. I'm always learning and improving in data science, and in my free time, you guessed it, I’m probably making more coffee.
        </Text>
        <Text
          as={motion.p}
          fontSize="xl"
          fontWeight="bold"
          color={highlightColor}
          letterSpacing="tight"
          lineHeight="short"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          "Data is the new oil, and I’m here to refine it!" <span role="img" aria-label="lightbulb">💡</span>
        </Text>
      </Container>
    </Box>
  );
};

export default About;
