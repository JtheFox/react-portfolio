import ProjectCard from '../components/ProjectCard';
import { projects } from '../assets/info';
import {
  Container,
  Flex,
  Image,
  Box,
  Heading,
  Text,
  Spacer,
  useColorModeValue
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import { titleToId } from '../utils/helpers';
import { isValidLink } from '../utils/helpers';

export default function Portfolio() {
  const myProjects = Array.from(projects).reverse();
  return (
    <Flex direction='column'>
      <ProjectCardList projectList={myProjects} mb={6} />
      <ProjectDescList projectList={myProjects} />
    </Flex>
  )
};

function ProjectCardList({ projectList, ...props }) {
  const cardShadow = {
    base: useColorModeValue('-0.5rem 0 1rem rgba(0, 0, 0, 0.06)', '-0.5rem 0 1rem rgba(0, 0, 0, 0.80)'),
    lg: useColorModeValue('-0.5rem 0 1.5rem rgba(0, 0, 0, 0.12)', '-0.5rem 0 1.5rem rgba(0, 0, 0, 0.60)')
  }
  const listStyles = {
    '&': {
      overflowX: 'auto',
      overflowY: 'visible',
    },
    '&::-webkit-scrollbar': {
      display: { base: 'block', lg: 'none' },
      w: '0.75rem',
      h: '0.75rem'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '0.5rem',
      background: useColorModeValue('white', 'gray.800'),
      boxShadow: useColorModeValue(
        'inset 0.2rem 0.2rem 0.2rem rgba(200, 200, 225, 0.25), inset -0.2rem -0.2rem 0.2rem rgba(0, 0, 15, .15)',
        'inset 0.2rem 0.2rem 0.2rem rgba(55, 55, 85, 0.35), inset -0.2rem -0.2rem 0.2rem rgba(0, 0, 15, .25)'
      ),
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '0.5rem',
      boxShadow: useColorModeValue(
        'inset 0.2rem 0.2rem 0.2rem rgba(100, 100, 115, .15), inset -0.2rem -0.2rem 0.2rem rgba(100, 100, 115, .15)',
        'inset 0.2rem 0.2rem 0.2rem rgba(0, 0, 15, .25), inset -0.2rem -0.2rem 0.2rem rgba(0, 0, 15, .25)',
      ),
    }
  }
  const cardStyles = {
    '&': {
      ml: { base: '-0.5rem', lg: 0 },
      transition: { lg: '0.2s ease-in-out' }
    },
    '&:not(:first-of-type)': {
      ml: { lg: '-3rem' }
    },
    '&:hover': {
      transform: { lg: 'translateY(-1rem)' }
    },
    '&:hover~&': {
      transform: { lg: 'translateX(3rem)' }
    }
  }

  return (
    <Flex
      p={{ base: '1rem 2rem', lg: '2rem' }}
      mx='auto'
      maxW='100vw'
      sx={listStyles}
      {...props}>
      {Array.isArray(projectList) && projectList.reverse().map(project => (
        <ProjectCard
          key={project.title}
          projectDetails={project}
          boxShadow={cardShadow}
          imageLink={`#${titleToId(project.title)}`}
          sx={cardStyles}
        />
      ))}
    </Flex>
  )
}

function ProjectDescList({ projectList, ...props }) {
  const zebrastripe = useColorModeValue('blackAlpha.50', 'whiteAlpha.50');

  return (
    <Flex direction='column' maxW='100vw' {...props}>
      {projectList.map(({ image, title, desc, live }) => (
        <Flex
          key={title}
          id={titleToId(title)}
          direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'start' }}
          px={{ base: 4, lg: 20 }}
          py={4}
          _even={{ bg: zebrastripe }}>
          <Container w={{ base: 'xs', md: 'sm', lg: 'md' }}>
            <Image
              src={image}
              alt={title}
              maxH={'2xs'}
              ml='auto'
              borderRadius='md' />
          </Container>
          <Spacer />
          <Box w={{ base: 'xs', md: 'sm', lg: '50%' }} textAlign={{ base: 'center', md: 'left' }}>
            <Heading>
              {title ?? 'Untitled'}
            </Heading>
            {isValidLink(live) &&
              <Heading
                as='a'
                href={live}
                fontWeight='none'
                size={{ base: 'xs', md: 'sm', lg: 'md' }}
                _hover={{ textDecoration: 'underline' }}>
                Live Site <LinkIcon />
              </Heading>
            }
            <Text mt={2}>
              {((typeof desc === 'string' && desc.length > 0) && desc) || 'No description provided.'}
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}