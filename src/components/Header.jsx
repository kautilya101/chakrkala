
const Header = () => {
  return (
    <header className="bg-transparent px-8 md:px-16 py-4">
      <div className="flex justify-between items-center">
        <img src='/src/assets/images/logo.png' alt="chakrkala" className="h-16 w-16 lg:h-22 lg:w-22" />
        {/* <nav className="text-lg hidden md:block">
          <ul className="flex space-x-10">
            <li><a href="/" className=''>Home</a></li>
            <li><a href="#featuring" className="">Featuring</a></li>
            <li><a href="#gallery" className="">Gallery</a></li>
            <li><a href="#contact" className="">Contact</a></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
