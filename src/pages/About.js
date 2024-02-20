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
  Container,
  Flex,
  HStack,
  Button,
  Image,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';

import TitleCard from '../components/TitleCard';
import ProfileCard from '../components/ProfileCard';
import Page from '../components/Page';

const About = () => {
  return (
    <Page>
      <TitleCard
        title="About"
        subtitle="Meet our officers and alumni"
        img_name="cover-images/mountain-bg"
      />
      <Flex alignItems="center" justify="center">
        <Text maxW="80%" fontSize={{ base: 'sm', md: 'xl' }}>
          AirBears at Berkeley is a student-run organization based at the
          University of California, Berkeley dedicated to fostering a community
          of diverse and welcoming individuals by exposing community members to
          the incredible and fear-conquering experience of skydiving in a way
          that is as accessible as possible. (Est. 1969)
        </Text>
      </Flex>
      <Flex alignItems="center" justify="center" mt="calc(5vh)">
        {/* <VStack> */}
        <Text fontSize="3xl" pb="calc(5vh)">
          Officers
        </Text>
      </Flex>
      <Flex
        alignItems="start"
        justify="center"
        direction="row"
        wrap="wrap"
        w="100%"
      >
        <ProfileCard
          title="Trevor Shin"
          subtitle="President"
          bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
          img_name="Trevor Shin - President.png"
        />
        <ProfileCard
          title="Andrew Kim"
          subtitle="Vice President"
          bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
          img_name="Andrew Kim - Vice President.png"
        />

        <ProfileCard
          title="Savanna Aguayo"
          subtitle="External Head of Operations"
          bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
          img_name="Savanna Aguayo - External Head of Operations.png"
        />
        <ProfileCard
          title="Keyla Barcenas"
          subtitle="Internal Head of Operations"
          bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
          img_name="Keyla Barcenas - Internal Head of Operations.png"
        />
        <ProfileCard
          title="Isaac Schultz"
          subtitle="Treasurer"
          bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
          img_name="Isaac Schultz - Treasurer.png"
        />
        <ProfileCard
          title="Ahmed AlBadrani"
          subtitle="Jump Day Coordinator"
          bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
          img_name="Ahmed AlBadrani - Jump Day Coordinator.png"
        />
        <ProfileCard
          title="Zane Levine"
          subtitle="Licensing Coordinator"
          bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
          img_name="Zane Levine - Licensing Coordinator .png"
        />
      </Flex>
    </Page>
  );
};
export default About;
