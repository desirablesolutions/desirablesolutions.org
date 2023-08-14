export default function Menu() {
    return (
        <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 max-w-md navbar-menu">
        <div className="fixed inset-0 bg-gray-800 opacity-50 navbar-backdrop" />
        <nav className="relative flex flex-col w-full h-full px-10 py-6 overflow-y-auto bg-white">
          <div className="flex items-center mb-auto">
            <a className="inline-block mr-auto" href="#">
              <img
                className="h-4"
                src="asitrastudio-assets/logos/logo-asi.svg"
                alt=""
              />
            </a>
            <a className="navbar-close" href="#">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#111827"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <a className="inline-block text-black hover:underline" href="#">
                  About
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block text-black hover:underline" href="#">
                  Services
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block text-black hover:underline" href="#">
                  Projects
                </a>
              </li>
              <li>
                <a className="inline-block text-black hover:underline" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a
              className="block px-4 py-4 mb-3 font-medium text-center text-black transition duration-200 border border-black rounded-full hover:text-white hover:bg-black"
              href="#"
            >
              Login
            </a>
            <a
              className="block px-4 py-4 font-medium text-center text-white transition duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
              href="#"
            >
              Sign in
            </a>
          </div>
        </nav>
      </div>
    )
}