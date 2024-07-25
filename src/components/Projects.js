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
    description: 'Wildlife Incidents Dashboard using Python (Dash and Plotly), hosted on AWS EC2. Analysis of incident hotspots, peak times, and seasons.',
    tags: ['Python', 'Dashboard', 'AWS'],
  },
  {
    name: 'Dog Breed Detector',
    link: 'https://github.com/acharyaarish/dog_breed_detector',
    description: 'Dog Breed Detector Game using Node.js for backend and React for frontend via DogCeo API.',
    tags: ['Node.js', 'React', 'API'],
  },
  {
    name: 'IoT Project',
    link: 'https://github.com/acharyaarish/Excel_Dashboard',
    description: 'IoT system that captures nearby human images and alerts users through text and email.',
    tags: ['IoT', 'Security', 'Automation'],
  },
  {
    name: 'Wildlife Incidents Report',
    link: 'https://github.com/acharyaarish/Python_Dashboard/blob/main/Wildlife%20Incidents%20ACT.pdf',
    description: 'Analysis of Wildlife Incidents (2016-24) from ACT. The report covers incident hotspots, peak times, and species involved.',
    tags: ['Report', 'Analysis', 'Wildlife'],
  },
  {
    name: 'Excel Dashboard',
    link: 'https://github.com/acharyaarish/Excel_Dashboard',
    description: 'Excel Dashboard for Supermarket using PivotTable showcasing an in-depth analysis of sales.',
    tags: ['Excel', 'Dashboard', 'Sales'],
  },
  {
    name: 'Professor',
    link: 'https://paldip.com/',
    description: 'Assisted my University Professor with testing, debugging and adding new features for his Edtech Platform.',
    tags: ['Edtech', 'Testing', 'Debugging'],
  },
];

const Projects = () => {
  // Define color scheme based on the provided palettes
  const bgColor = useColorModeValue('#B4D8E7', '#1A202C'); // Lighter container background color
  const textColor = useColorModeValue('#2D3748', '#E2E8F0');
  const linkColor = useColorModeValue('#00796B', '#90CDF4');
  const cardBgColor = useColorModeValue('#F9F9F9', '#334552'); // Light card background color
  const cardHoverBgColor = useColorModeValue('#E8F0FA', '#3B3F44'); // Slightly lighter hover background color
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
                    height="150px"
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
