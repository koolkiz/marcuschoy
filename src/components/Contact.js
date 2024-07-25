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

  // Define color scheme based on the provided palettes
  const bgColor = useColorModeValue('#D1D5DB', '#2A2A2A'); // Slightly darker background
  const textColor = useColorModeValue('#333', '#E2E8F0');
  const borderColor = useColorModeValue('#cccccc', '#555555');
  const inputBg = useColorModeValue('#fff', '#2D3748');
  const inputFocusBorder = useColorModeValue('#3182ce', '#90CDF4');

  return (
    <Box
      as="section"
      bg={bgColor}
      color={textColor}
      py={20}
      id="contact"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Container maxW="container.md" textAlign="center">
        <Heading as="h2" size="xl" mb={10} color={textColor} fontWeight="bold">
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
