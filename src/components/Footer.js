import { Flex, Icon, Link, Tooltip } from '@chakra-ui/react';
import { links } from '../assets/info';

export default function Footer() {
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

