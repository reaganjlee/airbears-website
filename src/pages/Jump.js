import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Card,
  CardBody,
  Image,
  theme,
  Container,
  ListItem,
  OrderedList,
  Flex,
  HStack,
  Button,
  SimpleGrid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import TitleCard from '../components/TitleCard';
import TimelineRow from '../components/TimelineRow';
import { TableEntry, StrikedItem } from '../components/TableUtils';
import Page from '../components/Page';
import SectionContent from '../components/SectionContent';
import PricingTable from '../components/PricingTable';
import timelineData from '../data/timelineData';
import {
  ImageFeatureSection,
  FeatureSection,
} from '../components/FeatureSection';

const Jump = () => {
  return (
    <Page>
      <TitleCard
        title="Jump"
        subtitle="Have your first skydive"
        img_name="cover-images/jump-cover"
      />
      <Flex alignItems="center" justify="center" direction="column">
        <VStack w="full">
          <SectionContent title="What does skydiving look like?" subtitle="" />

          <Box
            as="iframe"
            src="https://www.youtube.com/embed/kSD-BQ5acrk?si=HTuSAm6_rOYufXHe"
            width="70%"
            sx={{
              aspectRatio: '16/9',
            }}
          />
        </VStack>
      </Flex>
      <VStack pt={8}>
        <FeatureSection
          tableComponent={<TimelineRow timelineData={timelineData} />}
          title="Schedule"
          subtitle="The day lasts from 7 AM to 4 PM. You'll be paired into a group 
          to go to our skydiving location in Davis, CA. The day is filled with 
          excitement as you skydive, and meet others in the skydiving community!"
          direction={{ base: 'column-reverse', md: 'row-reverse' }}
        />

        <FeatureSection
          tableComponent={<PricingTable />}
          title="Pricing"
          subtitle="These are our pricing options as of Spring 2024. 
          If you have any questions or are interested in costs to get a 
          license, please contact us."
          direction={{ base: 'column-reverse', md: 'row-reverse' }}
        />
      </VStack>
      <Box p={5} />
    </Page>
  );
};
export default Jump;
