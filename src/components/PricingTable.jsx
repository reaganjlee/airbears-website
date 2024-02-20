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
import { TableEntry, StrikedItem } from '../components/TableUtils';

const first_coln_width = '25%';

const PricingTable = () => {
  return (
    <GridItem
      colSpan={1}
      fontSize={20}
      textAlign="center"
      spacing={0}
      gap={2.5}
      pl={8}
    >
      <Box position="relative">
        <Card>
          <CardBody>
            <TableContainer padding="1rem" maxW="100%">
              <Table size="md" alignItems="center">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th textAlign="center" p={2.5}>
                      With AirBears
                    </Th>
                    <Th textAlign="center" p={2.5}>
                      Regular
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td w={first_coln_width}>
                      <TableEntry title="Tandem*" subtitle="See below" />
                    </Td>
                    <Td isNumeric>
                      <Text textAlign="center">$220</Text>
                    </Td>
                    <Td isNumeric>
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
                      <StrikedItem content="$30" />
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Td colSpan={3}>
                      <Text fontSize="sm" color="gray.400" fontWeight="normal">
                        {' '}
                        {/* <TableCaption bg="red" w="100%"> */}
                        *This pays for the instructor, pilot, the plane, and the
                        parachute itself
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
  );
};

export default PricingTable;
