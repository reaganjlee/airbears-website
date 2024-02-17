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
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionContent from '../components/SectionContent';

const Home = () => {
  return (
    <>
      <Header />
      <Flex alignItems="center" height="calc(89vh)" pos="relative">
        <Image
          src="/assets/cover-images/bg-gradient.png"
          alt="skydiving-photo"
          boxSize="full"
        />
        <VStack pos="absolute" pl="200px" textAlign="left" alignItems="left">
          <Heading fontSize="6xl">Air Bears: Skydiving at Berkeley</Heading>
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
              _hover={{ bg: 'gray.600' }}
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
            <VStack>
              <SectionContent
                title="Jump Days"
                subtitle="
              Have an opportunity to experience the 
              rush of freefall followed by a parachute 
              glide down with an expert diver
              "
              />
              <Link key="home-license-btn">
                <Button> Learn More </Button>
              </Link>
            </VStack>
          </GridItem>
          <GridItem
            colSpan={1}
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <VStack>
              <SectionContent
                title="Getting your License"
                subtitle="Learn to skydive on your own and potentially teach others how to
                skydive as well!"
              />
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
      <Footer />
    </>
  );
};
export default Home;
