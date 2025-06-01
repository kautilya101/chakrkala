import Featuring from './screens/Featuring/Featuring';
import Home from './screens/Home/Home';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ReactLenis from 'lenis/react';
import Gallery from './screens/Gallery/Gallery';
import Contact from './screens/Contact/Contact';
gsap.registerPlugin(ScrollTrigger);


function App() {

  return (  
    <>
      <ReactLenis root />
      <div className='w-full flex flex-col' id='app'>
        <Home />
        <Featuring/>
        <Gallery/>
        <Contact/>
      </div>
    </>
  )
}

export default App
