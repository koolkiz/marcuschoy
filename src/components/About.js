import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  const bgPattern = useColorModeValue(
    'url(https://www.toptal.com/designers/subtlepatterns/patterns/memphis-mini.png)',
    'url(https://www.toptal.com/designers/subtlepatterns/patterns/dark-mosaic.png)'
  );
  const textColor = useColorModeValue('#1a202c', '#E2E8F0');
  const headingColor = useColorModeValue('#E7717D', '#F6AD55');
  const subHeadingColor = useColorModeValue('#319795', '#63B3ED');
  const highlightColor = useColorModeValue('#ED8936', '#F6E05E');

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const wordBounce = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300 },
    },
  };

  const emojiBounce = {
    hover: {
      y: [0, -5, 0],
      transition: { yoyo: Infinity, duration: 0.4 },
    },
  };

  return (
    <Box
      id="about"
      bgImage={bgPattern}
      bgBlendMode="overlay"
      color={textColor}
      py={16}
      px={4}
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      boxShadow="2xl"
      borderRadius="xl"
      overflow="hidden"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ md: 'center' }}
          justify="space-between"
          spacing={8}
        >
          <Box
            flex="1"
            mb={{ base: 8, md: 0 }}
            mr={{ md: 10 }}
            as={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src="/img/profile.jpeg"
              alt="Profile Picture"
              borderRadius="full"
              width={{ base: '80%', md: '100%' }}
              objectFit="cover"
              boxShadow="2xl"
              mx="auto"
              border="4px solid"
              borderColor={headingColor}
              fallbackSrc="https://via.placeholder.com/400"
            />
          </Box>

          <Box flex="2" textAlign={{ base: 'center', md: 'left' }}>
            <Heading
              as={motion.h2}
              size="2xl"
              mb={6}
              color={headingColor}
              initial="hidden"
              animate="visible"
              variants={headingVariants}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
            >
              <motion.span variants={wordBounce} whileHover="hover">
                About Me
              </motion.span>{' '}
              <motion.span role="img" aria-label="wave" variants={emojiBounce} whileHover="hover">
                👋
              </motion.span>
            </Heading>
            <VStack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
              <Text
                as={motion.p}
                fontSize="lg"
                color={subHeadingColor}
                fontWeight="bold"
                letterSpacing="wide"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.3 }}
                maxW="container.md"
              >
                <motion.span variants={wordBounce} whileHover="hover">
                  Tech Enthusiast,
                </motion.span>{' '}
                <motion.span variants={wordBounce} whileHover="hover">
                  Coffee Lover
                </motion.span>{' '}
                &{' '}
                <motion.span variants={wordBounce} whileHover="hover">
                  Adventurer
                </motion.span>
                <HStack spacing={2} display="inline-flex">
                  <motion.span role="img" aria-label="coffee" variants={emojiBounce} whileHover="hover">
                    ☕
                  </motion.span>
                  <motion.span role="img" aria-label="mountain" variants={emojiBounce} whileHover="hover">
                    🏔️
                  </motion.span>
                </HStack>
              </Text>
              <Text
                fontSize="md"
                color={textColor}
                maxW="container.md"
                mx="auto"
                lineHeight="taller"
                letterSpacing="normal"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                From fixing computers as the neighborhood tech guy to setting up networks and working on ERP systems, I've
                always loved tech. My journey has taken me from my uncle’s logistics business to my father’s media
                company, and now to Australia, where I’ve automated data for Austriathlon. I’m constantly refining my skills
                in data science and brewing the best coffee at home. Even my pug{' '}
                <motion.span role="img" aria-label="pug" variants={emojiBounce} whileHover="hover">
                  🐕
                </motion.span>{' '}
                agrees, but let’s keep that between us!
              </Text>
              <Text
                as={motion.p}
                fontSize="xl"
                fontWeight="bold"
                color={highlightColor}
                letterSpacing="tight"
                lineHeight="short"
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.7 }}
                textAlign="center"
              >
                <motion.span variants={wordBounce} whileHover="hover">
                  "Data is the new oil, and I’m here to refine it!"
                </motion.span>{' '}
                <motion.span role="img" aria-label="lightbulb" variants={emojiBounce} whileHover="hover">
                  💡
                </motion.span>
              </Text>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
