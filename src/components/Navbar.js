import {
  Heading,
  Flex,
  Spacer,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const linkHover = useColorModeValue('blue.600', 'blue.100');

  let activeStyle = { textDecoration: 'underline', color: linkHover };

  return (
    <Flex as='header' px={16} py={4}>
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
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Flex >
  )
}