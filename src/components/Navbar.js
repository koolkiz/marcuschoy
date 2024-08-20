import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Link as ChakraLink,
  useDisclosure,
  Stack,
  Image,
  HStack,
  useColorMode,
  Tooltip,
  Collapse,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = colorMode === 'light';

  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.75)', 'rgba(20, 20, 20, 0.85)');
  const textColor = useColorModeValue('#2D3748', '#F7FAFC');
  const primaryColor = useColorModeValue('#FCA311', '#FFD700');
  const hoverTextColor = useColorModeValue('#FCA311', '#FFD700');

  const fontSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const iconSize = useBreakpointValue({ base: '24px', md: '28px' });
  const paddingY = useBreakpointValue({ base: '8px', md: '10px' });
  const logoSize = useBreakpointValue({ base: '30px', md: '34px' });

  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <Box
      as="nav"
      bg={bgColor}
      px={{ base: 4, md: 6 }}
      py={paddingY}
      position="fixed"
      w="100%"
      zIndex="10"
      backdropFilter="blur(10px)"
      transition="background-color 0.2s ease-in-out"
    >
      <Flex h="full" alignItems="center" justifyContent="space-between">
        <ChakraLink as={ScrollLink} to="header" smooth duration={500} offset={-50}>
          <Image
            src={`${process.env.PUBLIC_URL}/img/logo-updated.png`}
            alt="Logo"
            boxSize={logoSize}
            objectFit="contain"
            cursor="pointer"
            transition="transform 0.3s ease-in-out"
            _hover={{ transform: 'scale(1.08)' }}
          />
        </ChakraLink>

        <HStack as="nav" spacing={5} display={{ base: 'none', md: 'flex' }} mx="auto">
          {sections.map((section) => (
            <ChakraLink
              as={ScrollLink}
              to={section.id}
              smooth
              duration={500}
              spy={true}
              offset={-60}
              key={section.id}
              fontSize={fontSize}
              fontWeight="medium"
              color={textColor}
              cursor="pointer"
              px={3}
              py={1}
              _hover={{ color: hoverTextColor }}
              transition="color 0.2s ease-in-out"
            >
              {section.name}
            </ChakraLink>
          ))}
        </HStack>

        <Flex alignItems="center">
          <Tooltip label={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'} fontSize="xs" hasArrow>
            <IconButton
              onClick={toggleColorMode}
              icon={isLightMode ? <MoonIcon /> : <SunIcon />}
              aria-label="Toggle Color Mode"
              bg="transparent"
              color={primaryColor}
              _hover={{ bg: 'transparent', color: textColor }}
              boxSize={iconSize}
              transition="all 0.3s ease-in-out"
            />
          </Tooltip>

          <IconButton
            size="lg"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Navigation"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color={textColor}
            _hover={{ bg: 'transparent', color: primaryColor }}
            boxSize={iconSize}
            ml={3}
            transition="all 0.3s ease-in-out"
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: 'none' }} textAlign="center">
          <Stack as="nav" spacing={4}>
            {sections.map((section) => (
              <ChakraLink
                as={ScrollLink}
                to={section.id}
                smooth
                duration={500}
                spy={true}
                offset={-60}
                key={section.id}
                px={3}
                py={2}
                _hover={{ color: hoverTextColor }}
                cursor="pointer"
                color={textColor}
                onClick={onClose}
                transition="color 0.2s ease-in-out"
              >
                {section.name}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
