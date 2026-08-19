import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto flex min-h-150 max-w-7xl items-center px-6 py-16">
        <div className="grid w-full items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div>
            <span className="mb-5 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Your Personal Book Manager
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Manage Your
              <span className="block text-blue-600">
                Books Easily
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Keep your favorite books organized in one place. Add new books,
              update information, explore your collection, and manage
              everything easily with BookManager.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/books"
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Explore Books →
              </Link>

              <Link
                href="/manage-books"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Manage Books
              </Link>
            </div>

            {/* Small Stats */}
            <div className="mt-10 flex gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-sm text-gray-500">Books</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">Easy</h3>
                <p className="text-sm text-gray-500">To Manage</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-sm text-gray-500">Access</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="relative flex h-100 w-full max-w-md items-center justify-center rounded-3xl bg-blue-600 p-8 shadow-2xl">

              {/* Decorative circles */}
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-indigo-300 opacity-60" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-blue-300 opacity-50" />

              {/* Book Illustration */}
              <div className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex h-48 w-36 rotate-[-5deg] items-center justify-center rounded-lg bg-white shadow-2xl">
                  <div className="px-4">
                    <div className="text-5xl">📖</div>
                    <p className="mt-4 text-lg font-bold text-blue-600">
                      Book
                    </p>
                    <div className="mx-auto mt-2 h-1 w-16 rounded bg-blue-200" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white">
                  Your Books
                </h2>

                <p className="mt-2 text-blue-100">
                  Organized. Simple. Accessible.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

