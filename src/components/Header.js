import React, { useEffect, useRef } from 'react';
import { Box, Heading, Button, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useTypewriter from './hooks/useTypewriter';

const Header = () => {
  const { text, color } = useTypewriter(['Data Analytics', 'Research', 'Cloud Services'], 70, 50, 800);

  const headingColor = useColorModeValue('#0C0C0C', '#FBEAEB');
  const subheadingColor = useColorModeValue('#333333', '#FBEAEB');

  const videoSrc = useColorModeValue(
    `${process.env.PUBLIC_URL}/img/light-mode.mp4`,
    `${process.env.PUBLIC_URL}/img/dark-mode.mp4`
  );

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videoSrc]);

  return (
    <Box
      id="header"
      position="relative"
      overflow="hidden"
      height={{ base: "80vh", md: "100vh" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={4}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
          opacity: useColorModeValue(0.8, 1), // Slight transparency for light mode
        }}
        playbackRate={0.5}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

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
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          mb={6}
          minH="3rem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {text.split('').map((char, index) => (
            <Text
              as="span"
              key={index}
              color={color}
              animation="fadeIn 1s ease-in-out"
            >
              {char}
            </Text>
          ))}
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={4} flexWrap="wrap">
          <Button
            as="a"
            href={`${process.env.PUBLIC_URL}/img/Arish_Acharya_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            bgColor={useColorModeValue("#002C54", "#1E90FF")}
            color="white"
            size="lg"
            mx={2}
            my={2}
            _hover={{ bg: useColorModeValue("#002C54", "#4682B4"), transform: "scale(1.05)" }}
          >
            <Image src={`${process.env.PUBLIC_URL}/img/resume-icon.png`} alt="Resume Icon" boxSize="20px" mr={2} />
            View Resume
          </Button>
          <Button
            as="a"
            href="https://github.com/acharyaarish"
            target="_blank"
            rel="noopener noreferrer"
            bgColor={useColorModeValue("#1995AD", "#DC143C")}
            color="white"
            size="lg"
            mx={2}
            my={2}
            _hover={{ bg: useColorModeValue("#1995AD", "#B22222"), transform: "scale(1.05)" }}
          >
            <Image src={`${process.env.PUBLIC_URL}/img/github-icon.png`} alt="GitHub Icon" boxSize="20px" mr={2} />
            View GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
