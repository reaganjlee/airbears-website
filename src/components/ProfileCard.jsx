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
import { useBreakpointValue } from '@chakra-ui/react';

const ProfileCard = ({ title, subtitle, bio, img_name }) => {
  const profile_size = useBreakpointValue({ base: 100, md: 200 });
  const width = useBreakpointValue({ base: '40%', md: '40%' });
  const headerFont = useBreakpointValue({ base: 'md', md: 'lg' });
  const textFont = useBreakpointValue({ base: 'sm', md: 'md' });
  return (
    <Flex
      alignItems="center"
      justify="center"
      flexDirection="column"
      w={width}
      fontSize={textFont}
    >
      <Image
        src={`/assets/profiles/${img_name}`}
        alt={img_name}
        borderRadius="50%"
        w={`${profile_size}px`}
        h={`${profile_size}px`}
        fit="cover"
        align="center"
      />
      <Text
        fontSize={headerFont}
        w={profile_size}
        align="center"
        pt={`calc(2vh)`}
      >
        {title}
      </Text>
      <Text w={profile_size + 30} color="gray.700" align="center">
        {subtitle}
      </Text>
      <Text
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
