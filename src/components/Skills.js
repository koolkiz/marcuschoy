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
  Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaPython, FaReact, FaNodeJs, FaAws, FaCloud, FaDatabase, FaLinux, FaTools,
  FaRProject, FaJs, FaGitAlt, FaTable, FaChartLine, FaLaptopCode
} from 'react-icons/fa';
import StackIcon from "tech-stack-icons";

const pythonlogo =<StackIcon name="python" />

const skills = [
  { name: 'Python', icon: "python.png", description: '' },
  { name: 'R', icon: "r.png", description: '' },
  { name: 'Java', icon: "java.png", description: 'Web development' },
  // { name: 'React', icon: FaReact, description: 'Frontend development' },
  { name: 'Git', icon: "git.png", description: 'Version control' },
  // { name: 'Linux', icon: FaLinux, description: 'System administration' },
  { name: 'Pandas', icon: "pandas.png", description: 'Machine Learning' },
  { name: 'Keras', icon: "keras.png", description: 'Machine Learning' },
  { name: 'Tensorflow', icon: "tf.png", description: 'Machine Learning' },
  { name: 'Numpy', icon: "numpy.png", description: 'Machine Learning' },
  { name: 'Scikit learn', icon: "sck.png", description: 'Machine Learning' },
  { name: 'LangChain', icon: "langchain.png", description: 'Machine Learning' },
  { name: 'Flask', icon: "flask.png", description: 'Web Development' },
  { name: 'FastAPI', icon: "fastapi.png", description: 'Web Development' },
  { name: 'Git', icon: "git.png", description: 'Version Control' },
  { name: 'Docker', icon: "docker.png", description: '' },
  { name: 'Jenkins', icon: "jenkins.png", description: '' },
  { name: 'Streamlit', icon: "streamlit.png", description: '' },
  // { name: 'AWS', icon: FaAws, description: 'Cloud services' },
  // { name: 'Azure', icon: FaCloud, description: 'Cloud computing' },
  // { name: 'GCP', icon: FaCloud, description: 'Google Cloud Platform' },
  { name: 'SQL', icon: "mysql.png", description: 'Database management' },
  // { name: 'PowerBI', icon: FaChartLine, description: 'Business analytics' },
  // { name: 'CISCO', icon: FaLaptopCode, description: 'Networking' },
  // { name: 'SAP', icon: FaTools, description: 'Enterprise software' },
];

const Skills = () => {
  const bg = useColorModeValue('#E1F3F3', '#263238'); 
  const cardBg = useColorModeValue('#ffffff', '#37474f'); 
  const textColor = useColorModeValue('#212121', '#e0e0e0');
  const iconColor = useColorModeValue('#2B6CB0', '#4caf50');
  const descriptionColor = useColorModeValue('#546e7a', '#b0bec5');

  return (
    <Box id="skills" bg={bg} py={16} px={6}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={8} textAlign="center">
          <Heading fontSize="3xl" fontWeight="bold" color={iconColor}>
            Skills
          </Heading>
          <Text fontSize="lg" color={textColor} fontFamily="Poppins, sans-serif">
            Basic understanding, constantly improving:
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.2 }}
            >
              <Box
                bg={cardBg}
                p={6}
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                transition="transform 0.2s ease"
                _hover={{ transform: 'scale(1.08)' }}
              >
                <Image 
                  src = {`${process.env.PUBLIC_URL}/logo/${skill.icon}`}
                  boxSize="50px"
                  // borderRadius="full"
                  // fit="cover" 
                  />
      
                <Text fontWeight="bold" fontSize="lg" color={textColor}>
                  {skill.name}
                </Text>
                <Text fontSize="sm" color={descriptionColor} mt={2}>
                  {skill.description}
                </Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Skills;
