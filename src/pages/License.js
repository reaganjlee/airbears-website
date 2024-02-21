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

const License = () => {
  return (
    <Page>
      <TitleCard
        title="License"
        subtitle="Getting Your License"
        img_name="cover-images/license-cover"
      />
      <Flex alignItems="left" justify="left" w="full">
        <VStack w="full">
          <SectionContent
            title="Getting your License"
            subtitle="Getting your solo diving license is a great way to level up your
              diving. To do so you need to:"
          />
          <Text fontSize="3xl">Learn</Text>
          <Text>Take a jump course</Text>
          <Text fontSize="3xl">Solo Certification</Text>
          <Text>8 jumps with a coach, now you can jump alone</Text>
          <Text fontSize="3xl">A-License</Text>
          <Text>After 25 jumps yourself, you're fully certified!</Text>
        </VStack>
      </Flex>
      <Flex padding={10} direction="column">
        <FeatureSection
          tableComponent={
            <Box
              as="video"
              controls
              src="/assets/license-skydive.mov"
              alt="licensed skydive video"
              objectFit="contain"
              sx={{
                aspectRatio: '16/9',
              }}
              p={2.5}
            />
          }
          title="Skydiving License Benefits?"
          subtitle="Skydiving by yourself!"
          direction={{ base: 'column', md: 'row-reverse' }}
        />
        <ImageFeatureSection
          imgSrc="/assets/member-thumbs-up.jpg"
          altText="member-thumbs-up"
          title={<FullPackageInfo />}
        />
      </Flex>
    </Page>
  );
};
export default License;
