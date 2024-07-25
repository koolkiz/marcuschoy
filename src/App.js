import React, { Suspense } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';

const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills'));
const Projects = React.lazy(() => import('./components/Projects'));
const Experience = React.lazy(() => import('./components/Experience'));
const Education = React.lazy(() => import('./components/Education'));
const Contact = React.lazy(() => import('./components/Contact'));

const theme = extendTheme({
  colors: {
    primary: {
      100: "#E7717D",
      200: "#C2CAD0",
      300: "#C2B9B0",
      400: "#7E685A",
      500: "#AFD275",
    },
    secondary: {
      100: "#687864",
      200: "#31708E",
      300: "#5085A5",
      400: "#8FC1E3",
      500: "#F7F9FB",
    },
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <div>
          <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          </Helmet>
          <GlobalStyle />
          <Navbar />
          <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </Suspense>
        </div>
      </HelmetProvider>
    </ChakraProvider>
  );
};

export default App;
