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
  Heading,
  ListItem,
  OrderedList,
  Flex,
  HStack,
  Button,
  UnorderedList,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import TitleCard from '../components/TitleCard';
import Page from '../components/Page';
import SectionContent from '../components/SectionContent';
import {
  ImageFeatureSection,
  FeatureSection,
} from '../components/FeatureSection';
import FullPackageInfo from '../components/FullPackageInfo';
import MemberRequirements from '../components/MemberRequirements';

const Join = () => {
  return (
    <Page>
      <TitleCard
        title="Join"
        subtitle="Be a part of AirBears"
        img_name="cover-images/join-cover"
      />
      <Flex alignItems="left" justify="left" w="full" pb={10}>
        <SectionContent
          title="Being a member comes with perks..."
          subtitle=""
        />
      </Flex>
      <Box maxW="1440px">
        <Flex direction="column" alignItems="center" justify="center">
          <ImageFeatureSection
            imgSrc="/assets/Frame 6.png"
            altText="skydiving-backpack"
            title={'Group Jump Days'}
            subtitle="Dive into the thrill with us on club-wide jump days and enjoy exclusive discounts to members!"
          />

          <ImageFeatureSection
            imgSrc="/assets/Frame 5.png"
            altText="skydiving-photo"
            title="Socials and Additional Benefits"
            subtitle={
              <VStack>
                <Text>
                  Join us for meetings on Tuesday, 6-7pm, Wheeler 126, followed
                  by Taco Tuesday at Raleigh's. At the meeting we will be
                  having:
                </Text>
                <Box
                  w={{ base: '90%', md: '60%' }}
                  justify="center"
                  alignItems="center"
                  pt={0}
                >
                  <UnorderedList pl={2.5} textAlign="left">
                    <ListItem>Jump Day logistics</ListItem>
                    <ListItem>
                      Club Socials
                      <UnorderedList>
                        <ListItem>Climbing days</ListItem>
                        <ListItem>Movie nights</ListItem>
                        <ListItem>Study nights</ListItem>
                      </UnorderedList>
                    </ListItem>

                    <ListItem>General skydiving meetings</ListItem>
                    <ListItem>Licensing meetings</ListItem>
                    <ListItem>Good vibes</ListItem>
                  </UnorderedList>
                </Box>
              </VStack>
            }
            direction={{ base: 'column', md: 'row-reverse' }}
          />
          <Box p={5} />
          <MemberRequirements />
        </Flex>
        <Box p={5} />
      </Box>
    </Page>
  );
};
export default Join;
