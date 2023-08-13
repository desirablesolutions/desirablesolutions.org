

export default function NavBar() {
    return (
        <nav className="sticky top-0 left-0 z-50 w-full backdrop-blur-sm">
        <div className="container px-4 mx-auto">
          <div className="flex items-center h-24">
            <a className="inline-block" href="#">
              <img
                className="h-5"
                src="asitrastudio-assets/logos/logo-asi.svg"
                alt=""
              />
            </a>
            <button className="py-1 ml-auto lg:hidden navbar-burger">
              <svg
                width={44}
                height={16}
                viewBox="0 0 44 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={44} height={2} rx={1} fill="black" />
                <rect y={14} width={44} height={2} rx={1} fill="black" />
              </svg>
            </button>
            <div className="items-center hidden ml-auto mr-12 lg:flex">
              <a className="inline-block mr-10 hover:underline" href="#">
                About
              </a>
              <a className="inline-block mr-10 hover:underline" href="#">
                Services
              </a>
              <a className="inline-block mr-10 hover:underline" href="#">
                Projects
              </a>
              <a className="inline-block hover:underline" href="#">
                Contact us
              </a>
            </div>
            <a
              className="items-center justify-center hidden px-8 py-4 font-medium leading-none text-black transition duration-200 border border-black rounded-full group lg:inline-flex hover:text-white hover:bg-black"
              href="#"
            >
              <span className="mr-2">Get consulation</span>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg
                  width={10}
                  height={10}
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L1 9"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 8.33571V1H1.66429"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </nav>

    )
}