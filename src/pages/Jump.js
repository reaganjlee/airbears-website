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
        <VStack>
          <SectionContent title="What does skydiving look like?" subtitle="" />
          <iframe
            width="740"
            height="472"
            src="https://www.youtube.com/embed/kSD-BQ5acrk?si=HTuSAm6_rOYufXHe"
            title="YouTube"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </VStack>
      </Flex>
      <VStack pt={8}>
        <FeatureSection
          tableComponent={<TimelineRow timelineData={timelineData} />}
          title="Schedule"
          subtitle="What does a jump day look like?"
          direction={{ base: 'column', md: 'row-reverse' }}
        />

        <FeatureSection
          tableComponent={<PricingTable />}
          title="Pricing"
          subtitle="If you have any questions, please contact us"
          direction={{ base: 'column', md: 'row-reverse' }}
        />
      </VStack>
      <Box p={5} />
    </Page>
  );
};
export default Jump;
