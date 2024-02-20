import {
  Image,
  Flex,
  Button,
  HStack,
  Card,
  chakra,
  Heading,
  CardHeader,
  CardBody,
  VStack,
  Text,
} from '@chakra-ui/react';

const StatCard = ({ title, subtitle }) => {
  return (
    <Card justify="center" alignItems="center" m="5px" w="full">
      <Heading fontSize={{ base: 'md', md: '4xl' }} pb="5px" pt="10px">
        {title}
      </Heading>
      <CardBody fontSize={{ base: 'sm', md: 'xl' }} pt="0" pb="10px">
        {subtitle}
      </CardBody>
    </Card>
  );
};
function StatCardRow({ StatCardData }) {
  return (
    <Flex justify="center" mt="2%">
      <Flex w="64%">
        {StatCardData.map((card, index, arr) => {
          return <StatCard title={card.title} subtitle={card.subtitle} />;
        })}
      </Flex>
    </Flex>
  );
}
export default StatCardRow;
