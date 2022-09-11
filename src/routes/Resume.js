import { AspectRatio } from '@chakra-ui/react';
import { resumeURL } from '../assets/info';

export default function Resume() {
  return (
    <AspectRatio w='560px' maxW='100vw' ratio={{base: 0.75, md: 0.8}} m='auto'>
      <iframe
        title='Jason Fox Resume'
        src={resumeURL + '?embedded=true'}
      />
    </AspectRatio>
  )
}