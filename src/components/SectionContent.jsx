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
      <Heading fontSize="3xl">{title}</Heading>
      <Text fontSize="xl" maxW={subtitle_maxW} pb="10px">
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
        <Link key={index} href="/contact" color="blue.500">
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

// const SectionContent = ({ title, subtitle }) => {
//   const hasContactUs = subtitle.toLowerCase().includes('contact us');
//   if (hasContactUs) {
// const renderSubtitleWithLink = () => {
//   const parts = subtitle.split(/(contact us)/i);
//   return parts.map((part, index) =>
//     /contact us/i.test(part) ? (
//       <Link key={index} href="/contact" color="blue.500">
//         {part}
//       </Link>
//     ) : (
//           // if nothing, plain text
//           <React.Fragment key={index}>{part}</React.Fragment>
//         )
//       );
//     };
//   } else {
//     return (
//       <VStack alignItems="center" justify="center" w="100%">
//         <Heading fontSize="3xl">{title}</Heading>
//         <Text fontSize="xl" maxW="70%" pb="10px">
//           {subtitle}
//         </Text>
//       </VStack>
//     );
//   }
// };

export default SectionContent;
