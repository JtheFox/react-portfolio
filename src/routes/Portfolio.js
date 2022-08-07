import ProjectCard from '../components/ProjectCard';
import { projects } from '../assets/info';
import {
  HStack,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';

export default function Portfolio() {
  return (
    <HStack>
      <ProjectCardList projectList={projects} />
    </HStack>
  )
};

function ProjectCardList({ projectList }) {
  const cardShadow = {
    base: useColorModeValue('-0.5rem 0 1rem rgba(0, 0, 0, 0.06)', '-0.5rem 0 1rem rgba(0, 0, 0, 0.80)'),
    lg: useColorModeValue('-1rem 0 1.5rem rgba(0, 0, 0, 0.12)', '-1rem 0 1.5rem rgba(0, 0, 0, 0.60)')
  }
  const listStyles = {
    '&': {
      overflowX: 'auto',
      overflowY: 'visible',
    },
    '&::-webkit-scrollbar': {
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

  return (
    <Flex
      p={{ base: '0 10% 0.75rem', lg: '2rem' }}
      sx={listStyles}>
      {Array.isArray(projectList) && projectList.reverse().map(project => (
        <ProjectCard
          key={project.title}
          projectDetails={project}
          boxShadow={cardShadow}
        />
      ))}
    </Flex>
  )
}