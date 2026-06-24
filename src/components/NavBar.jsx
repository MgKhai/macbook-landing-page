import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header className="text-white container w-full flex m-auto h-14 items-center">
      <nav className="flex flex-row justify-between w-full md:mx-0 mx-4">
        <img
          className="hover:-translate-y-0.5 transition-transform duration-200"
          src="/logo.svg"
          alt="Apple Logo"
        />
        <ul className="md:flex flex-row gap-5 text-gray-400 text-sm hidden">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="hover:text-gray-100 transition-colors duration-200"
            >
              <a href={link.label}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button className="hover:-translate-y-0.5 transition-transform duration-200">
            <img src="/search.svg" alt="Search" />
          </button>
          <button className="hover:-translate-y-0.5 transition-transform duration-200">
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
