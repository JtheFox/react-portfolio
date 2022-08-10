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

export default function Footer(props) {
  const linkHover = useColorModeValue('blue.600', 'blue.200');
  const offsetbg = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as='footer'
      bg={offsetbg}
      pt={2}
      pb={1}
      textAlign='center'
      h='70px'
      {...props}>
      <Flex
        justifyContent='center'
        spacing='1rem'>
        {links.map(({ name, desc, url, icon }) => {
          return (
            <Tooltip key={name} label={desc} placement='top'>
              <Link href={url} pt={1} px={2}>
                <Icon
                  as={icon}
                  w={6}
                  h={6}
                  _hover={{ color: linkHover }}
                >
                </Icon>
              </Link>
            </Tooltip>
          )
        })}
      </Flex>
      <Code
        as='a'
        href={sourceCode}
        bg='none'
        _hover={{ textDecoration: 'underline' }}>
        Source Code
      </Code>
    </Box>
  )
}

