import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  Container,
  Flex,
  HStack,
  Image,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';
import Details from '../components/details';
import Header from '../components/header';
import Footer from '../components/footer';
// import skydivingImage from '/skydiving-photo.jpg';

const Home = () => {
  return (
    <>
      <Header />
      <Flex
        alignItems="center"
        // justify="center"
        height="calc(89vh)"
        pos="relative"
      >
        <Image
          src="/assets/background2.png"
          alt="skydiving-photo"
          boxSize="full"
        />
        {/* <Image
          src="/assets/stretched-3.png"
          alt="skydiving-photo"
          boxSize="full"
        /> */}
        <VStack pos="absolute" pl="200px" textAlign="left" alignItems="left">
          <Heading fontSize="5xl">Air Bears: Skydiving at Berkeley</Heading>
          <Text fontSize="xl">
            We are a student organization that fosters the welcoming community
            of skydivers at UC Berkeley.
          </Text>
          {/* AirBears at Berkeley is a student-run organization based 
          at the University of California, Berkeley dedicated to fostering a
           community of diverse and welcoming individuals by exposing community 
           members to the incredible and fear-conquering experience of skydiving 
           in a way that is as accessible as possible. (Est. 1969) */}

          <HStack pt="10px">
            <Button
              variant="solid"
              bg="black"
              color="white"
              size="md"
              fontSize="md"
              p="20px"
            >
              Join us
            </Button>
            <Button variant="outline" bg="white" colorScheme="teal">
              Learn More
            </Button>
          </HStack>
        </VStack>
      </Flex>
      <Flex padding={10}>
        <SimpleGrid
          columns={2}
          columnGap={3}
          rowGap={6}
          w="full"
          align="center"
          maxW="1500px"
        >
          <GridItem colSpan={1}>
            <Image
              src="/assets/Frame 2.png"
              alt="skydiving-photo"
              boxSize="full"
              borderRadius="20%"
              // padding="100px"
              maxW="80%"
            />
          </GridItem>
          <GridItem
            colSpan={1}
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Flex
              alignItems="center"
              justify="center"
              // height="calc(30vh)"
              flexDirection="column"
              fontSize="xl"
            >
              <Heading fontSize="3xl">Jump Days</Heading>
              <Text>Take your first jump!</Text>
              <Link key="home-jump-btn">
                <Button> Learn More </Button>
              </Link>
            </Flex>
          </GridItem>
          <GridItem
            colSpan={1}
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <VStack alignItems="center" justify="center" height="calc(30vh)">
              <Heading fontSize="3xl">Getting your License</Heading>
              <Text fontSize="xl" maxW="70%">
                Learn to skydive on your own and potentially teach others how to
                skydive as well!
              </Text>
              <Link key="home-license-btn">
                <Button> Learn More </Button>
              </Link>
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex justifyContent="center">
              <Image
                src="/assets/Frame-1.png"
                alt="skydiving-photo"
                boxSize="full"
                // padding="100px"
                maxW="80%"
                borderRadius="20%"
              />
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Flex>
      {/* <Flex alignItems="center" justify="center" height="calc(60vh)">
        <VStack>
          <Text fontSize="5xl">Sponsors</Text>
          <Text fontSize="xl">
            If you are interested in sponsoring AirBears, please contact us
          </Text>
          <SimpleGrid
            columns={2}
            columnGap={3}
            rowGap={6}
            w="full"
            textAlign="center"
          >
            <GridItem colSpan={1}>Photo</GridItem>
            <GridItem colSpan={1}>Photo</GridItem>
          </SimpleGrid>
        </VStack>
      </Flex> */}
      <Footer />
    </>
  );
};
export default Home;
