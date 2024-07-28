import React from 'react';
import {
  Box,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  Heading,
  useColorModeValue,
  Container,
  chakra,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaPython, FaReact, FaNodeJs, FaAws, FaCloud, FaDatabase, FaLinux, FaTools,
  FaRProject, FaJs, FaGitAlt, FaTable, FaChartLine, FaLaptopCode
} from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: FaPython, description: 'Data analysis and automation' },
  { name: 'R', icon: FaRProject, description: 'Statistical computing' },
  { name: 'JavaScript', icon: FaJs, description: 'Web development' },
  { name: 'React', icon: FaReact, description: 'Frontend development' },
  { name: 'Node.js', icon: FaNodeJs, description: 'Backend development' },
  { name: 'Git', icon: FaGitAlt, description: 'Version control' },
  { name: 'Linux', icon: FaLinux, description: 'System administration' },
  { name: 'Pandas', icon: FaTools, description: 'Data manipulation' },
  { name: 'AWS', icon: FaAws, description: 'Cloud services' },
  { name: 'Azure', icon: FaCloud, description: 'Cloud computing' },
  { name: 'GCP', icon: FaCloud, description: 'Google Cloud Platform' },
  { name: 'SQL', icon: FaDatabase, description: 'Database management' },
  { name: 'Tableau', icon: FaTable, description: 'Data visualization' },
  { name: 'PowerBI', icon: FaChartLine, description: 'Business analytics' },
  { name: 'CISCO', icon: FaLaptopCode, description: 'Networking' },
  { name: 'SAP', icon: FaTools, description: 'Enterprise software' },
];

const Skills = () => {
  const bg = useColorModeValue('#e0e5ec', '#2a2e35'); // Slightly darker background
  const cardBg = useColorModeValue('#ffffff', '#2D3748');
  const textColor = useColorModeValue('#333', '#E2E8F0');
  const iconColor = useColorModeValue('#3182ce', '#63b3ed');
  const descriptionColor = useColorModeValue('#718096', '#a0aec0');
  const headingColor = useColorModeValue('#333333', '#e2e8f0');

  return (
    <Box id="skills" bg={bg} py={16}>
      <chakra.style>
        {`
          .skill-card {
            position: relative;
            overflow: hidden;
            border-width: 3px;
            border-style: solid;
            border-radius: 12px;
            border-color: transparent;
            transition: transform 0.2s ease, border-color 0.2s ease;
          }
          .skill-card:hover {
            transform: translateY(-8px);
            border-image: linear-gradient(45deg, #3182ce, #63b3ed, #4eea0a, #3182ce);
            border-image-slice: 1;
          }
        `}
      </chakra.style>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={8} textAlign="center">
          <Heading fontSize="3xl" fontWeight="bold" color={headingColor}>Skills</Heading>
          <Text fontSize="lg" color={textColor} fontFamily="Poppins, sans-serif">
            Technologies and tools I'm proficient in:
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                bg={cardBg}
                p={6}
                className="skill-card"
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={skill.icon} boxSize="40px" color={iconColor} mb={4} />
                <Text fontWeight="bold" fontSize="lg" color={textColor}>{skill.name}</Text>
                <Text fontSize="sm" color={descriptionColor} mt={2}>{skill.description}</Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Skills;
