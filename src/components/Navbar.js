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

  return (
    <Flex as='header' px={16} py={4} bg={offsetbg}>
      <Heading as='h1'>Jason Fox</Heading>
      <Spacer />
      <HStack spacing={10}>
        <HStack as='nav'>
          <NavLink path='/' title='About' />
          <NavLink path='/portfolio' title='Portfolio' />
        </HStack>
        <ThemeButton />
      </HStack>
    </Flex >
  )
}

function NavLink({ path, title }) {
  const linkHover = useColorModeValue('blue.600', 'blue.200');
  let activeStyle = { textDecoration: 'underline', color: linkHover };

  return (
    <Link
      to={path}
      style={({ isActive }) => isActive ? activeStyle : undefined}
      _hover={{ color: linkHover }}>
      {title}
    </Link>
  )
}