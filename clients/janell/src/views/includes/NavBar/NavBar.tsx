export default function NavBar() {
    return (
        <section className="overflow-hidden">
  <div className="bg-black">
    <div className="container px-4 mx-auto">
      <div className="flex items-center justify-between py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto pr-2">
              <a href="#">
                <img src="basko-assets/logos/basko-logo-light.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-auto lg:block">
              <ul className="flex items-center mr-8">
                <li className="font-medium tracking-tight text-white mr-14 hover:text-gray-200">
                  <a href="#">Features</a>
                </li>
                <li className="font-medium tracking-tight text-white mr-14 hover:text-gray-200">
                  <a href="#">Pricing</a>
                </li>
                <li className="pr-8 mr-8 font-medium tracking-tight text-white border-r border-gray-700 hover:text-gray-200">
                  <a href="#">Automation</a>
                </li>
                <li className="font-medium tracking-tight text-white hover:text-gray-200">
                  <a href="#">Customer Login</a>
                </li>
              </ul>
            </div>
            <div className="hidden w-auto lg:block">
              <div className="inline-block">
                <a
                  className="inline-block px-5 py-3 font-semibold tracking-tight text-center text-white transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300"
                  href="#"
                >
                  Try 14 Days Free Trial
                </a>
              </div>
            </div>
            <div className="w-auto lg:hidden">
              <a href="#">
                <svg
                  className="text-indigo-600 navbar-burger"
                  width={51}
                  height={51}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={28} fill="currentColor" />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-4/6 navbar-menu sm:max-w-xs">
      <div className="fixed inset-0 bg-gray-800 navbar-backdrop opacity-80" />
      <nav className="relative z-10 h-full pt-8 overflow-y-auto bg-black px-9">
        <div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block" href="#">
                  <img src="basko-assets/logos/basko-logo-light.png" alt="" />
                </a>
              </div>
              <div className="w-auto p-2">
                <a className="text-white navbar-burger" href="#">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 18L18 6M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-full py-16">
            <ul>
              <li className="mb-12 font-medium tracking-tight text-white hover:text-gray-200">
                <a href="#">Features</a>
              </li>
              <li className="mb-12 font-medium tracking-tight text-white hover:text-gray-200">
                <a href="#">Pricing</a>
              </li>
              <li className="mb-12 font-medium tracking-tight text-white hover:text-gray-200">
                <a href="#">Automation</a>
              </li>
              <li className="font-medium tracking-tight text-white hover:text-gray-200">
                <a href="#">Customer Login</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-end w-full pb-8">
            <a
              className="inline-block px-5 py-3 font-semibold tracking-tight text-center text-white transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-300"
              href="#"
            >
              Try 14 Days Free Trial
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div className="pt-16 pb-24 overflow-hidden bg-black lg:pt-32 lg:pb-52">
    <div className="container px-4 mx-auto">
      <div className="flex flex-wrap -m-8">
        <div className="w-full p-8 md:w-1/2">
          <div className="md:max-w-lg">
            <span className="inline-block px-3 py-1 mb-8 font-semibold text-white bg-gray-600 rounded-full">
              #1 Brand Building Tool
            </span>
            <h1 className="mb-12 text-6xl tracking-tighter text-white font-heading md:text-7xl">
              Boost brand's visibility and reach fast.
            </h1>
            <div className="flex flex-wrap -m-2 mb-14">
              <div className="w-auto p-2">
                <a
                  className="inline-block px-5 py-4 font-semibold tracking-tight text-white transition duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:ring-indigo-400"
                  href="#"
                >
                  Try 14 Days Free Trial
                </a>
              </div>
              <div className="w-auto p-2">
                <a
                  className="inline-flex items-center px-5 py-4 transition duration-200 bg-transparent border border-gray-600 rounded-lg hover:bg-indigo-600 hover:border-indigo-600 focus:ring-4 focus:ring-indigo-300"
                  href="#"
                >
                  <div className="inline-block">
                    <svg
                      className="mr-2.5"
                      width={18}
                      height={19}
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 12.5L3 13.25C3 14.4926 4.00736 15.5 5.25 15.5L12.75 15.5C13.9926 15.5 15 14.4926 15 13.25L15 12.5M12 9.5L9 12.5M9 12.5L6 9.5M9 12.5L9 3.5"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="font-semibold tracking-tight text-white">
                    Download IOS App
                  </span>
                </a>
              </div>
            </div>
            <div className="max-w-md">
              <div className="flex flex-wrap -m-1.5">
                <div className="w-auto p-1.5">
                  <div className="flex flex-wrap">
                    <div className="w-auto">
                      <img
                        src="basko-assets/images/headers/avatar.png"
                        alt=""
                      />
                    </div>
                    <div className="w-auto -ml-5">
                      <img
                        src="basko-assets/images/headers/avatar2.png"
                        alt=""
                      />
                    </div>
                    <div className="w-auto -ml-5">
                      <img
                        src="basko-assets/images/headers/avatar3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-1.5">
                  <p className="tracking-tight text-white">
                    Join other 12k+ Marketers and start building brands
                    reputation now.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-8 md:w-1/2">
          <img
            className="transition duration-500 transform hover:-translate-y-2"
            src="basko-assets/images/headers/dashboard.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</section>

    )
}