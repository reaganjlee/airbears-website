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

const IfContactUsText = ({ text }) => {
  const renderTextWithLinksAndNewlines = text => {
    // Split the text by new lines first
    return text.split('\\n').map((line, lineIndex, lineArray) => (
      <React.Fragment key={lineIndex}>
        {/* Split by "contact us" and map to either a Link or span */}
        {line.split(/(contact us)/i).map((part, partIndex) =>
          /contact us/i.test(part) ? (
            <Link
              key={partIndex}
              href="mailto:airbearssc@gmail.com"
              color="gray.500"
            >
              {part}
            </Link>
          ) : (
            <span key={partIndex}>{part}</span>
          )
        )}
        {/* Add a <br /> element after each line except the last one */}
        {lineIndex < lineArray.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return <>{renderTextWithLinksAndNewlines(text)}</>;
};
const SectionContent = ({
  title,
  subtitle,
  textAlign = 'center',
  subtitle_maxW = '70%',
}) => {
  function isString(text) {
    return typeof text === 'string';
  }
  return (
    <VStack
      alignItems={textAlign}
      justify={textAlign}
      w="100%"
      textAlign={textAlign}
    >
      {isString(title) && (
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>{title}</Heading>
      )}
      {!isString(title) && title}
      <Text fontSize={{ base: 'md', md: 'md' }} maxW={subtitle_maxW} pb={2.5}>
        {isString(subtitle) && <IfContactUsText text={subtitle} />}
        {!isString(subtitle) && subtitle}
      </Text>
    </VStack>
  );
};

export default SectionContent;
