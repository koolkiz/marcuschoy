import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Education = () => {
  const sectionBg = useColorModeValue('#F7F9FB', '#19181A');
  const sectionColor = useColorModeValue('#19181A', '#555657');
  const cardBg = useColorModeValue('#FDFDFD', '#C6C6C6');
  const cardHoverBg = useColorModeValue('#FFFFFF', '#D7D7D7');
  const headingColor = useColorModeValue('#E7717D', '#4b72a6'); // More visible color for dark mode
  const textColor = useColorModeValue('#19181A', '#555657'); // Darker text for light mode, lighter for dark mode

  const education = [
    {
      logo: `${process.env.PUBLIC_URL}/img/university-logo.png`,
      degree: 'Master of Data Science',
      institution: 'University of Canberra',
      location: 'Canberra, Australia',
      date: 'July 2022 – June 2024',
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/another-university-logo.png`,
      degree: 'Bachelor of Computer Networking and IT Security',
      institution: 'London Metropolitan University',
      location: 'Kathmandu, Nepal',
      date: 'July 2017 – March 2020',
    },
  ];

  return (
    <Box as="section" bg={sectionBg} color={sectionColor} py={20} id="education">
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" size="xl" mb={14} color={headingColor}>
          Education 🎒🏫
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} justifyContent="center">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
            >
              <Box
                bg={cardBg}
                color={textColor}
                p={8}
                borderRadius="lg"
                boxShadow="lg"
                _hover={{ bg: cardHoverBg }}
                transition="background-color 0.3s, transform 0.3s"
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Flex align="center" mb={6} justifyContent="center">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    borderRadius="full"
                    boxSize="100px" // Uniform size for both logos
                    objectFit="contain"
                  />
                </Flex>
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="lg" color={textColor}>
                    {edu.institution}
                  </Text>
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    {edu.location}
                  </Text>
                  <Text fontWeight="bold" fontSize="md" color={headingColor} mb={1} mt={3}>
                    {edu.degree}
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {edu.date}
                  </Text>
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Education;
