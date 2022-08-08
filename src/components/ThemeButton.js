import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function ThemeButton(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label='Toggle theme'
      bg={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      ml='0 !important'
      _hover={{ bg: useColorModeValue('blackAlpha.300', 'whiteAlpha.300') }}
      {...props}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </IconButton>
  )
}