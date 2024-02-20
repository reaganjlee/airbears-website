import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  VStack,
  Box,
  Link,
  Text,
  Heading,
} from '@chakra-ui/react';
import React from 'react';

const SectionContent = ({
  title,
  subtitle,
  textAlign = 'center',
  subtitle_maxW = '70%',
}) => {
  return (
    <VStack
      alignItems={textAlign}
      justify={textAlign}
      w="100%"
      textAlign={textAlign}
    >
      <Heading fontSize={{ base: '2xl', md: '3xl' }}>{title}</Heading>
      <Text fontSize={{ base: 'md', md: 'md' }} maxW={subtitle_maxW} pb={2.5}>
        <IfContactUsText text={subtitle} />
      </Text>
    </VStack>
  );
};
const IfContactUsText = ({ text }) => {
  const hasContactUs = text.toLowerCase().includes('contact us');
  if (hasContactUs) {
    const parts = text.split(/(contact us)/i);
    return parts.map((part, index) =>
      /contact us/i.test(part) ? (
        <Link
          key={index}
          href="https://linktr.ee/calairbears/"
          color="gray.500"
        >
          {part}
        </Link>
      ) : (
        <React.Fragment key={index}>{part}</React.Fragment>
      )
    );
  } else {
    return <>{text}</>;
  }
};
export default SectionContent;
