import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Link,
  Image,
  VStack,
  Button,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Passion8',
    link: 'https://github.com/koolkiz/Passion8',
    description: 'A data-driven framework leveraging AI and data analysis to optimize e-commerce operations. \n Churn analysis, Forecasting, Computer Vision, Sentiment Analysis, and more.',
    hoverColor: 'rgba(56, 142, 60, 0.1)',
  },
  {
    name: 'Quora Question Pairs',
    link: 'https://github.com/koolkiz/CS3244_Quora',
    description: 'A machine learning project to predict if 2 questions are similary or not through natural language processing',
    hoverColor: 'rgba(56, 142, 60, 0.1)',
  },
  {
    name: 'Health5',
    link: 'https://github.com/koolkiz/DSA4262_Health5',
    description: 'We propose a dynamic multimodal framework for breast cancer diagnosis, integrating clin- ical notes and medical images through an attention-based fusion mechanism.',
    hoverColor: 'rgba(56, 142, 60, 0.1)',
  }
  ,
  {
    name: 'Chat with Documents',
    link: 'https://github.com/koolkiz/ChatPDF',
    description: 'A Chat Companion to query any uploaded documents!',
    hoverColor: 'rgba(56, 142, 60, 0.1)',
  },
  {
    name: 'ScamSnipers',
    link: 'https://github.com/sweeenlim/scamsnipers',
    description: 'A study that explores machine learning techniques to enhance fraud detection, leveraging a dataset containing detailed insurance claim records.',
    hoverColor: 'rgba(56, 142, 60, 0.1)',
  }
];

const Projects = () => {
  const bgColor = useColorModeValue('#edf2f7', '#1a202c');
  const cardBgColor = useColorModeValue('#ffffff', '#2d3748');
  const textColor = useColorModeValue('gray.800', 'gray.200');
  const buttonBgColor = useColorModeValue('#3182ce', '#63b3ed');
  const buttonHoverBgColor = useColorModeValue('#2b6cb0', '#4299e1');
  const linkColor = useColorModeValue('#2c5282', '#90cdf4');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="section" bg={bgColor} color={textColor} id="projects" py={20}>  {/* Added id="projects" */}
      <Container maxW="container.xl">
        <Heading as="h2" size="xl" mb={16} fontWeight="bold" color={linkColor} textAlign="center">
          Projects 🚀
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Box
                bg={cardBgColor}
                width="330px" // Set a fixed width
                height="500px" // Set a fixed height
                borderRadius="xl"
                boxShadow="2xl"
                overflow="hidden"
                border={`1px solid ${borderColor}`}
                transition="background-color 0.3s ease-in-out, transform 0.3s ease-in-out"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: project.hoverColor,
                  zIndex: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: 0,
                }}
                _hover={{
                  bg: project.hoverColor,
                  boxShadow: "xl",
                  transform: "scale(1.05)",
                  _before: {
                    opacity: 1,
                  },
                }}
              >
                <VStack align="stretch" spacing={5} p={6} position="relative" zIndex={1}>
                  <Box
                    overflow="hidden"
                    borderRadius="lg"
                    height="200px"
                  >
                    <Image
                      src={`${process.env.PUBLIC_URL}/assets/${project.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                      alt={project.name}
                      borderRadius="lg"
                      objectFit="cover"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Box flex="1" textAlign="center">
                    <Heading as="h3" size="md" color={linkColor} mb={3}>
                      {project.name}
                    </Heading>
                    <Text fontSize="sm" color={textColor} >
                      {project.description}
                    </Text>
                  </Box>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    spacing={3}
                    mt={4}
                    width="100%"
                    justifyContent="center"
                  >
                    <Button
                      as={Link}
                      href={project.link}
                      isExternal
                      bg={buttonBgColor}
                      color="white"
                      flex={{ base: '1', sm: 'auto' }}
                      _hover={{ bg: buttonHoverBgColor }}
                      size="md"
                      borderRadius="full"
                      py={4}
                      textDecoration="none"
                    >
                      View Project
                    </Button>
                  </Stack>
                </VStack>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Projects;
