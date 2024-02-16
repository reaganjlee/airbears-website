import {
  Box,
  Flex,
  Icon,
  Text,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

// This is from https://github.dev/horizon-ui/horizon-ui-chakra

function TimelineComponent(props) {
  const { logo, title, date, color, index, arrLength } = props;
  const textColor = useColorModeValue('gray.700', 'white.300');
  const bgIconColor = useColorModeValue('white.300', 'gray.700');

  return (
    <Flex justifyContent="start" mb="5px">
      <Flex direction="column" h="70px">
        <Icon
          as={logo}
          bg={bgIconColor}
          color={color}
          h={'30px'}
          w={'26px'}
          pe="6px"
          zIndex="1"
          position="relative"
          right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
          left={document.documentElement.dir === 'rtl' ? '' : '-8px'}
        />
        <Box
          mt="5px"
          w="2px"
          bg="gray.200"
          h={index === arrLength - 1 ? '0px' : '100%'}
        />
      </Flex>
      <Flex direction="column" justifyContent="flex-start" h="100%">
        <Text fontSize="sm" color={textColor} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}

export default function TimelineRow({ timelineData }) {
  const textColor = useColorModeValue('gray.700', 'white.300');
  const bgIconColor = useColorModeValue('white.300', 'gray.700');
  const bg = useColorModeValue('gray.50', 'gray.700');
  return (
    <Card p="1rem" maxHeight="100%">
      {/* <CardHeader pt="0px" p="28px 0px 35px 21px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            Schedule
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            <Text fontWeight="bold" as="span" color="brand.300">
              What does a jump day look like?
            </Text>
          </Text>
        </Flex>
      </CardHeader> */}
      <CardBody ps="26px" pe="0px" mb="31px" position="relative">
        <Flex direction="column">
          {timelineData.map((row, index, arr) => {
            return (
              <TimelineComponent
                logo={row.logo}
                title={row.title}
                date={row.date}
                color={row.color}
                index={index}
                arrLength={arr.length}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
}
