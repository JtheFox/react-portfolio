import { about } from '../assets/info';
import portrait from '../assets/portrait.jpg';
import {
  Flex,
  Stack,
  VStack,
  Image,
  Text,
  List,
  ListItem,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Home() {
  const { statement, tools, languages, skills } = about;

  return (
    <VStack>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent='center'
        alignItems='center'
        px={{ base: 4, md: '10%', lg: '25%' }}
        pt={{base: 0, md: 6}}
        pb={{base: 6, md: 12}}>
        <Image
          src={portrait}
          alt='Jason Fox'
          boxSize='128px'
          borderRadius='full'
          objectFit='cover'
          mr={{ base: 0, md: '1rem' }}
          mb={{ base: 2, md: 0}}
          style={{ borderStyle: 'solid', borderWidth: '4px', borderColor: useColorModeValue('gray.100', 'gray.800') }} />
        <Text textAlign={{ base: 'center', md: 'left' }}>
          {statement}
        </Text>
      </Flex>
      <Stack direction={['column', 'row']} spacing={{ base: 6, md: 16, lg: 36 }}>
        <SkillList name='Skills' list={skills} />
        <SkillList name='Languages' list={languages} />
        <SkillList name='Tools' list={tools} />
      </Stack>
    </VStack>
  )
}

function SkillList({ name, list }) {
  return (
    <List textAlign={{ base: 'center', md: 'left' }}>
      <Heading as='h3' size='xl' pb={1}>{name}</Heading>
      {list.map(item =>
        <ListItem key={item}>
          {item}
        </ListItem>)}
    </List>
  )
}