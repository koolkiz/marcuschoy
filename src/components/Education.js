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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.08, transition: { duration: 0.2 } },
};

const Education = () => {
  const sectionBg = useColorModeValue('#F0F8FF', '#222831'); 
  const sectionColor = useColorModeValue('#1A202C', '#E2E8F0');
  const cardBg = useColorModeValue('#FFFFFF', '#E2E8F0');
  const cardHoverBg = useColorModeValue('#EDF2F7', '#EDF2F7'); 
  const headingColor = useColorModeValue('#2C5282', '#F6AD55');
  const textColor = useColorModeValue('#1A202C', '#1A202C');

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
    <Box as="section" bg={sectionBg} color={sectionColor} py={24} id="education">
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" size="lg" mb={10} color={headingColor}>
          Education 🎓
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} justifyContent="center">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              <Box
                bg={cardBg}
                color={textColor}
                p={6}
                borderRadius="md"
                boxShadow="lg"
                _hover={{ bg: cardHoverBg }}
                transition="background-color 0.2s ease, transform 0.2s ease"
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Flex align="center" mb={4} justifyContent="center">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    borderRadius="full"
                    boxSize="80px"
                    objectFit="contain"
                  />
                </Flex>
                <Box textAlign="center">
                  <Text fontWeight="bold" fontSize="md">
                    {edu.institution}
                  </Text>
                  <Text fontSize="xs" color="gray.500" mb={1}>
                    {edu.location}
                  </Text>
                  <Text fontWeight="bold" fontSize="sm" mb={1} mt={1}>
                    {edu.degree}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
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
