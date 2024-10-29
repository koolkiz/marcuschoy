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
    name: 'Python Dashboard',
    link: 'http://ec2-52-62-61-15.ap-southeast-2.compute.amazonaws.com/',
    description: 'Deatailed Wildlife Incidents Records with location in Canberra Region from Government Dataset. Made in Python and hosted in AWS EC2.',
    hoverColor: 'rgba(56, 142, 60, 0.1)',
  },
  {
    name: 'Dog Breed Detector',
    link: 'https://github.com/acharyaarish/dog_breed_detector',
    description: 'Web game that challenges users to identify dog breeds from images using the Dog CEO API. Built with React, Node.js, and SQLite.',
    hoverColor: 'rgba(255, 165, 0, 0.1)',
  },
  {
    name: 'Finance Manager',
    link: 'https://github.com/acharyaarish/Finance-Manager',
    description: 'Personal finance management tool developed to help users monitor their income, manage expenses, and set savings goals—all through a simple, easy to use User Interface.',
    hoverColor: 'rgba(244, 67, 54, 0.1)',
  },
  {
    name: 'Inventory Management',
    link: 'https://github.com/acharyaarish/Inventory-Management',
    description: 'This Python-based Inventory Management System is designed for retail environments to help manage users, inventory, and orders.',
    hoverColor: 'rgba(33, 150, 243, 0.1)',
  },
  {
    name: 'Excel Dashboard',
    link: 'https://github.com/acharyaarish/Excel_Dashboard',
    description: 'Excel Dashboard analyzing supermarket sales, utilizing PivotTables for data visualization and decision-making.',
    hoverColor: 'rgba(255, 193, 7, 0.1)',
  },
  {
    name: 'Professor',
    link: 'https://paldip.com/',
    description: 'Assisted with testing, debugging, and feature additions for an Edtech Platform, including implementing a QR-based attendance system.',
    hoverColor: 'rgba(76, 175, 80, 0.1)',
  },
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
                      src={`${process.env.PUBLIC_URL}/img/${project.name.toLowerCase().replace(/\s+/g, '-')}.png`}
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
                    <Text fontSize="sm" color={textColor} noOfLines={3}>
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
