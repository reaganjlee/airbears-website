import {
  Box,
  Flex,
  Icon,
  Text,
  Card,
  Heading,
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
      <Flex direction="column" h={index === arrLength - 1 ? '0px' : '70px'}>
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
        <Heading fontSize="md" color={textColor} fontWeight="bold">
          {title}
        </Heading>
        <Text fontSize="md" color="gray.400" fontWeight="normal">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
}

export default function TimelineRow({ timelineData }) {
  return (
    <Card p="1rem">
      <CardBody>
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
