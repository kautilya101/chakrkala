import { useEffect } from 'react';
import Featuring from './screens/Featuring/Featuring';
import Home from './screens/Home/Home';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ReactLenis from 'lenis/react';
gsap.registerPlugin(ScrollTrigger);


function App() {

  return (  
    <>
      <ReactLenis root />
      <div className='w-full flex flex-col' id='app'>
        <Home />
        <Featuring/>
      </div>
    </>
  )
}

export default App
