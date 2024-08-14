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
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';
  
  const bgColor = isLightMode ? '#2C2C2C' : '#0F0F0F'; // Darker, more professional background for dark mode
  const primaryColor = isLightMode ? '#D4A373' : '#C0A080'; // Subtle and professional color for text and icons
  const textColor = isLightMode ? '#FFFFFF' : '#E0E0E0'; // Softer text color in dark mode
  const closeIconHoverColor = isLightMode ? '#A97155' : '#D69E2E'; // Adjusted hover color for close icon

  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <Box as="nav" bg={bgColor} px={4} py={1} position="fixed" w="100%" zIndex="10" boxShadow="sm">
      <Flex h={12} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <ChakraLink as={Link} to="header" smooth duration={500} offset={-50}>
            <Image
              src={`${process.env.PUBLIC_URL}/img/logo-updated.png`}
              alt="Logo"
              boxSize={{ base: '30px', md: '35px' }} // Smaller logo for a more compact Navbar
              maxH="100%"
              mr={3}
              cursor="pointer"
            />
          </ChakraLink>
          <ChakraLink
            as={Link}
            to="header"
            smooth
            duration={500}
            offset={-50}
            _hover={{ textDecoration: 'none' }} // Remove underline on hover
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }} // Slightly smaller font for the title
              fontWeight="bold"
              color={primaryColor}
              cursor="pointer"
            >
              Arish's Portfolio
            </Text>
          </ChakraLink>
        </Flex>

        <HStack
          as="nav"
          spacing={{ base: 2, md: 6 }}
          display={{ base: 'none', md: 'flex' }}
          mx="auto"
        >
          {sections.map((section) => (
            <ChakraLink
              as={Link}
              to={section.id}
              smooth
              duration={500}
              spy
              offset={-50}
              key={section.id}
              fontSize={{ base: 'sm', md: 'md' }} // Slightly smaller font for menu items
              px={2}
              py={1}
              _hover={{ textDecoration: 'none', color: primaryColor }}
              cursor="pointer"
              color={textColor}
            >
              {section.name}
            </ChakraLink>
          ))}
        </HStack>

        <HStack spacing={2} alignItems="center">
          <Tooltip
            label={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            fontSize={{ base: 'xs', md: 'sm' }} // Smaller, modern font size for the tooltip label
            bg={primaryColor}
            color={bgColor}
            placement="bottom"
            hasArrow
          >
            <Box
              display="flex"
              alignItems="center"
              cursor="pointer"
              onClick={toggleColorMode}
              color={primaryColor}
            >
              <IconButton
                icon={isLightMode ? <MoonIcon /> : <SunIcon />} // Default Chakra UI icons without hover effect
                aria-label="Toggle Color Mode"
                bg="transparent"
                color={primaryColor}
                _hover={{ bg: 'transparent' }} // Ensure no background or color change on hover
                mx="0"
              />
              <Text
                ml={1}
                fontSize={{ base: 'xs', md: 'sm' }} // Slightly smaller font size for small screens
                whiteSpace="nowrap"
              >
                {isLightMode ? 'Dark Mode' : 'Light Mode'}
              </Text>
            </Box>
          </Tooltip>
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color={textColor}
            _hover={{ color: isOpen ? closeIconHoverColor : primaryColor }} // Professional hover color for the close icon
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
