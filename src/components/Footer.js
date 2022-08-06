import { Flex, Icon, Link, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { links } from '../assets/info';

export default function Footer() {
  const linkHover = useColorModeValue('blue.600', 'blue.100');

  return (
    <footer>
      <Flex justifyContent='center' spacing='1rem'>
        {links.map(({ name, desc, url, icon }) => {
          return (
            <Tooltip key={name} label={desc} placement='top'>
              <Link href={url} p={3}>
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
    </footer>
  )
}

