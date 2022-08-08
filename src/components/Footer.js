import {
  Flex,
  Icon,
  Link,
  Tooltip,
  Code,
  Box,
  useColorModeValue
} from '@chakra-ui/react';
import { links, sourceCode } from '../assets/info';

export default function Footer() {
  const linkHover = useColorModeValue('blue.600', 'blue.200');
  const offsetbg = useColorModeValue('blackAlpha.300', 'gray.700');

  return (
    <Box
      as='footer'
      bg={offsetbg}
      pt={2}
      pb={1}
      textAlign='center'>
      <Flex
        justifyContent='center'
        spacing='1rem'>
        {links.map(({ name, desc, url, icon }) => {
          return (
            <Tooltip key={name} label={desc} placement='top'>
              <Link href={url} pt={1} px={3}>
                <Icon
                  as={icon}
                  w={8}
                  h={8}
                  _hover={{ color: linkHover }}
                >
                </Icon>
              </Link>
            </Tooltip>
          )
        })}
      </Flex>
      <Link
        as={Code}
        href={sourceCode}
        bg='none'>
        Source Code
      </Link>
    </Box>
  )
}

