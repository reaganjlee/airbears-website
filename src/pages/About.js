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
import Header from '../components/Header';
import Footer from '../components/Footer';
import TitleCard from '../components/TitleCard';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  return (
    <>
      <Header />
      <TitleCard
        title="About"
        subtitle="Meet our officers and alumni"
        img_name="mountain-bg"
      />
      <Flex alignItems="center" justify="center">
        <Text maxW="80%" fontSize="xl" p="calc(5vh)">
          AirBears at Berkeley is a student-run organization based at the
          University of California, Berkeley dedicated to fostering a community
          of diverse and welcoming individuals by exposing community members to
          the incredible and fear-conquering experience of skydiving in a way
          that is as accessible as possible. (Est. 1969)
        </Text>
      </Flex>
      <Flex alignItems="center" justify="center" mt="calc(5vh)">
        <VStack>
          <Text fontSize="3xl" pb="calc(5vh)">
            Officers
          </Text>

          <SimpleGrid
            columns={2}
            // columnGap={3}
            rowGap={0}
            w="full"
            spacingX="180px"
            spacingY="120px"
          >
            <GridItem colSpan={1}>
              <ProfileCard
                title="Trevor Shin"
                subtitle="President"
                bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
                img_name="Trevor Shin - President.png"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <ProfileCard
                title="Andrew Kim"
                subtitle="Vice President"
                bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
                img_name="Andrew Kim - Vice President.png"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <ProfileCard
                title="Savanna Aguayo"
                subtitle="External Head of Operations"
                bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
                img_name="Savanna Aguayo - External Head of Operations.png"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <ProfileCard
                title="Keyla Barcenas"
                subtitle="Internal Head of Operations"
                bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
                img_name="Keyla Barcenas - Internal Head of Operations.png"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <ProfileCard
                title="Isaac Schultz"
                subtitle="Treasurer"
                bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
                img_name="Isaac Schultz - Treasurer.png"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <ProfileCard
                title="Ahmed AlBadrani"
                subtitle="Jump Day Coordinator"
                bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
                img_name="Ahmed AlBadrani - Jump Day Coordinator.png"
              />
            </GridItem>
            <GridItem colSpan={2}>
              <ProfileCard
                title="Zane Levine"
                subtitle="Licensing Coordinator"
                bio="This is the bio. This is the bio. This is the bio. This is the bio. This is the bio."
                img_name="Zane Levine - Licensing Coordinator .png"
              />
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Flex>
      <Footer />
    </>
  );
};
export default About;
