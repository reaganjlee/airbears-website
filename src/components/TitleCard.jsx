import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  VStack,
  Text,
} from '@chakra-ui/react';

const TitleCard = ({ title, subtitle, img_name }) => {
  return (
    <Flex alignItems="center" justify="center" flexDirection="column" pb={8}>
      <Text fontSize="5xl">{title}</Text>
      <Text fontSize="xl" pb={8}>
        {subtitle}
      </Text>
      <Image src={`/assets/${img_name}.png`} alt={img_name} maxH={'34rem'} />
    </Flex>
  );
};
export default TitleCard;
