import { about } from '../assets/info';
import portrait from '../assets/portrait.jpg';
import { Stack, VStack, Image, Text } from '@chakra-ui/react';

export default function Home() {
  const { statement, tools, languages, skills } = about;

  return (
    <VStack>
      <Stack direction={['column', 'row']} px={{base: 4, md: '25%'}}>
        <Image 
        src={portrait}
        alt='Jason Fox'
        boxSize='128px'
        m='auto'
        borderRadius='full'
        objectFit='cover' />
        <Text textAlign={{base: 'center', md: 'left'}}>{statement}</Text>
      </Stack>
    </VStack>
  )
}