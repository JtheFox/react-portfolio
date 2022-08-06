import ProjectCard from '../components/ProjectCard';
import { projects } from '../assets/info';
import {
  HStack
} from '@chakra-ui/react';

export default function Portfolio() {
  return (
    <HStack>
      {projects.map(project => {
        return <ProjectCard key={project.title} projectDetails={project} />
      })}
    </HStack>
  )
};
