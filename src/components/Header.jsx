import { Image, Flex, Button, HStack, chakra } from '@chakra-ui/react';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

import React from 'react';

const Header = () => {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="4" align="center" justify="space-between">
        {/* <>AirBears</> */}
        <Link to="/">
          <Button variant="nav"> AirBears </Button>
        </Link>
        <HStack as="nav" spacing="5">
          <Link to="/">
            <Button variant="nav"> Home </Button>
          </Link>
          <Link to="/about">
            <Button variant="nav"> About </Button>
          </Link>
          <Link to="/license">
            <Button variant="nav"> License </Button>
          </Link>
          <Link to="/jump">
            <Button variant="nav"> Jump </Button>
          </Link>
        </HStack>

        <HStack>
          <Link to="https://linktr.ee/calairbears/">
            <Button> Join </Button>
          </Link>
        </HStack>
      </Flex>
    </chakra.header>
  );
};
export default Header;
