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
  ListItem,
  OrderedList,
  Flex,
  HStack,
  Button,
  UnorderedList,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import TitleCard from '../components/TitleCard';
import Page from '../components/Page';
import SectionContent from '../components/SectionContent';

const License = () => {
  return (
    <Page>
      <TitleCard
        title="License"
        subtitle="Getting Your License"
        img_name="cover-images/license-cover"
      />
      <Flex alignItems="left" justify="left" w="full">
        <VStack w="full">
          <SectionContent
            title="Getting your License"
            subtitle="Getting your solo diving license is a great way to level up your
              diving. To do so you need to:"
          />
          <Text fontSize="3xl">Learn</Text>
          <Text>Take a jump course</Text>
          <Text fontSize="3xl">Solo Certification</Text>
          <Text>8 jumps with a coach, now you can jump alone</Text>
          <Text fontSize="3xl">A-License</Text>
          <Text>After 25 jumps yourself, you're fully certified!</Text>
        </VStack>
      </Flex>
      <SimpleGrid columns={2} minH="calc(50vh)" alignItems="center">
        <GridItem colSpan={1}>
          <SectionContent
            title="What can you do with a skydiving license?"
            subtitle="Skydive by yourself!"
          />
        </GridItem>
        <GridItem colSpan={1} textAlign="center">
          <Box
            as="video"
            controls
            src="/assets/license-skydive.mov"
            alt="licensed skydive video"
            objectFit="contain"
            sx={{
              aspectRatio: '16/9',
            }}
            p={2.5}
          />
        </GridItem>
      </SimpleGrid>
      <Flex
        alignItems="left"
        justify="left"
        // height="calc(30vh)"
        // bg="gray.50"
        w="full"
        // boxShadow="md"
      >
        <SimpleGrid columns={2} minH="calc(50vh)" alignItems="center">
          <GridItem align="center">
            <Image
              src="/assets/member-thumbs-up.jpg"
              alt="member-thumbs-up"
              boxSize="full"
              borderRadius="20%"
              maxW="80%"
            />
          </GridItem>
          <GridItem column={1} textAlign="left">
            <VStack p={8} m={8} align="left" fontSize="xl" rounded="lg">
              <SectionContent title="How much does it cost?" subtitle="" />
              {/* <Text align="left" fontSize="4xl">
                How much does it cost?{' '}
              </Text> */}
              <Box w="full">
                <Text>The full package includes:</Text>
              </Box>
              <UnorderedList pl={2.5}>
                <ListItem>First Jump Course</ListItem>
                <ListItem>7 AFF Jumps</ListItem>
                <ListItem>5 Coach Jumps</ListItem>
                <ListItem>12 Solo Jumps</ListItem>
                <ListItem>Packing Class w/ Test</ListItem>
                <ListItem>USPA A License Graduation Check Dive</ListItem>
                <ListItem>All gear rentals & pack jobs</ListItem>
              </UnorderedList>
              <SectionContent
                title=""
                subtitle="AirBears offers a discount to members, contact us for more
                information!"
                textAlign="left"
                subtitle_maxW="100%"
              />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Flex>
      <Box p={5} />
    </Page>
  );
};
export default License;
