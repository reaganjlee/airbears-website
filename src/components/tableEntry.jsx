import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

export default function tableEntry({ title, subtitle }) {
  return (
    <Flex direction="column" justifyContent="flex-start" h="100%">
      <Text>{title}</Text>
      <Text
        fontSize="sm"
        color="gray.400"
        fontWeight="normal"
        whiteSpace="pre-line"
      >
        {subtitle}
      </Text>
    </Flex>
  );
}
