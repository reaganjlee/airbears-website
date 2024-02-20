import {
  Image,
  Flex,
  Button,
  HStack,
  chakra,
  IconButton,
  Stack,
  Text,
  VStack,
  Box,
  Collapse,
  Icon,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';

import React from 'react';

const NavBarItems = isMobile => {
  return (
    // (isMobile &&
    <>
      <Flex
        as="nav"
        spacing="5"
        direction={{ base: 'column-reverse', md: 'row' }}
        // fontSize={{ base: '40px', md: 'md' }}
      >
        {/* <Box> */}
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
        {/* </Box> */}
      </Flex>

      <Box pl={{ base: '1', md: '0' }} pt={{ base: '5', md: '0' }}>
        <Link to="https://linktr.ee/calairbears/">
          <Button> Join </Button>
        </Link>
      </Box>
    </>
  );
};

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  console.log(isOpen);

  const isMobile = useBreakpointValue({ base: true, md: false });
  console.log(isMobile);

  return (
    <chakra.header id="header">
      <Box>
        {/* <Flex
          bg="blue.500"
          color="white"
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={'center'}
          justify={'space-between'}
        > */}
        <Flex
          w="100%"
          align="center"
          px={{ base: 6 }}
          py={{ base: 4 }}
          justify="space-between"
        >
          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          )}
          <Link to="/">
            <Button variant="nav"> AirBears </Button>
          </Link>
          {/* Desktop Links */}
          {!isMobile && (
            // <Stack direction={'row'} spacing={4}>
            <NavBarItems />
            // </Stack>
          )}
        </Flex>

        {/* Mobile Links */}
        <Collapse in={isOpen} animateOpacity>
          <Stack
            bg="gray.500"
            p={4}
            display={{ md: 'none' }}
            spacing={4}
            flexDirection="column"
          >
            <NavBarItems />
          </Stack>
        </Collapse>
      </Box>
      {/* <Flex w="100%" align="center" px="6" py="4" justify="space-between">
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
          {!isMobile && <IconButton icon={<CloseIcon />} />}
          {/* // colorScheme="teal"
            // aria-label="Call Segun"
            // size="lg"
            // icon={<PhoneIcon />}
            // onClick={onToggle}
            // icon={ 
            //   isOpen ? (
            // icon={<CloseIcon />}
            //   ) : (
            //     <HamburgerIcon w={5} h={5} />
            //   )
            // }
            variant={'ghost'}
            // aria-label={'Toggle Navigation'}
          />
          {/* )} 
        </HStack>
        
      </Flex> */}
    </chakra.header>
  );
};
export default NavBar;
