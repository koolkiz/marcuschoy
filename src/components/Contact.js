import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  Textarea,
  Button,
  Link,
  Flex,
  useToast,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formUrl = 'https://formspree.io/f/mvgpzrlw';
    fetch(formUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          toast({
            title: 'Message sent.',
            description: 'Your message was sent successfully!',
            status: 'success',
            duration: 5000,
            isClosable: true,
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          toast({
            title: 'Error.',
            description: 'Failed to send message.',
            status: 'error',
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast({
          title: 'Error.',
          description: 'Failed to send message.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const textColor = useColorModeValue('#333', '#E2E8F0');
  const borderColor = useColorModeValue('#CCCCCC', '#555555');
  const inputBg = useColorModeValue('#FFFFFF', '#3D3D3D');
  const inputFocusBorder = useColorModeValue('#3182ce', '#90CDF4');
  const sectionBg = useColorModeValue('#ebebe7', '#263238');

  return (
    <Box
      as="section"
      bg={sectionBg}
      color={textColor}
      py={16}
      id="contact"
      borderRadius="lg"
      boxShadow="lg"
      position="relative"
      overflow="hidden"
    >
      <Container maxW="container.md" textAlign="center">
        <Heading
          as={motion.h2}
          size="xl"
          mb={10}
          color={textColor}
          fontWeight="bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch 📬
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              borderColor={borderColor}
              bg={inputBg}
              _hover={{ borderColor: inputFocusBorder }}
              _focus={{ borderColor: inputFocusBorder, boxShadow: '0 0 0 1px #3182ce' }}
              isRequired
              as={motion.input}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <Input
              placeholder="Your Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              borderColor={borderColor}
              bg={inputBg}
              _hover={{ borderColor: inputFocusBorder }}
              _focus={{ borderColor: inputFocusBorder, boxShadow: '0 0 0 1px #3182ce' }}
              isRequired
              as={motion.input}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              borderColor={borderColor}
              bg={inputBg}
              _hover={{ borderColor: inputFocusBorder }}
              _focus={{ borderColor: inputFocusBorder, boxShadow: '0 0 0 1px #3182ce' }}
              isRequired
              as={motion.textarea}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            />
          </VStack>
          <Button
            type="submit"
            colorScheme="teal"
            bg="#479761"
            _hover={{ bg: '#367d5b', transform: 'scale(1.05)' }}
            size="lg"
            mt={8}
            isFullWidth
            transition="all 0.3s"
            as={motion.button}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Send Message 💬
          </Button>
        </form>
        <Flex justify="center" mt={8}>
          <Link href="https://github.com/acharyaarish" isExternal>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="gray"
              variant="ghost"
              fontSize="2xl"
              _hover={{ color: 'teal.500' }}
              as={motion.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              GitHub
            </Button>
          </Link>
        </Flex>
        <Box mt={8} fontSize="sm" color={textColor}>
          &copy; 2023 Arish Acharya - All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
