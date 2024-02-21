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
        <Text maxW="90%" fontSize={{ base: 'sm', md: 'xl' }}>
          AirBears at Berkeley is a student-run organization based at the
          University of California, Berkeley dedicated to fostering a community
          of diverse and welcoming individuals by exposing community members to
          the incredible and fear-conquering experience of skydiving in a way
          that is as accessible as possible. (Est. 1969)
          <br />
          <br />
          As the premier skydiving club of UC Berkeley, we take pride in
          representing the bold spirit and innovative legacy of our university.
          Our community embodies the Cal's values of excellence, pushing
          boundaries, and pursuing passions beyond the conventional, and
          continue to do so by offering our community members the unique
          opportunity to explore the skydiving world together. Outside of this,
          we also strive to have a close-knit community with frequent socials
          (e.g. climbing days, camping, study nights). Through our services,
          community members are instilled not only with thrilling skydiving
          experiences, but also greater leadership, teamwork, and resilience.
        </Text>
      </Flex>
      <Flex alignItems="center" justify="center" mt={8}>
        {/* <VStack> */}
        <Text fontSize="3xl" pb={8}>
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
