import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { LoaderCircleIcon } from 'lucide-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryItems } from '../../data/gallery';
import GalleryItem from '../../components/GalleryItem';
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [filteredData, setFilteredData] = useState(galleryItems.filter(item => item.type === 'Miniature'));
  const [activeLevel, setActiveLevel] = useState('Miniature');
  const [isLoading, setIsLoading] = useState(false);

  const handleFilter = async (e) => {
    const level = e.target.innerText;
    setIsLoading(true);
    
    // Animate gallery items out with stagger
    const galleryItem = document.querySelectorAll('.gallery-item');
    
    gsap.to(galleryItem, {
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.inOut',
      onComplete: () => {
        // Update the filtered data after animation completes
        if (level === 'All') {
          setFilteredData(galleryItems);
        } else {
          const filtered = galleryItems.filter(item => item.type === level);
          setFilteredData(filtered);
        }
        
        setActiveLevel(level);
        setIsLoading(false)
      }
    });
  }


  useEffect(() => {   
    
      const galleryContainer = document.querySelector('#gallery');
      const scrollHeight = galleryContainer.scrollHeight;
      galleryContainer.style.height = `${scrollHeight}px`;

      gsap.set('#gallery-levels', {
        opacity: 0,
      })

      gsap.to('#gallery-text', {
        opacity: 0, 
        scrollTrigger: {
          trigger: '#gallery-text',
          start: '-20% 80%',
          end: '+=100vh',
          scrub: 1,
          toggleActions: 'play none none none',
        }
      });

      gsap.to('#gallery-levels', {
        opacity: 1,
        scrollTrigger: {
          trigger: '#gallery-text',
          start: '-20% 80%',
          scrub: 1,
        }
      })

  }, [])

  useEffect(() => {
    if (!isLoading && filteredData.length > 0) {
      const items = document.querySelectorAll('.gallery-item');
      
      gsap.set(items, {
        opacity: 0,
        duration: 0.5,
        scale: 1
      });
      
      gsap.to(items, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: 'power2.out',
        delay: 0.1
      });
    }
  }, [filteredData, isLoading]);

  return (
    <>
      <section id="gallery" className="w-full h-[150vh] relative bg-base py-10">
        <div
          className="absolute flex items-center justify-center w-full pointer-events-none select-none" id='gallery-text'>
          <h3 className='text-5xl md:text-7xl text-[#592534] opacity-90'>Gallery</h3>
        </div>
        <div className="flex gap-8 justify-center items-center flex-wrap" id='gallery-levels'>
          {['Miniature','Simple', 'Moderate', 'Advanced','Bookmarks'].map((level, index) => (            
            <span className="py-2 px-3 shadow-md rounded-lg flex flex-col items-center justify-center cursor-pointer " 
              key={index} 
              onClick={handleFilter}
            >
              <h4 className={`text-base md:text-lg font-semibold transition-colors duration-500 ${activeLevel === level ? 'text-[var(--primary)]' : 'text-[var(--secondary)]'}`}>{level}</h4>
            </span>
          ))}
        </div>
        {isLoading ? (
            <>
            <div className="flex items-center justify-center mt-16">
              <LoaderCircleIcon className='w-8 h-8 animate-spin' />
            </div>
            </>) : <div className="grid grid-cols-[repeat(3,_1fr)_4rem_repeat(3,_1fr)] gap-8 md:gap-6 max-w-6xl mx-auto  py-20 md:py-40 transition-opacity duration-1000" id='gallery-items'>
            {filteredData.map((item, index) => (
              <div
                key={index}
                className={`gallery-item col-span-5 col-start-2 md:col-span-3 ${(index + 1) % 2 === 0 ? 'md:col-start-5' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                  position: 'relative',
                }}
              >
                <GalleryItem item={item} index={index} />
              </div>
            ))}
        </div>}
      </section>
    </>
  )
}

export default Gallery
