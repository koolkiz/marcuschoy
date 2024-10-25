import React, { useEffect, useRef } from 'react';
import { Box, Heading, Button, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useTypewriter from './hooks/useTypewriter';

const Header = () => {
  const { text, color } = useTypewriter(['Data Engineering','Software Engineering', 'Research', 'Cloud Services'], 70, 50, 800);

  const headingColor = useColorModeValue('#0C0C0C', '#FBEAEB');
  const subheadingColor = useColorModeValue('#555555', '#EDEDED');
  const buttonTextColor = useColorModeValue('#FFFFFF', '#FFFFFF');

  const resumeButtonBg = useColorModeValue('#FFB400', '#1E90FF');
  const githubButtonBg = useColorModeValue('#007BFF', '#FF6347');

  const videoRef = useRef(null);

  const videoSrc = useColorModeValue(
    `${process.env.PUBLIC_URL}/img/light-mode.mp4`,
    `${process.env.PUBLIC_URL}/img/dark-mode.mp4`
  );

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlayThrough = () => {
        if (videoElement) {
          videoElement.play();
        }
      };
      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.load();

      return () => {
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
      };
    }
  }, [videoSrc]);

  return (
    <Box
      id="header"
      position="relative"
      overflow="hidden"
      height="100vh"  // Ensures full screen height on all devices
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={0}  // Remove padding to prevent any overflow issues
      m={0}  // Remove margin to ensure full screen coverage
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
          transition: 'opacity 1s ease-in-out',
        }}
        poster={`${process.env.PUBLIC_URL}/img/poster.jpg`}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <Box maxW="80%" mx="auto">
        <Heading
          as={motion.h1}
          size="3xl"
          color={headingColor}
          mb={4}
          fontFamily="Poppins, sans-serif"
          textTransform="uppercase"
          letterSpacing="wider"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm Arish
        </Heading>
        <Heading
          as={motion.h2}
          size="xl"
          color={subheadingColor}
          mb={4}
          fontFamily="Poppins, sans-serif"
          fontWeight="medium"
          textTransform="uppercase"
          letterSpacing="widest"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          I Specialize in
        </Heading>
        <Box
          as={motion.div}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          mb={6}
          minH="3rem"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          fontFamily="Poppins, sans-serif"
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
            bg={resumeButtonBg}
            color={buttonTextColor}
            size="lg"
            mx={2}
            my={2}
            borderRadius="30px 10px"
            fontSize="lg"
            fontWeight="bold"
            fontFamily="Poppins, sans-serif"
            _hover={{
              bg: useColorModeValue("#E0A500", "#187BCD"),
              transform: "scale(1.08)",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
            }}
            transition="all 0.3s ease-in-out"
            boxShadow="md"
          >
            <Image src={`${process.env.PUBLIC_URL}/img/resume-icon.png`} alt="Resume Icon" boxSize="24px" mr={2} />
            View Resume
          </Button>
          <Button
            as="a"
            href="https://github.com/acharyaarish"
            target="_blank"
            rel="noopener noreferrer"
            bg={githubButtonBg}
            color={buttonTextColor}
            size="lg"
            mx={2}
            my={2}
            borderRadius="10px 30px"
            fontSize="lg"
            fontWeight="bold"
            fontFamily="Poppins, sans-serif"
            _hover={{
              bg: useColorModeValue("#0066CC", "#FF5733"),
              transform: "scale(1.08)",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
            }}
            transition="all 0.3s ease-in-out"
            boxShadow="md"
          >
            <Image src={`${process.env.PUBLIC_URL}/img/github-icon.png`} alt="GitHub Icon" boxSize="24px" mr={2} />
            View GitHub
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
