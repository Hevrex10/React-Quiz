function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-6 bg-gray-100 border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src="logo512.png"
          alt="React logo"
          className="w-12 h-12 sm:w-14 sm:h-14"
        />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
          The React Quiz
        </h1>
      </div>
    </header>
  );
}

export default Header;
