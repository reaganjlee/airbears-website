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
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitleCard from '../components/TitleCard';

const License = () => {
  return (
    <>
      <Header />
      <TitleCard
        title="License"
        subtitle="Getting Your License"
        img_name="group-solos"
        maxH_vh={80}
      />
      <Flex
        alignItems="left"
        justify="left"
        // height="calc(30vh)"

        w="full"
      >
        <VStack p="30px" m="30px" align="left" fontSize="xl" rounded="lg">
          <Text align="left" fontSize="4xl">
            Getting Your License{' '}
          </Text>
          <Box w="full">
            <Text>
              Getting your solo diving license is a great way to level up your
              diving. To do so you need to:
            </Text>
          </Box>
          <OrderedList pl="10px">
            <ListItem fontSize="3xl">Learn</ListItem>
            <Text>Take a jump course</Text>
            <ListItem fontSize="3xl">Solo Certification</ListItem>
            <Text>8 jumps with a coach, now you can jump alone</Text>
            <ListItem fontSize="3xl">A-License</ListItem>
            <Text>After 25 jumps yourself, you're fully certified!</Text>
          </OrderedList>
        </VStack>
      </Flex>
      <SimpleGrid columns={2} minH="calc(50vh)" alignItems="center">
        <GridItem colSpan={1}>
          <Text textAlign="center" fontSize="3xl">
            What can you do with a skydiving license?
          </Text>
          <Text textAlign="center" fontSize="xl">
            Skydive by yourself!
          </Text>
        </GridItem>
        <GridItem colSpan={1} textAlign="center">
          {/* <Box w="426px" h="240px" bg="red" /> */}
          <Box
            as="video"
            controls
            src="/assets/license-skydive.mov"
            alt="licensed skydive video"
            objectFit="contain"
            sx={{
              aspectRatio: '16/9',
            }}
            p="10px"
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
              // padding="100px"
              maxW="80%"
            />
          </GridItem>
          <GridItem column={1}>
            <VStack p="30px" m="30px" align="left" fontSize="xl" rounded="lg">
              <Text align="left" fontSize="4xl">
                How much does it cost?{' '}
              </Text>
              <Box w="full">
                <Text>The full package includes:</Text>
              </Box>
              <UnorderedList pl="10px">
                <ListItem>First Jump Course</ListItem>
                <ListItem>7 AFF Jumps</ListItem>
                <ListItem>5 Coach Jumps</ListItem>
                <ListItem>12 Solo Jumps</ListItem>
                <ListItem>Packing Class w/ Test</ListItem>
                <ListItem>USPA A License Graduation Check Dive</ListItem>
                <ListItem>All gear rentals & pack jobs</ListItem>
              </UnorderedList>
              <Text>
                AirBears offers a discount to members, contact us for more
                information!
              </Text>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </Flex>
      <Box p="20px" />
      <Footer />
    </>
  );
};
export default License;
