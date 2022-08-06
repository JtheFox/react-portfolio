import {
  Heading,
  Flex,
  Spacer,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from "react-router-dom";
import ThemeButton from './ThemeButton';

export default function Navbar() {
  const linkHover = useColorModeValue('blue.600', 'blue.200');
  const offsetbg = useColorModeValue('gray.100', 'gray.700');
  let activeStyle = { textDecoration: 'underline', color: linkHover };

  return (
    <Flex as='header' px={16} py={4} bg={offsetbg}>
      <Heading as='h1'>Jason Fox</Heading>
      <Spacer />
      <HStack spacing={10}>
        <HStack as='nav'>
          <NavLink
            to='/'
            style={({ isActive }) => isActive ? activeStyle : undefined}
            _hover={{ color: linkHover }}>
            About
          </NavLink>
        </HStack>
        <ThemeButton />
      </HStack>
    </Flex >
  )
}