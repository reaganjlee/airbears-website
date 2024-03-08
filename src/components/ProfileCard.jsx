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
import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';

const ProfileCard = ({ title, subtitle, bio, img_name }) => {
  const profile_size = useBreakpointValue({ base: '6rem', md: '12rem' });
  const bio_size = useBreakpointValue({ base: '9rem', md: '18rem' });
  // 24, 48
  const width = useBreakpointValue({ base: '40%', md: '40%' });
  const headerFont = useBreakpointValue({ base: 'md', md: 'lg' });
  const textFont = useBreakpointValue({ base: 'sm', md: 'md' });

  const formattedBio = bio.split('\\n').map((line, lineIndex, lineArray) => (
    <React.Fragment key={lineIndex}>
      {/* Split by "contact us" and map to either a Link or span */}

      <span>{line}</span>
      {/* Add a <br /> element after each line except the last one */}
      {lineIndex < lineArray.length - 1 && <br />}
    </React.Fragment>
  ));

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
        w={profile_size}
        h={profile_size}
        fit="cover"
        align="center"
      />
      <Text fontSize={headerFont} w={profile_size} align="center" pt={4}>
        {title}
      </Text>
      <Text w={profile_size} color="gray.700" align="center">
        {subtitle}
      </Text>
      <Text
        // w={`calc(${profile_size} * 1.5)`}
        // w={profile_size}
        w={bio_size}
        color="gray.500"
        fontSize="sm"
        pb={8}
        align="center"
      >
        {formattedBio}
      </Text>
    </Flex>
  );
};
export default ProfileCard;
