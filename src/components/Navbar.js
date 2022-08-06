import {
  Heading,
  Flex,
  Spacer,
  HStack,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  MoonIcon,
  SunIcon,
} from '@chakra-ui/icons';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Flex as='header' px={16} py={4}>
      <Heading as='h1'>Jason Fox</Heading>
      <Spacer />
      <HStack spacing={10}>
        <HStack as='nav'>
          <NavLink
            to='/'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
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