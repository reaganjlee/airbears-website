import React from 'react';
import {
  Flex,
  Box,
  Image,
  VStack,
  Button,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you're using react-router for navigation
import SectionContent from '../components/SectionContent';
import { BlackButton, ColoredButton } from '../components/Button';

const FeatureSection = ({
  imgSrc,
  altText,
  title,
  subtitle,
  buttonText,
  buttonLink,
  direction = { base: 'column', md: 'row' },
}) => {
  //   const direction = useBreakpointValue();

  return (
    <Flex direction={direction} w="100%">
      <Flex
        maxW={{ base: '100%', md: '50%' }}
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={imgSrc}
          alt={altText}
          boxSize="full"
          borderRadius="20%"
          maxW="80%"
        />
      </Flex>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        maxW={{ base: '100%', md: '50%' }}
        pt={{ base: '5%', md: '0%' }}
      >
        <VStack>
          <SectionContent title={title} subtitle={subtitle} />
          <BlackButton text={buttonText} to={buttonLink} />
        </VStack>
      </Box>
    </Flex>
  );
};

export default FeatureSection;
