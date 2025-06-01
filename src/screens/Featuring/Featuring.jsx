import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import FeaturedMandalas from '../../data/featured';

const Featuring = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {

    gsap.set("#featured", {
      opacity: 0,
    });

    gsap.to("#featured", {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".mandala-bg",
        start: "90% center",
        toggleActions: "play none none reverse",
      }
    });

    const section = sectionRef.current;
    const horizontal = horizontalRef.current;
    const totalScroll = horizontal.scrollWidth - window.innerWidth;
    section.style.height = `${totalScroll + window.innerHeight}px`;

    gsap.to(horizontal, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: true,
      },
    });

    const pin = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${totalScroll}`,
      scrub: 1,
      pin: true,
    });

    const sections = gsap.utils.toArray('.featured-item');

    sections.forEach((section, index) => {
      const imgItem = section;

      imgItem.addEventListener('mouseenter', () => {
        gsap.to(imgItem.querySelector('img'), {
          scale: 1.1,
          duration: 0.15,
          ease: "power2.out",
        });
        gsap.to(imgItem.querySelector(`#overlay-${index + 1}`), {
          opacity: 0,
          duration: 0.15,
          ease: "power2.out",
        });
      });

      imgItem.addEventListener('mouseleave', () => {
        gsap.to(imgItem.querySelector('img'), {
          scale: 1,
          duration: 0.15,
          ease: "power2.out",
        });
        gsap.to(imgItem.querySelector(`#overlay-${index + 1}`), {
          opacity: 1,
          duration: 0.15,
          ease: "power2.out",
        });
      });
    });

    // Cleanup function
    return () => {
      pin.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    }
  }, []);

  return (
    <>
      <section className='h-screen relative bg-base overflow-hidden py-10' id='featured' ref={sectionRef}>
        <div className="flex flex-col gap-4 sm:flex-row items-center justify-center flex-wrap">
          <h3 className='text-5xl md:text-7xl text-[#592534] font-[Optima]'>Featured</h3>
          <h3 className='text-5xl md:text-7xl text-[#592534] font-[Optima]'>Mandalas</h3>
        </div>
        <div 
          className="flex items-center w-max h-[90vh] px-10 md:px-16 gap-20" 
          id='featured-items' 
          ref={horizontalRef}
        >
          {FeaturedMandalas.map((mandala, index) => (
            <div 
              key={index}
              id={`featured-img-${index + 1}`} 
              className=" h-[60vh] w-[300px] md:w-[700px] relative flex-shrink-0 flex items-center justify-center featured-item"
            >
                <img 
                  className='w-full h-full object-cover object-center rounded-md transition-transform duration-300' 
                  src={mandala.image}
                  alt={mandala.title}
                />
                <div 
                  id={`overlay-${index + 1}`}
                  className="absolute inset-0 bg-black/70 flex items-center justify-center rounded-md transition-opacity duration-300"
                >
                  <div className="text-white text-center px-4 flex flex-col gap-2">
                    <h4 className='text-3xl md:text-5xl font-bold uppercase text-[var(--primary)]'>
                      {mandala.title}
                    </h4>
                    <p className='text-sm md:text-base'>{mandala.description}</p>
                  </div>
                </div>
              </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Featuring