import {
  Heading,
  Flex,
  Box,
  HStack,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import { NavLink as Link } from "react-router-dom";
import ThemeButton from './ThemeButton';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const offsetbg = useColorModeValue('blackAlpha.300', 'gray.700');
  const navLinks = [
    {
      path: '/',
      label: 'About'
    },
    {
      path: '/portfolio',
      label: 'Portfolio'
    }
  ]

  return (
    <Box>
      <Flex
        as='header'
        justifyContent='space-between'
        px={{ base: 2, md: 6, lg: 10 }}
        py={{ base: 1, md: 2 }}
        bg={offsetbg}
        maxW='100vw'>
        <Flex
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={6} h={6} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Heading as='h1' textAlign='center'>
          Jason Fox
        </Heading>
        <HStack spacing={10}>
          <DesktopNav navLinks={navLinks} />
          <ThemeButton ml={{ base: '0 !important', md: '1rem !important', lg: '2rem !important' }} />
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navLinks={navLinks} />
      </Collapse>
    </Box>
  )
}

function DesktopNav({ navLinks, ...props }) {
  if (!navLinks) return;

  return (
    <HStack
      as='nav'
      display={{ base: 'none', md: 'inline-flex' }}
      fontSize={{ base: 'lg', lg: 'xl' }}
      spacing={4}
      {...props}>
      {navLinks.map((link, i) => (
        <NavLink key={i} navRef={link} />
      ))}
    </HStack>
  )
}

function MobileNav({ navLinks, ...props }) {
  const mobileNavBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.200');

  if (!navLinks) return;

  return (
    <Flex
      display={{ md: 'none' }}
      bg={mobileNavBg}
      {...props}>
      {navLinks.map((link, i) => (
        <NavLink key={i} navRef={link} format='mobile' />
      ))}
    </Flex>
  )
}

function NavLink({ navRef, format }) {
  const mobileNavBorder = useColorModeValue('blackAlpha.200', 'whiteAlpha.200');
  let activeStyle = { fontWeight: 500 };
  const { path, label } = navRef;

  if (!path && !label) return;

  if (format === 'mobile') return (
    <Box
      px={5}
      py={2}
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={mobileNavBorder}>
      <Link
        to={path}
        style={({ isActive }) => isActive ? activeStyle : undefined}>
        {label}
      </Link>
    </Box>
  )

  return (
    <Link
      to={path}
      style={({ isActive }) => isActive ? { textDecoration: 'underline', ...activeStyle } : undefined}>
      {label}
    </Link>
  )
}