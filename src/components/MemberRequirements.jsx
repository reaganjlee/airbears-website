import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
  theme,
  Container,
  Heading,
  ListItem,
  OrderedList,
  Flex,
  HStack,
  Button,
  UnorderedList,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import SectionContent from '../components/SectionContent';

const MemberRequirements = () => {
  return (
    <VStack
      alignItems="center"
      rounded="lg"
      textAlign="center"
      w="80%"
      align="center"
    >
      <SectionContent
        title="To become a member you must follow these three steps:"
        subtitle=""
      />
      <Box w="full">
        <Text>Membership Requirements</Text>
      </Box>
      <Box w="60%">
        <UnorderedList pl={2.5} textAlign="left">
          <ListItem>
            Pay a membership fee of $30 (this money goes towards socials, Jump
            Day transportation, and food) to our venmo @airbears
          </ListItem>
          <ListItem>
            Sign the Air Bears Waiver found in our <Link to="/">linktree</Link>
          </ListItem>
          <ListItem>
            Submit a membership intake form found in our{' '}
            <Link to="/">linktree</Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <SectionContent
          title=""
          subtitle="Once you have completed these steps you are an official member and you will be added to our mailing list in 3-5 business days. If you have completed these steps and have not received any emails from us, please contact us.

          \n\n If you fail to complete any one of these steps you are NOT an official member of this club and are NOT ELIGIBLE to receive Air Bears benefits including: access to Air Bears discount, signing up for jump days, socials, and other perks."
          // textAlign="left"
          subtitle_maxW="100%"
        />
      </Box>
    </VStack>
  );
};
export default MemberRequirements;
