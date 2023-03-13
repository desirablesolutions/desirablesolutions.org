export default function NavBar() {
  return (
    <section className="top-0 fixed w-full">
      <div className="backdrop-blur-sm">
        <nav className="px-8 py-8 mr-12 overflow-hidden">
          <div className="flex items-center w-full">
            <a className="self-center inline-block 3xl:mr-52" href="#">
              <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
            </a>
            <button className="flex items-center justify-center ml-auto bg-white rounded-full 3xl:hidden navbar-burger w-14 h-14 hover:bg-gray-100">
              <svg
                width={20}
                height={9}
                viewBox="0 0 20 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.75"
                  y1="1.25"
                  x2="19.25"
                  y2="1.25"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="0.75"
                  y1="8.25"
                  x2="13.25"
                  y2="8.25"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <ul className="items-center hidden mr-auto 3xl:flex">
              <li className="mr-14">
                <a
                  className="inline-flex items-center text-sm text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  <span className="mr-4">Collection</span>
                  <svg
                    width={12}
                    height={7}
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2L6 6L2 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="mr-14">
                <a
                  className="inline-block text-sm text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="inline-block text-sm text-gray-900 hover:text-gray-700"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
            <div className="relative hidden pl-16 mr-32 3xl:block">
              <div className="absolute top-0 left-0 w-px h-32 -mt-20 bg-gray-400" />
              <ul className="flex items-center">
                <li className="mr-14">
                  <a
                    className="inline-flex items-center text-sm text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    <span className="mr-4">How to Start</span>
                    <svg
                      width={12}
                      height={7}
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2L6 6L2 2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-sm text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Your Design
                  </a>
                </li>
              </ul>
            </div>
            <a
              className="items-center hidden px-8 py-3 bg-white shadow 3xl:flex rounded-2xl"
              href="#"
            >
              <div className="relative mr-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="wrexa-assets/images/avatar2.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 flex items-center justify-center w-6 h-6 -ml-2 text-xs text-white bg-green-800 rounded-full">
                  1
                </div>
              </div>
              <div className="pr-5 mr-auto">
                <h4 className="text-xs text-gray-400">Account</h4>
                <span>matloay</span>
              </div>
              <svg
                width={12}
                height={7}
                viewBox="0 0 12 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2L6 6L2 2"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 navbar-menu sm:max-w-xs">
        <div className="fixed inset-0 bg-gray-800 navbar-backdrop opacity-80" />
        <nav className="relative flex flex-col w-full h-full pt-12 pb-40 overflow-y-auto bg-gray-200">
          <div className="px-12">
            <div>
              <a className="inline-block mb-52" href="#">
                <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
              </a>
              <button type="button" aria-label="Close" />
            </div>
            <ul>
              <li className="mb-6">
                <a className="flex items-center justify-between" href="#">
                  <span>Collection</span>
                  <svg
                    width={12}
                    height={7}
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2L6 6L2 2"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block" href="#">
                  Projects
                </a>
              </li>
              <li className="mb-16">
                <a className="inline-block" href="#">
                  About
                </a>
              </li>
              <li className="mb-6">
                <a className="inline-block" href="#">
                  How to Start
                </a>
              </li>
              <li>
                <a className="inline-block" href="#">
                  Design
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="absolute bottom-0 left-0 w-full">
          <a className="flex items-center pt-4 pb-5 pl-6 pr-4 bg-white" href="#">
            <div className="relative mr-4">
              <img
                className="w-12 h-12 rounded-full"
                src="wrexa-assets/images/avatar2.png"
                alt=""
              />
              <div className="absolute bottom-0 left-0 flex items-center justify-center w-6 h-6 -ml-2 text-xs text-white bg-green-800 rounded-full">
                1
              </div>
            </div>
            <div className="pr-5 mr-auto">
              <h4 className="text-xs text-gray-400">Account</h4>
              <span>matloay</span>
            </div>
            <svg
              width={12}
              height={7}
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2L6 6L2 2"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit={10}
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>

  )
}