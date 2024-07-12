import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-xl font-bold">
          <Link href="/">
            <div>Logo</div>
          </Link>
        </div>
        <nav className="flex space-x-6">
          <Link href="/">
            <div className="hover:underline">Home</div>
          </Link>
          <Link href="/about">
            <div className="hover:underline">About</div>
          </Link>
          <Link href="/contact">
            <div className="hover:underline">Contact</div>
          </Link>
        </nav>
        <div>
          <Link href="/login">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
