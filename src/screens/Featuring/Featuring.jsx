import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import FeaturedMandalas from '../../data/featured';

const Featuring = () => {

  useEffect(() => {

    const sections = gsap.utils.toArray('.featured-item');
    const totalWidth = (sections.length - 1) * window.innerWidth;

    gsap.set("#featured", {
      opacity: 0,
      y: 50,
    });

    gsap.to("#featured", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#featured",
        start: "10% 85%",
        toggleActions: "play none none reverse",
      }
    });
      
    gsap.set('.featured-img-text', {
      opacity: 0,
    })

    gsap.to(sections,{
      opacity: 1,
      xPercent: -120 * (sections.length - 1),
      ease: "none",
      scrollTrigger:{
        trigger: "#featured",
        pin: '#featured',
        scrub: 1 / (sections.length - 1),
        end: () => `+=${totalWidth}`,
      },
    });

    sections.forEach((section, index) => {
      const imgItem = document.querySelector(`#featured-img-${index + 1}`);

      imgItem.addEventListener('mouseenter', () => {
        gsap.to(imgItem, {
          scale: 1.1,
          duration: 0.3,
          ease: "power2.in",
        });
        gsap.to(`#overlay-${index+1}`, {
          backgroundColor: "rgba(0, 0, 0, 0)",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
        });
      });

      imgItem.addEventListener('mouseleave', () => {
        gsap.to(imgItem, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(`#overlay-${index+1}`, {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, []);

  return (
    <>
    <section className='min-h-screen flex flex-col justify-center bg-base' id='featured'>
      <div className="py-4 px-16 flex items-center justify-center">
        <h3 className='text-4xl md:text-6xl text-[#592534] font-[Optima]'>Featured Mandalas</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-center py-16 overflow-x-hidden" id='featured-items'>
        {FeaturedMandalas.map((mandala, index) => (
          <div 
          className="featured-item flex-shrink-0 w-[70%] flex items-center flex-grow justify-center group" 
          key={mandala.id} 
          id={`featured-${index + 1}`}
          > 
          <div 
          id={`featured-img-${index + 1}`} 
          className="w-2/3 h-[200px] md:h-[500px] flex items-center rounded-md justify-center relative">
            <img 
              className='w-full h-full object-cover object-center rounded-md transition-transform duration-300' 
              src={mandala.image}
              alt={mandala.title}
              />
            <div 
            id={`overlay-${index + 1}`}
            className="absolute bg-black/70 w-full h-full flex items-center justify-center rounded-md">
              <div className="text-white text-center">
                <h4 className='text-5xl font-bold uppercase text-[var(--primary)]'>{mandala.title}</h4>
                <p className='mt-2'>{mandala.description}</p>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </section>
    <div className={`h-[450vh]`}></div>
  </>
  )
}

export default Featuring