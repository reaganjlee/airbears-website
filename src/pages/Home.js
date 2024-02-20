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
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SectionContent from '../components/SectionContent';
import StatCardRow from '../components/StatCardRow';
import { BlackButton, ColoredButton } from '../components/Button';

const StatCardData = [
  {
    title: '100+',
    subtitle: 'Members',
  },
  {
    title: '50+',
    subtitle: 'Events',
  },
  {
    title: '90+',
    subtitle: 'Jumps',
  },
];

const Home = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Flex alignItems="center" height="calc(89vh)" pos="relative">
          <Image
            src="/assets/cover-images/bg-gradient.png"
            alt="skydiving-photo"
            boxSize="full"
            // bgSize="cover"
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            src="/assets/cover-images/iPad-bg.png"
            // alt="skydiving-photo"
            boxSize="full"
            bgSize="cover"
            alt="Mobile version"
            display={{ base: 'block', md: 'none' }}
          />

          <VStack
            pos="absolute"
            // pt="10"
            pl={{ base: '30px', md: '200px' }}
            textAlign="left"
            alignItems="left"
          >
            <Box>
              <Heading
                fontSize={{ base: '3xl', md: '6xl' }}
                display={{ base: 'none', md: 'block' }}
              >
                Air Bears: Skydiving at Berkeley
              </Heading>
              <VStack
                fontSize={{ base: '3xl', md: '6xl' }}
                display={{ base: 'block', md: 'none' }}
              >
                <Heading>Air Bears:</Heading>
                <Heading>Skydiving at Berkeley</Heading>
              </VStack>
              {/*               
              <Heading
                fontSize={{ base: '3xl', md: '6xl' }}
                display={{ base: 'block', md: 'none' }}
              >
                Air Bears: Skydiving at Berkeley
              </Heading> */}
            </Box>

            <Text fontSize={{ base: 'md', md: 'xl' }}>
              We are a student organization that fosters the welcoming community
              of skydivers at UC Berkeley.
            </Text>
            {/* AirBears at Berkeley is a student-run organization based 
          at the University of California, Berkeley dedicated to fostering a
           community of diverse and welcoming individuals by exposing community 
           members to the incredible and fear-conquering experience of skydiving 
           in a way that is as accessible as possible. (Est. 1969) */}

            <HStack pt="10px">
              <BlackButton
                text="Join Us"
                href="https://linktr.ee/calairbears/"
              />
              <ColoredButton text="Learn More" to="/about" />
            </HStack>
          </VStack>
        </Flex>
      </Box>
      <StatCardRow StatCardData={StatCardData} />
      <Flex padding={10} direction="column">
        <Flex direction={{ base: 'column', md: 'row' }} w="100%">
          <Flex
            maxW={{ base: '100%', md: '50%' }}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/assets/Frame 2.png"
              alt="skydiving-photo"
              boxSize="full"
              borderRadius="20%"
              // padding="100px"
              maxW="80%"
              // maxH="10%"
            />
          </Flex>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            maxW={{ base: '100%', md: '50%' }}
            pt={{ base: '5%', md: '0%' }}
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
              <BlackButton text="Learn More" to="/jump" />
            </VStack>
          </Box>
        </Flex>
        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          w="100%"
          pt={{ base: '5%', md: '0%' }}
        >
          <Flex
            maxW={{ base: '100%', md: '50%' }}
            justifyContent="center"
            alignItems="center"
            pt={{ base: '5%', md: '0%' }}
          >
            <VStack>
              <SectionContent
                title="Getting your License"
                subtitle="Learn to skydive on your own and potentially teach others how to
                skydive as well!"
              />
              <Link key="home-license-btn">
                <BlackButton text="Learn More" to="/license" />
              </Link>
            </VStack>
          </Flex>

          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            maxW={{ base: '100%', md: '50%' }}
          >
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
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};
export default Home;
