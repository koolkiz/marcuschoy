import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  Grid,
  Image,
  VStack,
  Tag,
  Wrap,
  WrapItem,
  Link,
  keyframes,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Education = () => {
  const sectionBg = useColorModeValue('linear-gradient(135deg, #eef2f3, #d4d7dd)', 'linear-gradient(135deg, #232526, #414345)');
  const cardBg = useColorModeValue('#ffffff', '#2d3748');
  const hoverBgColor1 = useColorModeValue('#e0f7ff', '#355a7c');
  const hoverBgColor2 = useColorModeValue('#ffe0e0', '#593737');
  const textColor = useColorModeValue('#2d3748', '#e2e8f0');
  const headingColor = useColorModeValue('#2a69ac', '#f6ad55');
  const tagBgColor = useColorModeValue('#e2e8f0', '#4a5568');
  const tagTextColor = useColorModeValue('#2d3748', '#e2e8f0');
  const tagHoverBgColor = useColorModeValue('#cbd5e0', '#718096');
  const circleBg = useColorModeValue('#f0f4f8', '#3b475a');
  const logoFilter = useColorModeValue('none', 'brightness(0) invert(1)');

  const education = [
    {
      id: 1,
      institution: 'University of Canberra',
      logo: `${process.env.PUBLIC_URL}/img/university-logo.png`,
      degree: 'Master of Data Science',
      location: 'Canberra, Australia',
      date: 'August 2022 – June 2024',
      highlights: ['Business Intelligence', 'Project Management', 'Sports Analytics'],
      url: 'https://www.canberra.edu.au/',
      hoverColor: hoverBgColor1,
    },
    {
      id: 2,
      institution: 'London Metropolitan University',
      logo: `${process.env.PUBLIC_URL}/img/another-university-logo.png`,
      degree: 'Bachelor of Computer Networking and IT Security',
      location: 'Kathmandu, Nepal',
      date: 'July 2017 – March 2020',
      highlights: ['IT Security', 'Networking', 'Programming'],
      url: 'https://www.londonmet.ac.uk/',
      hoverColor: hoverBgColor2,
    },
  ];

  return (
    <Box as="section" bg={sectionBg} py={{ base: 20, md: 24 }} px={{ base: 4, md: 8 }} id="education">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl" 
          mb={{ base: 10, md: 14 }}
          color={headingColor}
          textAlign="center"
          fontFamily="Poppins, sans-serif"
          fontWeight="extrabold"
          letterSpacing="tight"
          position="relative"
          animation={`${fadeIn} 1s ease-out`}
        >
          Education 🎓
        </Heading>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: 4, md: 5 }}
          alignItems="center"
          justifyItems="center"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ width: '100%' }}
            >
              <Box
                bg={cardBg}
                p={{ base: 5, md: 6 }}
                borderRadius="lg"
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                textAlign="center"
                _hover={{
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                  bg: edu.hoverColor,
                }}
                width="100%"
                transition="background-color 0.3s ease"
                position="relative"
              >
                <Box
                  bg={circleBg}
                  borderRadius="full"
                  p={3}
                  mx="auto"
                  mb={5}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="fit-content"
                >
                  <Link href={edu.url} isExternal>
                    <Image
                      src={edu.logo}
                      alt={edu.institution}
                      boxSize={{ base: '50px', md: '70px' }}
                      objectFit="contain"
                      borderRadius="full"
                      transition="transform 0.3s ease"
                      _hover={{ transform: 'scale(1.1)' }}
                      filter={logoFilter}
                    />
                  </Link>
                </Box>
                <VStack align="center" spacing={2}>
                  <Link href={edu.url} isExternal>
                    <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} color={textColor}>
                      {edu.institution}
                    </Text>
                  </Link>
                  <Text fontSize={{ base: 'sm', md: 'md' }} color={textColor}>
                    {edu.degree}
                  </Text>
                  <Text fontSize={{ base: 'xs', md: 'sm' }} color={textColor}>
                    {edu.location} | {edu.date}
                  </Text>
                </VStack>
                <Box mt={4}>
                  <Wrap spacing={2} justify="center">
                    {edu.highlights.map((highlight, index) => (
                      <WrapItem key={index}>
                        <Tag
                          size={{ base: 'xs', md: 'sm' }}
                          bg={tagBgColor}
                          color={tagTextColor}
                          borderRadius="full"
                          fontWeight="medium"
                          px={3}
                          py={1}
                          _hover={{ bg: tagHoverBgColor }}
                        >
                          {highlight}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
