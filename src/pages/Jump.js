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

import {
  FaCar,
  FaClipboard,
  FaGraduationCap,
  FaUserFriends,
  FaPizzaSlice,
  FaHome,
} from 'react-icons/fa';

const first_coln_width = '25%';
const timelineData = [
  {
    logo: FaCar,
    title: '7 AM: Leave Berkeley',
    date: 'Bright and early',
    color: 'blue.300',
  },
  {
    logo: FaClipboard,
    title: '8 AM: Arrive/Checkin',
    date: 'Get setup',
    color: 'orange.300',
  },
  {
    logo: FaGraduationCap,
    title: '9 AM: Training',
    date: 'Learn the ins and outs',
    color: 'yellow.300',
  },
  {
    logo: FaUserFriends,
    title: '10 AM: Skydive/Socialize',
    date: 'Meet some new friends',
    color: 'green.300',
  },
  {
    logo: FaPizzaSlice,
    title: '12 PM: Lunch',
    date: 'Have some yummy food',
    color: 'red.300',
  },
  {
    logo: FaHome,
    title: '4 PM: Head Home',
    date: 'A successful day!',
    color: 'pink.300',
  },
];

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
          {/* <Text fontSize="3xl" pb="4%">
            What does skydiving look like?
          </Text> */}
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
      {/* bg="gray.50" */}
      <VStack pt="30px">
        <SimpleGrid
          columns={2}
          columnGap={3}
          rowGap={6}
          w="full"
          textAlign="left"
          alignItems="center"
          // h="calc(80vh)"

          // mt="calc(20vh)"
        >
          <GridItem
            colSpan={1}
            textAlign="center"
            alignItems="center"
            justify="center"
          >
            {/* <VStack rounded="lg" padding="10px">

              <Text fontSize="3xl"> Schedule </Text>
              <Text> What does a jump day look like? </Text>
            </VStack> */}
            <Box alignItems="center" justifyContent="center" align="center">
              <SectionContent
                title="Schedule"
                subtitle="What does a jump day look like?"
              />
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex justify="center">
              <TimelineRow timelineData={timelineData} />
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            {/* <VStack rounded="lg" padding="10px">
              <Text
                fontSize="3xl"
                textAlign="center"
                alignItems="center"
                justify="center"
              >
                {' '}
                Pricing{' '}
              </Text>
              <Text align="center">
                {' '}
                If you have any questions, please contact us{' '}
              </Text>
            </VStack> */}
            <SectionContent
              title="Pricing"
              subtitle="If you have any questions, please contact us"
            />
          </GridItem>
          <GridItem
            colSpan={1}
            fontSize="calc(1.5vw)"
            textAlign="center"
            spacing={0}
            // columnGap="10px"
            gap="10px"
            pl="30px"
          >
            <Box position="relative">
              <Card>
                <CardBody>
                  <TableContainer padding="1rem" maxW="100%">
                    <Table size="md" alignItems="center">
                      <Thead>
                        <Tr>
                          <Th></Th>
                          <Th textAlign="center" p="10px">
                            With AirBears
                          </Th>
                          <Th textAlign="center" p="10px">
                            Regular
                          </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td w={first_coln_width}>
                            <TableEntry
                              title="Tandem*"
                              // subtitle="See below for more details"
                              subtitle="See below"
                            />
                          </Td>
                          <Td isNumeric>
                            <Text textAlign="center">$220</Text>
                          </Td>
                          <Td isNumeric>
                            {/* <Text textAlign="center" as="s">
                              $255
                            </Text> */}
                            <StrikedItem content="$255" />
                          </Td>
                        </Tr>
                        <Tr>
                          <Td w={first_coln_width}>
                            <TableEntry
                              title="Video Package"
                              subtitle="Capture every moment"
                            />
                          </Td>
                          <Td isNumeric>
                            <Text textAlign="center">$115</Text>
                          </Td>
                          <Td isNumeric>
                            {/* <Box textAlign="center">
                              <Text as="s">$130</Text>
                            </Box> */}
                            <StrikedItem content="$130" />
                          </Td>
                        </Tr>
                        <Tr>
                          <Td w={first_coln_width}>
                            <TableEntry
                              title="Food/Transportation"
                              subtitle="Food on-site"
                            />
                          </Td>
                          <Td isNumeric>
                            <Text textAlign="center">$0</Text>
                          </Td>
                          <Td isNumeric>
                            {/* <Text as="s" textAlign="center">
                              $30
                            </Text> */}
                            <StrikedItem content="$30" />
                          </Td>
                        </Tr>
                      </Tbody>
                      <Tfoot>
                        <Tr>
                          <Td colSpan={3}>
                            <Text
                              fontSize="sm"
                              color="gray.400"
                              fontWeight="normal"
                            >
                              {' '}
                              {/* <TableCaption bg="red" w="100%"> */}
                              *This pays for the instructor, pilot, the plane,
                              and the parachute itself
                              {/* </TableCaption> */}
                            </Text>{' '}
                          </Td>
                        </Tr>
                      </Tfoot>
                    </Table>
                  </TableContainer>
                </CardBody>
              </Card>
            </Box>
          </GridItem>
        </SimpleGrid>
      </VStack>
      <Box p="20px" />
    </Page>
  );
};
export default Jump;
