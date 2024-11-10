import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Flex,
  Text,
  Image,
  Progress,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Link,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Experience = () => {
  const sectionBg = useColorModeValue(
    'linear-gradient(135deg, #F7FAFC 0%, #E3F2FD 100%)',
    'linear-gradient(135deg, #1A202C 0%, #2D3748 100%)'
  );
  const sectionColor = useColorModeValue('#2D3748', '#E2E8F0');
  const cardBg = useColorModeValue('#FFFFFF', '#2D3748');
  const headingColor = useColorModeValue('#2B6CB0', '#FFD700');
  const textColor = useColorModeValue('#2D3748', '#E2E8F0');
  const secondaryTextColor = useColorModeValue('#718096', '#A0AEC0');
  const tagHoverColor = useColorModeValue('teal.600', 'teal.300');

  const experiences = [
    {
      logo: `${process.env.PUBLIC_URL}/assets/SAP.png`,
      date: 'Jan 2024 – Aug 2024',
      company: 'SAP',
      // hoverColor: 'rgba(33, 150, 243, 0.15)',
      // location: 'Canberra, Australia',
      title: 'AI Engineer Intern',
      description: [
        'Design and implemented features for a Retrieval-Augmented Generation (RAG) use cases, such as chat history, intent detection, and prompt engineering, to enhance productivity for users',
        'Designed and implemented a CI/CD pipeline using Jenkins, enabling automated testing, integration, and deployment for backend services',
        'Build and deployed Dockerised applications onto Cloud Floundry on SAP Business Technology Platform',
        'Communicated directly to understand business needs and managing business stakeholders’ expectations',
        'Explore Agents and Knowledge graph for RAG use case'
      ],
      tags: ['Python', 'LangChain', 'Docker', 'Jenkins' ,'SAP BTP', 'SAP HANA CLOUD'],
      // progress: 90,
      // learning: 'Gained deep insights into data automation and sports analytics using Python, R and PowerBI.'
    },
    {
      logo: `${process.env.PUBLIC_URL}/assets/Synapxe.jpg`,
      date: 'August 2024 – Present',
      company: 'Synaxpe',
      // link: 'https://www.shoesandsox.com.au',
      // hoverColor: 'rgba(255, 165, 0, 0.15)',
      // location: 'Sydney, Australia',
      title: 'AI Developer Intern',
      description: [
        'Developed new Generative AI features/tools to be deployed onto Generative AI Platform to boost users productivity',
      ],
      tags: ['Python', 'LangChain', 'Azure AI'],
      // progress: 90,
      // learning: 'Learned how data-driven decisions impact sales and efficiency.'
    },
    {
      logo: `${process.env.PUBLIC_URL}/assets/ML.jpg`,
      date: 'Feb 2021 – June 2021',
      company: 'ML Research Consultants',
      // hoverColor: 'rgba(33, 150, 243, 0.15)',
      // location: 'Canberra, Australia',
      title: 'Research Assistant',
      description: [
        'Analysed and cleaned data obtained from survey fieldworks for a senior researcher',
        'Worked on large amount of data using computing applications namely Excel and SPSS'
      ],
      tags: ['Excel', 'SPSS'],
      // progress: 90,
      // learning: 'Gained deep insights into data automation and sports analytics using Python, R and PowerBI.'
    }
  ];

  return (
    <Box as="section" bg={sectionBg} color={sectionColor} py={20} px={4} id="experience" position="relative">
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          mb={12}
          color={headingColor}
          textAlign="center"
          fontFamily="Poppins, sans-serif"
          fontWeight="extrabold"
          letterSpacing="wide"
        >
          Experience 👨‍💻
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {experiences.map((experience, index) => (
            // <motion.div
            //   key={index}
            //   whileHover={{ translateY: -10 }}
            //   transition={{ duration: 0.3 }}
            // >
              <Box
                bg={cardBg}
                color={textColor}
                p={8}
                borderRadius="lg"
                boxShadow="2xl"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bg: experience.hoverColor,
                  zIndex: 0,
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: 0,
                }}
                // _hover={{
                //   _before: {
                //     opacity: 1,
                //   },
                //   boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
                //   transform: 'translateY(-10px)',
                // }}
                transition="background-color 0.3s ease, transform 0.3s ease"
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="start"
              >
                <Flex align="center" mb={4} zIndex={1} position="relative">
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    // borderRadius="full"
                    boxSize={{ base: "180px", md: "190px" }}
                    mr={4}
                    objectFit="contain"
                  />
                  <Box textAlign="left">
                    <Link href={experience.link} isExternal fontWeight="bold" fontSize={{ base: "md", md: "lg" }} color={headingColor} _hover={{ textDecoration: 'underline' }}>
                      {experience.company}
                    </Link>
                    <Text fontSize={{ base: "sm", md: "md" }} color={secondaryTextColor} fontStyle="italic">
                      {experience.location}
                    </Text>
                    <Text fontSize={{ base: "sm", md: "md" }} color={secondaryTextColor}>
                      {experience.date}
                    </Text>
                  </Box>
                </Flex>
                <Box textAlign="center" mb={4} zIndex={1} position="relative">
                  <Text
                    fontWeight="bold"
                    fontSize={{ base: "lg", md: "xl" }}
                    color={headingColor}
                    fontFamily="Poppins, sans-serif"
                    letterSpacing="wider"
                  >
                    {experience.title}
                  </Text>
                </Box>
                <Box as="ul" pl={4} mt={4} color={textColor} textAlign="left" zIndex={1} position="relative">
                  {experience.description.map((desc, i) => (
                    <Text as="li" mb={3} key={i} display="flex" alignItems="start" fontSize="sm">
                      <Box as="span" color={headingColor} mr={2}>•</Box> {desc}
                    </Text>
                  ))}
                </Box>
                <Wrap mt={4} spacing={2} justify="center">
                  {experience.tags.map((tag, i) => (
                    <WrapItem key={i}>
                      <Tag
                        size="md"
                        variant="solid"
                        colorScheme="blue"
                        borderRadius="full"
                        cursor="pointer"
                        // _hover={{ transform: "scale(1.2)", backgroundColor: tagHoverColor }}
                        transition="all 0.3s ease-in-out"
                      >
                        {tag}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
                {/* <Box mt={4}>
                  <Text fontSize="sm" fontWeight="bold" color={headingColor}>
                    Impact & Performance:
                  </Text>
                  <Progress colorScheme="teal" size="sm" value={experience.progress} mt={2} borderRadius="md" />
                </Box>
                <Box mt={4}>
                  <Text fontSize="sm" fontWeight="bold" color={headingColor}>
                    Key Learning:
                  </Text>
                  <Text fontSize="sm" mt={2} color={secondaryTextColor}>
                    {experience.learning}
                  </Text>
                </Box> */}
              </Box>
            // </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Experience;