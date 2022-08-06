import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label='Toggle theme'
      bg={useColorModeValue('gray.200', 'gray.600')}
      _hover={{ bg: useColorModeValue('gray.300', 'gray.500') }}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  )
}