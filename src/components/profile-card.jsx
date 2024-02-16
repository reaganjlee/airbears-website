import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  VStack,
  Box,
  Text,
} from '@chakra-ui/react';

const profile_size = 200;

const ProfileCard = ({ title, subtitle, bio, img_name }) => {
  return (
    <Flex alignItems="center" justify="center" flexDirection="column">
      <Image
        src={`/assets/profiles/${img_name}`}
        alt={img_name}
        borderRadius="50%"
        w={`${profile_size}px`}
        h={`${profile_size}px`}
        fit="cover"
        align="center"
      />
      <Text fontSize="lg" w={profile_size} align="center" pt={`calc(2vh)`}>
        {title}
      </Text>
      <Text fontSize="sm" w={profile_size + 30} color="gray.700" align="center">
        {subtitle}
      </Text>
      <Text
        fontSize="sm"
        w={profile_size + 30}
        color="gray.500"
        pb={`calc(5vh)`}
        align="center"
      >
        {bio}
      </Text>
    </Flex>
  );
};
export default ProfileCard;
