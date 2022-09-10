import './App.css';
import Loader from './Loader';
import React,{Suspense} from 'react';

const About = React.lazy(() => import('./Components/Menu/About'));
const Navbar = React.lazy(() => import('./Components/Menu/Navbar'));
const  Hero = React.lazy(() => import('./Components/Menu/Hero'));
const Skills = React.lazy(() => import('./Components/Menu/Skills'));
const Projects = React.lazy(() => import('./Components/Menu/Projects'));
const Contact = React.lazy(() => import('./Components/Menu/Contact'));
const End = React.lazy(() => import('./Components/Menu/End'));


function App() {

  return (
    <> 

    <Suspense fallback={<h1>Please Wait...................</h1>}>
    <Navbar/>
    </Suspense>

    <Suspense fallback={<h1>Please Wait...................</h1>}>
    <Hero   />
    </Suspense>

    <Suspense fallback={<h1>Please Wait...................</h1>}>
    <About   />
    </Suspense>

    <Suspense fallback={<h1>Please Wait...................</h1>}>
    <Skills   />
    </Suspense>
    <Suspense fallback={<h1>Please Wait...................</h1>}>
    <Projects   />
    </Suspense>

    <Suspense fallback={<h1>Please Wait...................</h1>}>
    <Contact   />
    </Suspense>
    <Suspense fallback={<h1>Please Wait...................</h1>}>
    <End   />
    </Suspense>
    
    
    
    </>
  );
}

export default App;
