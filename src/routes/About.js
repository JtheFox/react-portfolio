import { about, contactInfo } from '../assets/info';
import portrait from '../assets/portrait.jpg';
import {
  Flex,
  Box,
  Stack,
  VStack,
  Image,
  Text,
  Icon,
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
        pt={{ base: 0, md: 6 }}>
        <Image
          src={portrait}
          alt='Jason Fox'
          boxSize='128px'
          borderRadius='full'
          objectFit='cover'
          mr={{ base: 0, md: '1rem' }}
          mb={{ base: 2, md: 0 }}
          style={{ borderStyle: 'solid', borderWidth: '4px', borderColor: useColorModeValue('gray.100', 'gray.800') }} />
        <Text textAlign={{ base: 'center', md: 'left' }}>
          {statement}
        </Text>
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        mx='auto'
        py={{ base: 6, md: 12 }}>
        <Box>
          <Heading
            size={{ base: 'xl', md: 'lg' }}
            mr={{ base: 0, md: 6 }}
            mt={{ base: 0, md: 4 }}
            textAlign={{ base: 'center', md: 'right' }}>
            Contact Me
          </Heading>
        </Box>
        <Box>
          {contactInfo.map(({ type, icon, ref }) => (
            <Text
              key={type}
              fontSize='md'
              display='flex'
              alignItems='center'>
              <Icon as={icon} mr={2} />
              {ref}
            </Text>
          ))}
        </Box>
      </Flex>
      <Stack direction={['column', 'row']} spacing={{ base: 6, md: 16, lg: 36 }}>
        <SkillList label='Skills' list={skills} />
        <SkillList label='Languages' list={languages} />
        <SkillList label='Tools' list={tools} />
      </Stack>
    </VStack>
  )
}

function SkillList({ label, list }) {
  return (
    <List textAlign={{ base: 'center', md: 'left' }}>
      <Heading as='h3' size='xl' pb={1}>{label}</Heading>
      {list.map(item =>
        <ListItem key={item}>
          {item}
        </ListItem>)}
    </List>
  )
}