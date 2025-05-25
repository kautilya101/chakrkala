import React from 'react'

const FeaturedMandalas = [
  {
    id: 1,
    title: 'Floral Mandalas',
    image: 'path/to/image1.jpg',
    description: 'Explore the intricate designs of floral mandalas, perfect for relaxation and mindfulness.',
  },
  {
    id: 2,
    title: 'Architectural Mandalas',
    image: 'path/to/image2.jpg',
    description: 'Discover the beauty of architectural mandalas, blending geometry and art.',
  },
  {
    id: 3,
    title: 'Geometric Mandalas',
    image: 'path/to/image3.jpg',
    description: 'Dive into the world of geometric mandalas, showcasing symmetry and precision.',
  },
  {
    id: 4,
    title: 'Artistic Bookmarks',
    image: 'path/to/image4.jpg',
    description: 'A collection of artistic bookmarks to enhance your reading experience.',
  }
];


const Featuring = () => {
  return (
    <section className='min-h-screen bg-white flex flex-col py-16' id='#featuring'>
      <div className="py-4">
        <h3 className='text-4xl md:text-6xl'>Featured Mandalas</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-8 items-center flex-grow overflow-x-auto scrollbar-hide">
        {FeaturedMandalas.map((mandala, index) => (
          <div className="flex-shrink-0 w-[90%] sm:w-[45%] md:w-[40%] h-[500px] shadow-lg flex items-center justify-center bg-white" key={mandala.id} id={`featured${index+1}`}>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featuring
