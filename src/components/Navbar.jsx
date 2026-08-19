import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          BookManager
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/books"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            All Books
          </Link>

          <Link
            href="/manage-books"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Manage Books
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

