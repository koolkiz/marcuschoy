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

  const textColor = useColorModeValue('#2D3748', '#E2E8F0');
  const borderColor = useColorModeValue('#E2E8F0', '#4A5568');
  const inputBg = useColorModeValue('#FFFFFF', '#2D3748');
  const inputFocusBorder = useColorModeValue('#3182ce', '#63B3ED');
  const sectionBg = useColorModeValue('transparent', 'rgba(0, 0, 0, 0.8)');
  const buttonBg = useColorModeValue('#3182ce', '#63B3ED');
  const buttonHoverBg = useColorModeValue('#2C7A7B', '#3B82F6');
  const githubHoverColor = useColorModeValue('#2C7A7B', '#63B3ED');

  return (
    <Box
      as="section"
      bg={sectionBg}
      color={textColor}
      py={24} 
      id="contact"
      position="relative"
    >
      <Container maxW="container.sm" textAlign="center">
        <Heading
          as="h2"
          size="lg"
          mb={6}
          fontWeight="bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          letterSpacing="wider"
        >
          Get in Touch 📬
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              borderColor={borderColor}
              bg={inputBg}
              _hover={{ borderColor: inputFocusBorder }}
              _focus={{ borderColor: inputFocusBorder, boxShadow: `0 0 0 1px ${inputFocusBorder}` }}
              isRequired
              size="md"
              borderRadius="md"
              fontSize="sm"
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
              _focus={{ borderColor: inputFocusBorder, boxShadow: `0 0 0 1px ${inputFocusBorder}` }}
              isRequired
              size="md"
              borderRadius="md"
              fontSize="sm"
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              borderColor={borderColor}
              bg={inputBg}
              _hover={{ borderColor: inputFocusBorder }}
              _focus={{ borderColor: inputFocusBorder, boxShadow: `0 0 0 1px ${inputFocusBorder}` }}
              isRequired
              size="md"
              borderRadius="md"
              fontSize="sm"
            />
          </VStack>
          <Button
            type="submit"
            bg={buttonBg}
            color="white"
            _hover={{ bg: buttonHoverBg, transform: 'scale(1.03)' }}
            size="md"
            mt={6}
            width="full"
            transition="all 0.3s"
            borderRadius="md"
            fontSize="sm"
          >
            Send Message 💬
          </Button>
        </form>
        <Flex justify="center" mt={6}>
          <Link href="https://github.com/acharyaarish" isExternal>
            <Button
              leftIcon={<FaGithub />}
              colorScheme="gray"
              variant="outline"
              fontSize="lg"
              _hover={{ color: githubHoverColor, transform: 'scale(1.05)' }}
              size="md"
              fontWeight="bold"
              borderRadius="md"
            >
              GitHub
            </Button>
          </Link>
        </Flex>
        <Box mt={6} fontSize="xs" color={textColor}>
          &copy; 2024 Arish Acharya - All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
