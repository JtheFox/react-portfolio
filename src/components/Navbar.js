import { Heading, Flex, Spacer, HStack } from '@chakra-ui/react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <Flex as='header'>
      <Heading as='h1'>Jason Fox</Heading>
      <Spacer />
      <HStack as='nav'>
        <NavLink
          to='/'
          style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
          About
        </NavLink>
      </HStack>
    </Flex>
  )
}