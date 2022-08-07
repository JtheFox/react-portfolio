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
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ projectDetails, ...props }) {
  const { title, date, image, live, repo, tags } = projectDetails;
  const linkHover = useColorModeValue('blue.600', 'blue.200');
  const lightText = useColorModeValue('blackAlpha.600', 'whiteAlpha.700');
  const cardBg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  return (
    <Flex
      as='article'
      direction='column'
      className='card'
      minHeight='350px'
      minWidth='300px'
      py={6}
      px={8}
      borderRadius='xl'
      bg={cardBg}
      {...props}>
      <Box as='header' className='card-header'>
        <Text color={lightText} fontSize='sm' my={1}>
          {date}
        </Text>
        <Heading
          as='a'
          href={(typeof live === 'string') && live}
          size='md'
          _hover={{ color: linkHover }}>
          {title ?? 'Untitled'}
        </Heading>
      </Box>
      <Flex
        className='card-body'
        direction='column'
        justifyContent='center'
        flex='1'>
        <Image
          src={image}
          alt={title}
          maxHeight='150px'
          maxWidth='105%'
          ml='-0.25rem'
          borderRadius='md'
          opacity='75%'
          transition='0.1s ease-in-out'
          _hover={{ opacity: '100%' }} />
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
