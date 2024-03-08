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
      <Flex
        alignItems="center"
        justify="center"
        direction="column"
        mt={8}
        pb={8}
      >
        <Text fontSize="3xl">Officers</Text>
        <Text fontSize="lg">
          If you could skydive anywhere (or off anywhere) where would it be?
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
          bio="2nd year\nBusiness/Econ Major\nIf I could skydive anywhere it would be over the Hawaiian Islands."
          img_name="Trevor Shin - President.png"
        />
        <ProfileCard
          title="Andrew Kim"
          subtitle="Vice President"
          bio="3rd year\nEcon Major\nAntarctica with the chillest penguins around ;)"
          img_name="Andrew Kim - Vice President.png"
        />

        <ProfileCard
          title="Savanna Aguayo"
          subtitle="External Head of Operations"
          bio="3rd year\nFilm and Media\nAnywhere where there's not penguins :p"
          img_name="Savanna Aguayo - External Head of Operations.png"
        />
        <ProfileCard
          title="Keyla Barcenas"
          subtitle="Internal Head of Operations"
          bio="2nd year\nStatistics\nIf I could skydive off of anywhere it would be the Thundering Rock floating islands from the movie Avatar."
          img_name="Keyla Barcenas - Internal Head of Operations.png"
        />
        <ProfileCard
          title="Isaac Schultz"
          subtitle="Treasurer"
          bio="4th year\nMechnical Engineering Major\nI'd skydive anywhere as long as it's with Zane."
          img_name="Isaac Schultz - Treasurer.png"
        />
        <ProfileCard
          title="Ahmed AlBadrani"
          subtitle="Jump Day Coordinator"
          bio="2nd year\nPolitical Science Major\nI'd skydive anywhere near 1600 Pennsylvania Avenue."
          img_name="Ahmed AlBadrani - Jump Day Coordinator.png"
        />
        <ProfileCard
          title="Zane Levine"
          subtitle="Licensing Coordinator"
          bio="4th year\nMarine Science\nIf I could skydive anywhere it would probably have to be over the Great Blue Hole in Belize."
          img_name="Zane Levine - Licensing Coordinator .png"
        />
      </Flex>
    </Page>
  );
};
export default About;
