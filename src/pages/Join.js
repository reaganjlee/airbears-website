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
        {/* <VStack w="full"> */}
        <SectionContent
          title="Being a member comes with perks..."
          subtitle=""
        />

        {/* </VStack> */}
      </Flex>
      <Box maxW="1440px">
        <Flex direction="column" alignItems="center" justify="center">
          <ImageFeatureSection
            imgSrc="/assets/Frame 6.png"
            altText="skydiving-backpack"
            // title="Getting your License"
            // subtitle="Embark on the thrilling journey of obtaining your
            // skydiving license with us. Learn to solo skydive and have the
            // chance to share the experience with the Cal community by teaching others!"
            // title="blah"
            // title="- AirBears jump discount \n - Group jump days "
            title={'Group jump days'}
            subtitle="Dive into the thrill with us on club-wide jump days and enjoy exclusive discounts to members!"
          />

          <ImageFeatureSection
            imgSrc="/assets/Frame 5.png"
            altText="skydiving-photo"
            title="Socials and Additional Benefits"
            subtitle="Embrace a suite of perks including vibrant game nights, adventurous camping trips, exhilarating climbing experiences and more."
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
