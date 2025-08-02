export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <header className="flex flex-row bg-white px-4 py-4 rounded-xl text-black justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold">Orthodox</h1>
        <nav>
          <ul className="flex flex-row space-x-6">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="mt-8 text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          <a href="/blog">Go to Blog</a>
        </button>
      </main>
    </div>
  );
}
