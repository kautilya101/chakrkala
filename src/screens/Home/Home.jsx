import { useEffect } from 'react';
import Header from '../../components/Header'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

useEffect(() => {

    gsap.set("#mandala-text", {
      scale: 1.2,
      transformOrigin: "center center",
    });

    gsap.set('.mandala-bg',{
      opacity: 0,
      scale: 1,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "7% top",
        end:  "+=120vh",
        pin: '#home',
        scrub: 1, 
        anticipatePin: 1,
      }
    });

    tl.to("#mandala-text", {
      scale: 1,
      duration: 3,
      ease: 'circ.in',
      letterSpacing: '0em',
    })
    .to("#home-text h2", {
      y: 0,
      opacity: 1,
      duration: 3,
      ease: "power2.in"
    }, 0)
    .to(".mandala-bg", {
      scale: 1,
      opacity: 0.8, // Adjust opacity as needed
      duration: 3,
      ease: "power2.in"
    }, 0)
    .to('.logo', {
      opacity: 0,
      y: 0,
      duration: 0.2,
      ease: "power2.in"
    }, 0)

    const fadeout = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        start: "bottom 40%",
        end: "bottom 10%",
        scrub: 1.5, 
      }
    });

    fadeout.to("#mandala-text", {
      opacity: 0,
      duration: 3,
      ease: 'circ.out',
    })

    fadeout.to("#home-text h2", {
      opacity: 0,
      duration: 3,
      ease: "power2.out"
    }, 0)

    fadeout.to(".mandala-bg", {
      scale: 1,
      opacity: 0, 
      duration: 3,
      ease: "power2.out"
    }, 0)

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header classNames={'logo hidden'} />    
        <main className="relative flex-1 flex items-center justify-center text-wrap text-center overflow-hidden" id='home'>
          <img 
            src="/src/assets/images/home/home.svg" 
            alt="Background" 
            className="mandala-bg absolute left-[60%] md:left-[50%] w-full h-full object-fill z-0" 
          />
          <img 
            src="/src/assets/images/home/home.svg" 
            alt="Background" 
            className="mandala-bg absolute right-[60%] md:right-[50%] w-full h-full object-fill z-0" 
          />
          <span className='relative z-10 flex flex-col items-center justify-center gap-10' id='home-text'>    
            <h2 className='text-4xl md:text-8xl text-center text-[var(--primary)] opacity-0 font-[Optima]'>
              Fill Your Walls With
            </h2>
            <h1
              id="mandala-text"
              className="text-6xl md:text-[8vw] text-center text-[#C7B981] tracking-widest font-[Berkshire] font-[900]"
            >
              Mandala
            </h1>
          </span>
          
        </main>
      </div>
      <section className="h-[20vh] md:h-[30vh] bg-base">
        {/* Dummy scroll area */}
      </section>
    </>
  )
}

export default Home;