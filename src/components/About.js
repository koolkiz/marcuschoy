import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  useColorModeValue,
  VStack,
  Flex,
  Image
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const About = () => {
  const bg = useColorModeValue('#f7fafc', '#1a202c');
  const quoteBg = useColorModeValue('#2c5282', '#63b3ed'); // Light: Dark Blue, Dark: Darker Grayish Blue
  const textColor = useColorModeValue('#2d3748', '#e2e8f0');
  const quoteColor = useColorModeValue('#ffffff', '#f7fafc');

  return (
    <Box id="about" bg={bg} py={20} px={6}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
          justify="space-between"
          height="100%"
          gap={10}
        >
          {/* 30% Quote Section */}
          <Box
            flex={{ base: '0 0 100%', md: '0 0 30%' }}
            bg={quoteBg}
            p={8}
            borderRadius="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"
            minHeight="300px"
            borderTopRightRadius="50%"
            borderBottomRightRadius="50%"
          >
            < Image 
              src = {`${process.env.PUBLIC_URL}/assets/me.png`}
              boxSize="300px"
              borderRadius="full"
              fit="cover" 
              />
          </Box>

          {/* 70% Text Section */}
          <VStack
            flex={{ base: '0 0 100%', md: '0 0 70%' }}
            spacing={6}
            align={{ base: 'center', md: 'flex-start' }}
            maxW="container.md"
            mx={{ base: 'auto', md: 0 }}
          >
            <Heading
              size="2xl"
              color={quoteBg}
              fontWeight="extrabold"
              textAlign={{ base: 'center', md: 'left' }}
            >
              About Me 👋
            </Heading>
            <Text fontSize="lg" fontWeight="bold" lineHeight="short" textAlign={{ base: 'center', md: 'left' }}>
              Hello, my name is Marcus :)
            </Text>
            <Text fontSize="md" lineHeight="taller" textAlign={{ base: 'center', md: 'left' }} color={textColor}>
            I am currently a Final Year Data Science and Analytics Undergraduate at NUS. Driven by a passion for unlocking insights from data, I am a passionate data scientist with a focus on machine learning and generative AI. I am fascinated by the potential of these technologies to solve real-world problems and push the boundaries of creativity!
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
