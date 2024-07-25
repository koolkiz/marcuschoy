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
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Python Dashboard',
    link: 'https://github.com/acharyaarish/Python_Dashboard',
    description: 'Wildlife Incident Analysis Report for the Australian Capital Territory (ACT) spans from 2016 to 2024, offering in-depth insights into wildlife-related incidents. Made using Python Dash and Plotly package and hosted in AWS EC2.',
    tags: ['Python', 'Dashboard', 'AWS'],
  },
  {
    name: 'Dog Breed Detector',
    link: 'https://github.com/acharyaarish/dog_breed_detector',
    description: 'The Dog Breed Detector is a web application that challenges users to identify dog breeds from images provided by the Dog CEO API. Built with a React frontend, Node.js backend and SQLite for database.',
    tags: ['Node.js', 'React', 'API'],
  },
  {
    name: 'Wildlife Incidents Report',
    link: 'https://github.com/acharyaarish/Python_Dashboard/blob/main/Wildlife%20Incidents%20ACT.pdf',
    description: 'This report offers an incisive look at kangaroo incidents in the Australian Capital Territory from 2016 to 2024, identifying key hotspots, peak times, and the species involved. It provides essential insights for effectively managing and reducing these occurrences.',
    tags: ['Report', 'Analysis', 'Wildlife'],
  },
  {
    name: 'IoT Project',
    link: 'https://github.com/acharyaarish/Excel_Dashboard',
    description: 'I developed this IoT project to enhance home security, utilizing a Raspberry Pi and camera module to detect nearby human activity. By integrating Python cv2 package, the system captures images and sends alerts through text and email when someone approaches the main entrance.',
    tags: ['IoT', 'Security', 'Automation'],
  },
  {
    name: 'Excel Dashboard',
    link: 'https://github.com/acharyaarish/Excel_Dashboard',
    description: 'I created this Excel Dashboard for my university project to analyze supermarket sales. It utilizes a PivotTable to organize, summarize, and visually display transaction data across three sheets: All Simulated Data, Dashboard, and Data Dashboard. This tool simplifies retail insights and aids in effective decision-making.',
    tags: ['Excel', 'Dashboard', 'Sales'],
  },
  {
    name: 'Professor',
    link: 'https://paldip.com/',
    description: 'Assisted my University Professor with testing, debugging and adding new features for his Edtech Platform. We implemented QR system for attendance, PostHog for Analytics and fixed minor bugs.',
    tags: ['Edtech', 'Testing', 'Debugging'],
  },
];

const Projects = () => {
  const bgColor = useColorModeValue('#B4D8E7', '#1A202C'); // Lighter container background color
  const textColor = useColorModeValue('#2D3748', '#E2E8F0');
  const linkColor = useColorModeValue('#00796B', '#90CDF4');
  const cardBgColor = useColorModeValue('#FFFFFF', '#334552'); // Light card background color
  const cardHoverBgColor = useColorModeValue('#e8f0f8', '#3B3F44'); // Slightly lighter hover background color
  const tagBgColor = useColorModeValue('#00796B', '#577b91');

  return (
    <Box as="section" bg={bgColor} color={textColor} id="projects">
      <Container maxW="container.xl" textAlign="center" py={20}>
        <Heading as="h2" size="xl" mb={8} color={linkColor}>
          Projects 🚀
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                bg={cardBgColor}
                borderRadius="md"
                boxShadow="md"
                p={5}
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                _hover={{ bg: cardHoverBgColor }}
                transition="0.3s"
              >
                <VStack spacing={4} align="start">
                  <Image
                    src={`${process.env.PUBLIC_URL}/img/${project.name.toLowerCase().replace(/\s+/g, '-')}.png`}
                    alt={project.name}
                    borderRadius="md"
                    objectFit="cover"
                    height="200px" // Increased image height for better visibility
                    width="100%"
                  />
                  <Box>
                    <Link
                      href={project.link}
                      isExternal
                      fontSize="lg"
                      fontWeight="bold"
                      color={linkColor}
                      _hover={{ textDecoration: 'underline' }}
                    >
                      {project.name}
                    </Link>
                    <Text color={textColor}>{project.description}</Text>
                  </Box>
                  <Box mt="auto" display="flex" justifyContent="center" width="100%">
                    {project.tags.map((tag, i) => (
                      <Text
                        as="span"
                        key={i}
                        bg={tagBgColor}
                        color="white"
                        p={1}
                        borderRadius="md"
                        mr={2}
                        fontSize="sm"
                      >
                        {tag}
                      </Text>
                    ))}
                  </Box>
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
