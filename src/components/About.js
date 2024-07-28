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
  // Define color scheme based on the provided palettes
  const bg = useColorModeValue('#f0f4f8', '#19181A'); // Light or Dark background color
  const textColor = useColorModeValue('#19181A', '#E2E8F0');
  const headingColor = useColorModeValue('#E7717D', '#CEBC81');
  const subHeadingColor = useColorModeValue('#CEBC81', '#FFD700');
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
      py={16}
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
        <Text fontSize="lg" mb={10} color={textColor} maxW="container.md" mx="auto">
          Hi! I'm Arish. I love making things simple and using technology to improve lives. Whether it's through data analytics, research, or cloud services, I'm passionate about creating practical solutions.
        </Text>
        <Text
          as={motion.p}
          fontSize="lg"
          color={highlightColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          "Let's make life simpler with tech!" <span role="img" aria-label="lightbulb">💡</span>
        </Text>
      </Container>
    </Box>
  );
};

export default About;
