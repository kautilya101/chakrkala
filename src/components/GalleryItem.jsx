const GalleryItem = ({ item, index }) => {
  return (
    <div className="group relative rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 z-20" >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-auto aspect-[5/4] md:aspect-[3/4] object-cover transition-transform duration-700 scale-110 group-hover:scale-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-3 relative">
        <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold  text-[var(--secondary)]">
          {item.name}
        </h3>
         <h3 className="text-lg  text-[var(--secondary)]">
          {item.size}
        </h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-[var(--secondary)]">₹{item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem
