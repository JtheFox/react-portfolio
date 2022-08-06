import {
  HStack,
  Box,
  Image,
  Tag,
  Text,
  Heading,
  Link,
  Icon,
  Flex
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ projectDetails }) {
  const { title, date, image, live, repo, tags } = projectDetails;

  return (
    <Box
      as='article'
      h='250px'
      w='200px'
      borderRadius='md'
      boxShadow='lg'>
      <Box as='header'>
        <Text>{date}</Text>
        <Heading as='h3' size='md'>{title}</Heading>
      </Box>
      <Link href={repo}>
        <Flex alignItems='center'>
          <Icon as={FaGithub} h='1rem' w='1rem' />
          <Text>Repository</Text>
        </Flex>
      </Link>
    </Box>
  )
};
