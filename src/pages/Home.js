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
import Page from '../components/Page';

const StatCardData = [
  {
    title: '👥 100+',
    subtitle: 'Members',
  },
  {
    title: '🎤 50+',
    subtitle: 'Events',
  },
  {
    title: '🪂 90+',
    subtitle: 'Jumps',
  },
];

const Home = () => {
  return (
    <>
      <NavBar />
      <Box>
        <Flex alignItems="center" h="80vh" pos="relative" maxH="800px">
          <Image
            src="/assets/cover-images/home-bg-desktop.png"
            alt="Desktop background"
            boxSize="full"
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            src="/assets/cover-images/home-bg-phone.png"
            boxSize="full"
            bgSize="cover"
            alt="Mobile background"
            display={{ base: 'block', md: 'none' }}
          />

          <VStack
            pos="absolute"
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
            </Box>

            <Text fontSize={{ base: 'md', md: 'xl' }}>
              We are a student organization that fosters the welcoming community
              of skydivers at UC Berkeley.
            </Text>

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
      <Flex justify="center" alignItems="center">
        <Box maxW="1440px">
          <StatCardRow StatCardData={StatCardData} />
          <Flex direction="column" alignItems="center">
            <ImageFeatureSection
              imgSrc="/assets/Frame-2.png"
              altText="skydiving-photo"
              title="Jump Days"
              subtitle="Have the chance to experience the unparalleled rush of 
          freefall, paired with the calm glide down under a parachute, 
          all alongside an expert diver"
              buttonText="Learn More"
              buttonLink="/jump"
            />
            <Box>
              <ImageFeatureSection
                imgSrc="/assets/Frame-1.png"
                altText="skydiving-photo"
                title="Getting your License"
                subtitle="Embark on the thrilling journey of obtaining your 
            skydiving license with us. Learn to solo skydive and have the 
            chance to share the experience with the Cal community by teaching others!"
                buttonText="Learn More"
                buttonLink="/license"
                direction={{ base: 'column', md: 'row-reverse' }}
              />
            </Box>
          </Flex>
          <Footer />
        </Box>
      </Flex>
    </>
  );
};
export default Home;
