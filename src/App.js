import React, { Suspense } from 'react';
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

const App = () => {
  return (
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
  );
};

export default App;
