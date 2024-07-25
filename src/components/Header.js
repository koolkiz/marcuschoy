import React from 'react';
import { Box, Heading, Button, Image, Link as ChakraLink, Text, HStack, Switch, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import useTypewriter from './hooks/useTypewriter';

const Header = () => {
  const { text } = useTypewriter(['Data Analytics', 'Research', 'Cloud Services'], 70, 50, 800);
  const { colorMode, toggleColorMode } = useColorMode();

  const bgImage = useColorModeValue(`${process.env.PUBLIC_URL}/img/vector3.jpg`, `${process.env.PUBLIC_URL}/img/vector2.jpg`);
  const headingColor = useColorModeValue('#19181A', '#FFD700'); // Dark color for light mode, bright yellow for dark mode
  const subheadingColor = useColorModeValue('#333', '#CEBC81'); // Dark color for light mode, lighter color for dark mode
  const textColor = useColorModeValue('#333', '#E0E0E0'); // Dark color for light mode, light gray for dark mode
  const switchTextColor = useColorModeValue('#1E2022', '#E0E0E0'); // Ensure the text is visible in both modes

  return (
    <Box
      id="header"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      color={textColor}
      height={{ base: "80vh", md: "100vh" }} // Increased height for a more prominent header
      textAlign="center"
      px={4}
      position="relative"
      overflow="hidden"
    >
      <Box maxW="70%" mx="auto">
        <Heading
          as={motion.h1}
          size="4xl"
          color={headingColor}
          mb={4}
          fontFamily="Poppins, sans-serif"
          textTransform="uppercase"
          letterSpacing="widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi!
        </Heading>
        <Heading
          as={motion.h2}
          size="2xl"
          color={subheadingColor}
          mb={4}
          fontFamily="Poppins, sans-serif"
          textTransform="uppercase"
          letterSpacing="widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I'm Arish, I Specialize in
        </Heading>
        <Box
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mb={6}
          minH="2.5rem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {text.split('').map((char, index) => (
            <Text
              as="span"
              key={index}
              color={textColor}
              animation="fadeIn 1s ease-in-out"
            >
              {char}
            </Text>
          ))}
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={4} flexWrap="wrap">
          <Button
            as="a"
            href={`${process.env.PUBLIC_URL}/img/arish_resume.pdf`}
            bgColor="#1e90ff"
            color="white"
            size="lg"
            mx={2}
            my={2}
            _hover={{ bg: "#1c86ee", transform: "scale(1.05)" }}
          >
            <Image src={`${process.env.PUBLIC_URL}/img/resume-icon.png`} alt="Resume Icon" boxSize="20px" mr={2} />
            View Resume
          </Button>
          <Button
            as="a"
            href="https://github.com/acharyaarish"
            bgColor="#F96167"
            color="white"
            size="lg"
            mx={2}
            my={2}
            _hover={{ bg: "#DC3545", transform: "scale(1.05)" }}
          >
            <Image src={`${process.env.PUBLIC_URL}/img/github-icon.png`} alt="GitHub Icon" boxSize="20px" mr={2} />
            View GitHub
          </Button>
          <HStack spacing={3} ml={4} alignItems="center">
            <Text fontSize="lg" color={switchTextColor} fontWeight="bold">
              {colorMode === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Text>
            <Switch
              size="lg"
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
              colorScheme="purple"
              aria-label="Toggle Color Mode"
            />
          </HStack>
        </Box>
      </Box>
      <ChakraLink
        href="https://www.vecteezy.com/free-vector/sky"
        position="absolute"
        bottom={4}
        right={4}
        fontSize="xs"
        color="#A9A9A9"
        _hover={{ color: "#cccccc" }}
        zIndex={1}
      >
        Sky Vectors by Vecteezy
      </ChakraLink>
    </Box>
  );
};

export default Header;
