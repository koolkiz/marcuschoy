import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Stack,
  Text,
  Image,
  HStack,
  useColorMode,
  Tooltip,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = '#19181A'; // Dark background
  const primaryColor = '#CEBC81'; // Light Yellow for active and hover states
  const textColor = '#ECF0F1'; // Light Grey for text

  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <Box as="nav" bg={bgColor} px={4} position="fixed" w="100%" zIndex="10">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <ChakraLink as={Link} to="header" smooth duration={500} offset={-50}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/logo-updated.png`}
              alt="Logo"
              boxSize={{ base: "40px", md: "50px" }} // Smaller logo for mobile
              maxH="100%"
              mr={3}
              cursor="pointer"
            />
          </ChakraLink>
          <ChakraLink as={Link} to="header" smooth duration={500} offset={-50}>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" color={primaryColor} cursor="pointer">
              Arish's Portfolio
            </Text>
          </ChakraLink>
        </Flex>

        <HStack as="nav" spacing={{ base: 4, md: 8 }} display={{ base: 'none', md: 'flex' }} mx="auto">
          {sections.map((section) => (
            <ChakraLink
              as={Link}
              to={section.id}
              smooth
              duration={500}
              spy
              offset={-50}
              key={section.id}
              fontSize={{ base: "md", md: "lg" }} // Smaller font for mobile
              px={3}
              py={1}
              _hover={{ textDecoration: 'none', color: primaryColor }}
              cursor="pointer"
              color={textColor}
            >
              {section.name}
            </ChakraLink>
          ))}
        </HStack>

        <HStack spacing={3} alignItems="center">
          <Tooltip label="Toggle Theme" fontSize="md" bg={primaryColor} color={bgColor} placement="bottom" hasArrow>
            <IconButton
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              size="md"
              bg="transparent"
              color={primaryColor}
              _hover={{ color: colorMode === 'light' ? 'yellow.500' : 'blue.300' }}
              mx="2"
            />
          </Tooltip>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color={textColor}
          />
        </HStack>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {sections.map((section) => (
              <ChakraLink
                as={Link}
                to={section.id}
                smooth
                duration={500}
                spy
                offset={-50}
                key={section.id}
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: 'none', color: primaryColor }}
                cursor="pointer"
                color={textColor}
              >
                {section.name}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
