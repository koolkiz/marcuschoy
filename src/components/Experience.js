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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } },
  hover: { scale: 1.08, transition: { duration: 0.2, type: 'spring', stiffness: 250, damping: 15 } },
};

const Experience = () => {
  const sectionBg = useColorModeValue('#E0E5EC', '#2A2E35');
  const sectionColor = useColorModeValue('#19181A', '#E2E8F0');
  const cardBg = useColorModeValue('#ffffff', '#333842');
  const cardHoverBg = useColorModeValue('#ADD8E6', '#3B3F44');
  const headingColor = useColorModeValue('#3182ce', '#FFD700');
  const textColor = useColorModeValue('#333', '#E2E8F0');
  const secondaryTextColor = useColorModeValue('#718096', '#A0AEC0');

  const experiences = [
    {
      logo: `${process.env.PUBLIC_URL}/img/austriathlon-logo.png`,
      date: 'March 2024 – July 2024',
      company: 'AusTriathlon',
      location: 'Canberra, Australia',
      title: 'Data Analyst Intern',
      description: [
        'Collaborated with an Olympic team analyst to develop an automated system for processing cycling race data, providing real-time visualizations and insights to enhance athlete performance.',
        'Analyzed race metrics such as laps, patterns, and trends using R, and created detailed visual reports that supported strategic decisions.',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/shoesandsox-logo.png`,
      date: 'July 2022 – May 2024',
      company: 'Shoes and Sox',
      location: 'Canberra, Australia',
      title: 'Sales Analyst',
      description: [
        'Led analysis to reduce store hours by 10%, cutting operational costs by 15% without affecting customer satisfaction.',
        'Designed and implemented a customer loyalty program that increased repeat business by 10%, significantly improving customer engagement.',
        'Created guided technical documentation for the new loyalty program, ensuring smooth implementation across all stores in Australia.',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/nepaloilcorp-logo.png`,
      date: 'November 2020 – November 2021',
      company: 'Nepal Oil Corporation',
      location: 'Kathmandu, Nepal',
      title: 'IT Operations Specialist',
      description: [
        'Successfully implemented Nepal’s first government ERP project, ensuring seamless operations with zero downtime.',
        'Managed IT systems across multiple branches, ensuring all hardware, software, and networking were optimized and operational.',
        'Trained government employees on SAP Business One, enhancing their ability to use the system effectively.',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/outsource-array-logo.png`,
      date: 'November 2019 – February 2020',
      company: 'Outsource Array',
      location: 'Kathmandu, Nepal',
      title: 'Network Engineer Intern',
      description: [
        'Implemented LAN/WAN networks, modernizing office systems and enhancing overall infrastructure reliability.',
        'Configured networking devices and created VLANs to segment traffic, improving network security and performance.',
        'Provided tailored access control based on user roles, enhancing security and operational efficiency.',
      ],
    },
  ];

  return (
    <Box as="section" bg={sectionBg} color={sectionColor} py={20} px={4} id="experience">
      <Container maxW="container.xl" textAlign="center">
        <Heading as="h2" size="xl" mb={12} color={headingColor}>
          Experience 👨‍💻
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {experiences.map((experience, index) => (
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
                borderRadius="lg"
                boxShadow="lg"
                _hover={{ bg: cardHoverBg }}
                transition="background-color 0.2s, transform 0.2s"
                h="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Flex align="center" mb={4}>
                  <Image
                    src={experience.logo}
                    alt={experience.company}
                    borderRadius="full"
                    boxSize="60px"
                    mr={4}
                    objectFit="contain"
                  />
                  <Box textAlign="left">
                    <Text fontWeight="bold" fontSize="md" color={textColor}>
                      {experience.company}
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      {experience.location}
                    </Text>
                    <Text fontSize="sm" color={secondaryTextColor}>
                      {experience.date}
                    </Text>
                  </Box>
                </Flex>
                <Box textAlign="center" mb={4}>
                  <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                    {experience.title}
                  </Text>
                </Box>
                <Box as="ul" pl={4} mt={2} color={textColor} textAlign="left">
                  {experience.description.map((desc, i) => (
                    <Text as="li" mb={2} key={i} display="flex" alignItems="center">
                      <Box as="span" color={headingColor} mr={2}>•</Box> {desc}
                    </Text>
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Experience;
