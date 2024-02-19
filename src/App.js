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
import Home from './pages/Home';
import About from './pages/About';
import License from './pages/License';
import Jump from './pages/Jump';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import theme from './theme';

const AppLayout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
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
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
