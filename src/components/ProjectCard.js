import {
  HStack,
  Box,
  Image,
  Tag,
  Text,
  Heading,
  Link,
  Icon,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { LinkIcon } from '@chakra-ui/icons';
import { isValidLink } from '../utils/helpers';

export default function ProjectCard({ projectDetails, imageLink, ...props }) {
  const { title, date, image, live, repo, tags } = projectDetails;
  const linkHover = useColorModeValue('blue.600', 'blue.200');
  const lightText = useColorModeValue('blackAlpha.600', 'whiteAlpha.700');
  const cardBg = useColorModeValue('gray.50', 'gray.800');
  
  return (
    <Flex
      as='article'
      direction='column'
      className='card'
      minHeight='350px'
      minWidth='300px'
      maxHeight='350px'
      maxWidth='300px'
      py={6}
      px={8}
      borderRadius='xl'
      bg={cardBg}
      zIndex={0}
      {...props}>
      <Box as='header' className='card-header'>
        <Text color={lightText} fontSize='sm' my={1}>
          {date ?? 'Date unknown'}
        </Text>
        <Flex alignItems='center'>
          <Heading size='md'>
            {title ?? 'Untitled'}
          </Heading>
          {isValidLink(live) && <LinkIcon ml={2} as={'a'} _hover={{ color: linkHover, cursor: 'pointer' }} />}
        </Flex>
      </Box>
      <Flex
        className='card-body'
        direction='column'
        justifyContent='center'
        flex='1'>
        <Link ml='-0.25rem' href={imageLink ?? null}>
          <Image
            src={image}
            alt={title}
            maxHeight='150px'
            maxWidth='105%'
            m='auto'
            borderRadius='md'
            opacity='75%'
            transition='0.1s ease-in-out'
            _hover={{ opacity: '100%' }} />
        </Link>
      </Flex>
      <Box className='card-footer'>
        <Link href={repo}>
          <Flex alignItems='center' mb={2}>
            <Icon as={FaGithub} h='1rem' w='1rem' ml={1} mr={2} />
            <Text>Repository</Text>
          </Flex>
        </Link>
        <HStack>
          {Array.isArray(tags) && tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </HStack>
      </Box>
    </Flex>
  )
};
