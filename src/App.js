import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
  Flex,
  HStack,
  Button,
  SimpleGrid,
  GridItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Details from './components/details';
// import Main from './main';
// import Root from './routes/root';
import Home from './pages/Home';
import About from './pages/About';
import License from './pages/License';
import Jump from './pages/Jump';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/error-page';
import theme from './theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/license',
    element: <License />,
  },
  {
    path: '/jump',
    element: <Jump />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Header /> */}
      {/* <Main /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default App;
