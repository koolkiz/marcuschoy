import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  // Define color scheme based on the provided palettes
  const bg = useColorModeValue('#f0f4f8', '#19181A'); // Light or Dark background color
  const textColor = useColorModeValue('#19181A', '#E2E8F0');
  const headingColor = useColorModeValue('#E7717D', '#CEBC81');
  const subHeadingColor = useColorModeValue('#CEBC81', '#FFD700');
  const descriptionColor = useColorModeValue('#333', '#ddd');
  const highlightColor = useColorModeValue('#A16E83', '#FFD700');

  // Animation variants for the container transitions
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      id="about"
      bg={bg}
      color={textColor}
      py={16} // Increased padding at the top and bottom
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      boxShadow="lg"
      borderRadius="lg"
      overflow="hidden"
    >
      <Container maxW="container.lg" textAlign="center" py={0}>
        <Heading
          as={motion.h2}
          size="2xl"
          mb={6}
          color={headingColor}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me <span role="img" aria-label="wave">👋</span>
        </Heading>
        <Text fontSize="xl" mb={4} color={subHeadingColor} fontWeight="semibold">
          Data Science Enthusiast <span role="img" aria-label="computer">💻</span>
        </Text>
        <Text fontSize="lg" mb={10} color={descriptionColor} maxW="container.md" mx="auto">
          I'm Arish, a data science student passionate about transforming data into actionable insights. I specialize in <Text as="span" fontWeight="bold" color={highlightColor}>Data Analytics, Research, and Cloud Services</Text>. My goal is to use data to drive strategic decisions and create impactful solutions.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mb={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              as={motion.img}
              src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
              alt="Cat Typing"
              borderRadius="lg"
              boxSize="150px"
              objectFit="cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            <Text mt={2} color={descriptionColor}>Hard at work!</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              as={motion.img}
              src="https://media.giphy.com/media/26tPplGWjN0xLybiU/giphy.gif"
              alt="Data Analysis"
              borderRadius="lg"
              boxSize="150px"
              objectFit="cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
            <Text mt={2} color={descriptionColor}>Data crunching time!</Text>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Image
              as={motion.img}
              src="https://media.giphy.com/media/3o6Zt8MgUuvSbkZYWc/giphy.gif"
              alt="Enjoying Data"
              borderRadius="lg"
              boxSize="150px"
              objectFit="cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            />
            <Text mt={2} color={descriptionColor}>Having fun with data!</Text>
          </Box>
        </SimpleGrid>
        <Text
          as={motion.p}
          fontSize="lg"
          color={highlightColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          "To analyze or not to analyze, that is the question!" <span role="img" aria-label="thinking">🤔</span>
        </Text>
      </Container>
    </Box>
  );
};

export default About;
