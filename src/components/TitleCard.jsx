import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  VStack,
  Text,
} from '@chakra-ui/react';

const TitleCard = ({ title, subtitle, img_name, maxH_vh = 80 }) => {
  return (
    <Flex alignItems="center" justify="center" flexDirection="column">
      <Text fontSize="5xl">{title}</Text>
      <Text fontSize="xl" pb={`calc(5vh)`}>
        {subtitle}
      </Text>
      <Image
        src={`/assets/${img_name}.png`}
        alt={img_name}
        maxH={`calc(${maxH_vh}vh)`}
      />
    </Flex>
  );
};
export default TitleCard;
