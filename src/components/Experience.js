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
        'Collaborated with the Data Lead to automate large triathlon datasets from various race formats worldwide, eliminating manual effort in calculating race laps and metrics.',
        'Communicated regularly with the Data Lead, presenting innovative ideas and learning to solve complex problems through advanced research and out-of-the-box thinking.',
        'Developed race lap calculations for varied formats and ground sizes using Python and R, providing insights to help coaches improve player performance and identify shortcomings.',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/shoesandsox-logo.png`,
      date: 'July 2022 – May 2024',
      company: 'Shoes and Sox',
      location: 'Canberra, Australia',
      title: 'Sales Analyst',
      description: [
        'Worked closely with the regional manager to adjust store hours in response to low sales, resulting in cost savings of over AUD 100,000 annually across ACT stores.',
        'Analyzed sales trends from ACT stores, enabling our team to convince stakeholders to launch a new loyalty program that boosted sales by 10% across Australia.',
        'Contributed to the success of the loyalty program by documenting guidelines for all stores nationwide and effectively communicating through email to resolve sales data queries from store managers.',
      ],
    },
    {
      logo: `${process.env.PUBLIC_URL}/img/nepaloilcorp-logo.png`,
      date: 'November 2020 – November 2021',
      company: 'Nepal Oil Corporation',
      location: 'Kathmandu, Nepal',
      title: 'IT Operations Specialist',
      description: [
        'Contributed to the implementation of Nepal\'s first government ERP system, achieving 99.9% uptime and reducing manual processing.',
        'Delivered training on SAP Business One to over 50 government employees, which increased their operational efficiency by 20% and ensured the smooth adoption of the new system.',
        '	Managed the IT infrastructure, which supported over 500 users across multiple departments, ensuring a 98% reduction in system downtime and contributing to continuous business operations.',
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
        'Communicated with stakeholders to ensure they were informed and understood any changes made to the network.',
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
