import React from 'react';
import { Box, SimpleGrid, Text, VStack, Icon, useColorModeValue, Heading } from '@chakra-ui/react';
import {
  FaPython, FaReact, FaNodeJs, FaPalette, FaDatabase, FaNetworkWired,
  FaLaptopCode, FaTable, FaChartLine, FaGitAlt, FaAws, FaCloud, FaFileExcel, FaRProject, FaJs
} from 'react-icons/fa';

const skills = [
  { name: 'Python', icon: FaPython },
  { name: 'R', icon: FaRProject },
  { name: 'SQL', icon: FaDatabase },
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Chakra UI', icon: FaPalette },
  { name: 'Git', icon: FaGitAlt },
  { name: 'AWS', icon: FaAws },
  { name: 'Azure', icon: FaCloud },
  { name: 'Tableau', icon: FaTable },
  { name: 'PowerBI', icon: FaChartLine },
  { name: 'Excel', icon: FaFileExcel },
  { name: 'TCP/IP', icon: FaNetworkWired },
  { name: 'CISCO', icon: FaLaptopCode },
];

const Skills = () => {
  const bg = useColorModeValue('#E2E8F0', '#2D3748'); // Distinct background color
  const cardBg = useColorModeValue('white', '#1A202C');
  const textColor = useColorModeValue('#19181A', 'white');
  const borderColor = useColorModeValue('teal.300', 'teal.200');

  return (
    <Box id="skills" bg={bg} py={16} px={8} borderRadius="lg" boxShadow="lg">
      <VStack spacing={3} mb={8}>
        <Heading fontSize="2xl" fontWeight="bold" color={textColor}>Skills</Heading>
        <Text color={textColor} textAlign="center" fontSize="lg">
          Technologies and tools I am proficient in:
        </Text>
      </VStack>
      <SimpleGrid columns={[2, 3, 4, 5]} spacing={8} pb={8}>
        {skills.map((skill, index) => (
          <Box
            key={index}
            bg={cardBg}
            p={6}
            rounded="lg"
            shadow="md"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{ transform: 'scale(1.05)', boxShadow: '0 0 10px teal', borderColor: borderColor }}
            border="1px solid transparent"
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Icon as={skill.icon} boxSize="40px" color="teal.500" mb={3} />
            <Text fontWeight="medium" color={textColor} fontSize="md">{skill.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
