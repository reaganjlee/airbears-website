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
import { ImageFeatureSection } from '../components/FeatureSection';
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
        <Flex alignItems="center" height="36rem" pos="relative">
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
            pl={{ base: 8, md: 48 }}
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

            <HStack pt={2.5}>
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
        <ImageFeatureSection
          imgSrc="/assets/Frame 2.png"
          altText="skydiving-photo"
          title="Jump Days"
          subtitle="
        Have an opportunity to experience the 
        rush of freefall followed by a parachute 
        glide down with an expert diver
        "
          buttonText="Learn More"
          buttonLink="/jump"
        />
        <Box pt={{ base: '5%', md: '0%' }}>
          <ImageFeatureSection
            imgSrc="/assets/Frame-1.png"
            altText="skydiving-photo"
            title="Getting your License"
            subtitle="Learn to skydive on your own and potentially teach others how to
          skydive as well!"
            buttonText="Learn More"
            buttonLink="/license"
            direction={{ base: 'column', md: 'row-reverse' }}
          />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};
export default Home;
