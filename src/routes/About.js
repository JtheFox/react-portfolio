import { about, contactInfo } from '../assets/info';
import portrait from '../assets/portrait.jpg';
import {
  Box,
  Stack,
  VStack,
  Image,
  Text,
  Icon,
  List,
  ListItem,
  Heading,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Home() {
  const { statement, tools, languages, skills } = about;

  return (
    <VStack pt={{ base: 0, md: 6 }} spacing={12} >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        alignItems='center'
        justifyContent='center'
        spacing={{ base: 8, lg: 12 }}
        px={{ base: 4, md: 12, lg: '15%' }}>
        <ContactCard contactInfo={contactInfo} />
        <Stack alignItems='center' justifyContent={{ lg: 'right' }} direction={{ base: 'column', md: 'row' }}>
          <Image
            src={portrait}
            alt='Jason Fox'
            boxSize='128px'
            borderRadius='full'
            objectFit='cover'
            mr={{ base: 0, md: 10 }}
            mb={{ base: 2, md: 0 }}
            style={{ borderStyle: 'solid', borderWidth: '4px', borderColor: useColorModeValue('gray.100', 'gray.800') }} />
          <Text
            maxW={{ base: '90%', lg: '60%' }}
            fontSize={{ base: 'md', lg: 'sm' }}
            textAlign={{ base: 'center', md: 'left' }}>
            {statement}
          </Text>
        </Stack>
      </Stack>

      <Divider w='75%' />

      <Stack direction={['column', 'row']} spacing={{ base: 6, md: 16, lg: 36 }}>
        <SkillList label='Skills' list={skills} />
        <SkillList label='Languages' list={languages} />
        <SkillList label='Tools' list={tools} />
      </Stack>
    </VStack>
  )
}

function ContactCard({ contactInfo, ...props }) {
  return (
    <Box
      height='min-content'
      px={{ base: 5, md: 7 }}
      pt={{ base: 1, md: 4 }}
      pb={{ base: 2, md: 5 }}
      borderRadius='md'
      boxShadow='outline'
      {...props}>
      <Heading
        size={{ base: 'xl', md: 'lg' }}
        textAlign='center'>
        Contact Me
      </Heading>
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