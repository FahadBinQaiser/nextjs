export default function Footer() {
  return (
    <>
      <div>
        <footer className="bg-gray-800 text-white py-4 mt-8">
          <div className="mx-auto max-w-3xl px-4">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Orthodox. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
