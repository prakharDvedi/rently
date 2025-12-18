import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black border-b border-gray-200">
      <div className="text-2xl font-bold text-white">
        <Link href="/">Rently</Link>
      </div>
      <ul className="flex space-x-8 text-gray-600 font-medium">
        <li>
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/listings" className="hover:text-white transition-colors">
            Listings
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
