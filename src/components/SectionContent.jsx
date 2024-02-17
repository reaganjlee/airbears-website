import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  VStack,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react';

const SectionContent = ({ title, subtitle }) => {
  return (
    <VStack alignItems="center" justify="center" w="100%">
      <Heading fontSize="3xl">{title}</Heading>
      <Text fontSize="xl" maxW="70%" pb="10px">
        {subtitle}
      </Text>
    </VStack>
  );
};

export default SectionContent;
