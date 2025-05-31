
const Header = ({classNames}) => {
  return (
    <header className={`${classNames} absolute top-10 bg-transparent px-8 md:px-16`}>
      <div className="flex justify-between items-center">
        <img src='/src/assets/images/logo.png' alt="chakrkala" className="h-16 w-16 lg:h-22 lg:w-22" />
      </div>
    </header>
  );
};

export default Header;
