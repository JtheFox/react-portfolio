import {
  Heading,
  Flex,
  Spacer,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink as Link } from "react-router-dom";
import ThemeButton from './ThemeButton';

export default function Navbar() {
  const offsetbg = useColorModeValue('gray.100', 'gray.700');
  const navLinks = [
    {
      path: '/',
      title: 'About'
    },
    {
      path: '/portfolio',
      title: 'Portfolio'
    }
  ]

  return (
    <Flex
      as='header'
      px={16}
      py={4}
      bg={offsetbg}
      maxW='100vw'>
      <Heading as='h1'>Jason Fox</Heading>
      <Spacer />
      <HStack spacing={10}>
        <HStack
          as='nav'
          fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
          spacing={4}>
          {navLinks.map((link, i) => (
            <NavLink key={i} navRef={link} />
          ))}
        </HStack>
        <ThemeButton />
      </HStack>
    </Flex >
  )
}

function NavLink({ navRef }) {
  const linkHover = useColorModeValue('blue.600', 'blue.200');
  let activeStyle = { textDecoration: 'underline', color: linkHover };
  const { path, title } = navRef;

  if (!path && !title) return;
  return (
    <Link
      to={path}
      style={({ isActive }) => isActive ? activeStyle : undefined}
      _hover={{ color: linkHover }}>
      {title}
    </Link>
  )
}