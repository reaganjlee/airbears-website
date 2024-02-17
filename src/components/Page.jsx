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
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = props => {
  return (
    <>
      <Header />
      <Box direction="column" align="center">
        <Box w="90%">{props.children}</Box>
      </Box>
      <Footer />
    </>
  );
};
export default Page;
