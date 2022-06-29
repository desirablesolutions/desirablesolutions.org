



export default function HomePage() {

  return (
    <>

      <section className="pb-40 bg-gray-100">
        <nav className="relative bg-gray-900 px-6 sm:px-12 py-4">
          <div className="hidden 3xl:block absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <ul className="flex items-end">
              <li className="mr-5">
                <a
                  className="inline-flex items-center pr-8 pb-5 text-sm text-white hover:text-gray-200"
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
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="border-b-4 border-lime-900" />
              </li>
              <li className="pb-6 mr-20">
                <a
                  className="inline-block text-sm text-white hover:text-gray-200"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li className="pb-6 mr-20">
                <a
                  className="inline-block text-sm text-white hover:text-gray-200"
                  href="#"
                >
                  About
                </a>
              </li>
              <li className="pb-6 mr-20">
                <a
                  className="inline-block text-sm text-white hover:text-gray-200"
                  href="#"
                >
                  How to Start
                </a>
              </li>
              <li className="pb-6">
                <a
                  className="inline-block text-sm text-white hover:text-gray-200"
                  href="#"
                >
                  Your Design
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center 3xl:hidden">
            <a className="inline-block self-center" href="#">
              <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
            </a>
            <button className="flex navbar-burger ml-auto items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-200">
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
          </div>
          <div className="hidden 3xl:flex w-full justify-between items-end">
            <div className="w-auto">
              <a className="inline-block self-center" href="#">
                <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
              </a>
            </div>
            <div className="w-auto">
              <div>
                <a
                  className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium text-white border border-white hover:border-gray-200 hover:text-gray-200 rounded"
                  href="#"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="pb-5 bg-gray-800 relative">
          <div className="absolute bottom-0 left-0 h-5 w-1/2 bg-white" />
          <div className="hidden sm:block absolute bottom-0 right-0 h-26 w-26 bg-white">
            <div className="absolute bottom-0 left-1/2 mb-8 transform translate-x-1/2">
              <div className="h-26 w-px bg-white" />
              <div className="h-18 w-px bg-gray-800" />
            </div>
          </div>
          <div className="sm:mr-26 relative">
            <img
              className="absolute top-0 left-0 w-full h-full block object-cover"
              src="wrexa-assets/images/people-havinf-fun-background-big.png"
              alt=""
            />
            <div className="container px-4 mx-auto relative">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 self-end order-last lg:order-first">
                  <div className="max-w-md mb-12 relative">
                    <div className="absolute top-0 right-0 -mt-8 mr-8 flex items-center justify-center w-24 h-24 bg-white rounded-full">
                      <img
                        className="block w-20 h-20 rounded-full"
                        src="wrexa-assets/images/avatar.png"
                        alt=""
                      />
                      <a
                        className="absolute bottom-0 right-0 -mr-2 -mb-2 inline-flex items-center justify-center w-12 h-12 bg-green-800 hover:bg-green-900 text-white rounded-full"
                        href="#"
                      >
                        <svg
                          width={10}
                          height={11}
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect x={4} width="2.4" height="10.4" rx={1} fill="white" />
                          <rect
                            x={10}
                            y={4}
                            width="2.4"
                            height="9.6"
                            rx={1}
                            transform="rotate(90 10 4)"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="py-14 px-6 sm:px-8 bg-indigo-500 bg-opacity-90 rounded-2xl">
                      <h3 className="text-2xl sm:text-3xl text-white mb-8">
                        Hello again*
                      </h3>
                      <form className="mb-8" action="#" method="post">
                        <div className="relative flex items-center pl-4 sm:pl-14 pt-3 pb-2 bg-white rounded-full">
                          <input
                            className="w-32 md:w-40 block mt-2 bg-transparent outline-none"
                            type="email"
                            placeholder="mat@hello.dev"
                            defaultValue=""
                          />
                          <label
                            className="absolute top-0 left-0 ml-4 sm:ml-14 mt-3 text-xs font-normal text-gray-400"
                            htmlFor=""
                          >
                            Your email
                          </label>
                          <a
                            className="inline-flex items-center py-2 px-4 ml-auto mr-2 text-sm sm:text-lg font-medium bg-white hover:bg-gray-100 shadow rounded-full"
                            href="#"
                          >
                            <svg
                              className="hidden sm:block h-4 w-4 sm:w-8 sm:h-8 mr-3"
                              width={34}
                              height={34}
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx={17}
                                cy={17}
                                r="15.75"
                                fill="white"
                                stroke="#DDDEE1"
                                strokeWidth="2.5"
                              />
                              <path
                                d="M22.8898 14.1751L21.8252 13.1105C21.7903 13.0755 21.7488 13.0477 21.7031 13.0287C21.6575 13.0098 21.6085 13 21.5591 13C21.5096 13 21.4607 13.0098 21.415 13.0287C21.3693 13.0477 21.3279 13.0755 21.293 13.1105L15.8496 18.8567L12.7295 15.7354C12.658 15.6639 12.561 15.6238 12.4599 15.6238C12.3588 15.6238 12.2618 15.6639 12.1903 15.7354L11.1117 16.8148C11.0402 16.8863 11 16.9833 11 17.0844C11 17.1855 11.0402 17.2825 11.1117 17.354L15.5492 21.8943C15.5902 21.9345 15.6399 21.9645 15.6946 21.9821C15.7492 21.9997 15.8071 22.0043 15.8639 21.9956C15.9223 22.0057 15.9822 22.0018 16.0388 21.9842C16.0954 21.9666 16.147 21.9358 16.1893 21.8943L22.8898 14.7076C22.9604 14.637 23.0001 14.5412 23.0001 14.4413C23.0001 14.3415 22.9604 14.2457 22.8898 14.1751V14.1751Z"
                                fill="#D6D7DA"
                              />
                            </svg>
                            <span>Accept</span>
                          </a>
                        </div>
                      </form>
                      <div className="flex flex-wrap sm:justify-center -mx-2">
                        <div className="w-auto pb-4 sm:pb-0 px-2">
                          <h5 className="text-xs font-medium text-indigo-200 mb-1">
                            Save 10% with code
                          </h5>
                          <span className="text-2xl font-medium text-white">
                            OXH20
                          </span>
                        </div>
                        <div className="h-px w-full sm:w-px sm:mx-12 sm:h-18 bg-indigo-300" />
                        <div className="w-auto pt-4 sm:pt-0 px-2">
                          <h5 className="text-xs font-medium text-indigo-200 mb-1">
                            Valid through
                          </h5>
                          <span className="text-2xl font-medium text-white">
                            5 Feb
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="max-w-xl py-24 md:pt-52 lg:pb-72">
                    <h1 className="font-heading text-5xl sm:text-6xl xl:text-7xl text-white mb-16">
                      Find your editor and create your home.
                    </h1>
                    <a
                      className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                      href="#"
                    >
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
          <nav className="relative flex flex-col pt-12 pb-40 h-full w-full bg-gray-200 overflow-y-auto">
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
                <div className="absolute bottom-0 left-0 -ml-2 flex items-center justify-center w-6 h-6 bg-green-800 rounded-full text-white text-xs">
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

      <section className="relative pt-24 pb-24 md:pb-52 bg-gray-100 overflow-hidden">
        <div className="hidden lg:block absolute top-0 right-0 mt-40 mr-20 h-full">
          <a className="inline-block" href="#">
            <img
              className="w-16 h-16"
              src="wrexa-assets/logos/logo-wrexa.svg"
              alt=""
            />
          </a>
          <div className="hidden lg:block w-px mt-24 mx-auto h-full bg-gray-200" />
        </div>
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-18">
            <span className="font-heading text-xl">02</span>
            <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
            <span className="font-heading text-xl">Creative team</span>
          </div>
          <div className="lg:hidden mb-12">
            <a className="inline-block" href="#">
              <img
                className="w-16 h-16"
                src="wrexa-assets/logos/logo-wrexa.svg"
                alt=""
              />
            </a>
          </div>
          <div className="max-w-3xl xl:max-w-4xl mb-24 sm:mb-44">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl mb-8">
              “Alone we can do so little, together we can do so much.”
            </h1>
            <p className="max-w-xl font-light">
              The house by the pond cras ornare, some chords for a three moments, like
              a sense of truth that comes from within. The final game.
            </p>
          </div>
          <div className="max-w-3xl lg:max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl">
            <div className="flex flex-wrap -mx-4 -mb-16">
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-16">
                <img
                  className="block mb-14 w-full object-coverrounded-md"
                  src="wrexa-assets/images/team1.png"
                  alt=""
                />
                <h4 className="text-2xl mb-2">Ethan Orio O.Son</h4>
                <span className="text-lg text-indigo-500">Design Director</span>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-16">
                <img
                  className="block mb-14 w-full object-coverrounded-md"
                  src="wrexa-assets/images/team2.png"
                  alt=""
                />
                <h4 className="text-2xl mb-2">Olivia Milner</h4>
                <span className="text-lg text-indigo-500">Co-Founder</span>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-16">
                <img
                  className="block mb-14 w-full object-coverrounded-md"
                  src="wrexa-assets/images/team3.png"
                  alt=""
                />
                <h4 className="text-2xl mb-2">Wera Livington</h4>
                <span className="text-lg text-indigo-500">Product Designer</span>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-16">
                <img
                  className="block mb-14 w-full object-coverrounded-md"
                  src="wrexa-assets/images/team4.png"
                  alt=""
                />
                <h4 className="text-2xl mb-2">Henric Johnson</h4>
                <span className="text-lg text-indigo-500">Reasercher</span>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-16">
                <img
                  className="block mb-14 w-full object-coverrounded-md"
                  src="wrexa-assets/images/team5.png"
                  alt=""
                />
                <h4 className="text-2xl mb-2">Paul Alleson</h4>
                <span className="text-lg text-indigo-500">Designer</span>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 px-4 mb-16">
                <img
                  className="block mb-14 w-full object-coverrounded-md"
                  src="wrexa-assets/images/team6.png"
                  alt=""
                />
                <h4 className="text-2xl mb-2">Patrick R.Bamford</h4>
                <span className="text-lg text-indigo-500">Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pt-24 md:pt-40 xl:pb-40 bg-gray-900 relative overflow-hidden">
        <div className="container px-4 mx-auto">
          <img
            className="hidden xl:block absolute top-0 right-0 w-1/4 mt-10 h-full object-cover"
            src="wrexa-assets/images/women-right-messages.png"
            alt=""
          />
          <div className="w-full xl:w-4/5">
            <div className="flex items-center mb-12">
              <span className="font-heading text-xl text-white">07</span>
              <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
              <span className="font-heading text-xl text-white">Contact us</span>
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl xl:text-7xl text-white mb-24">
              Have a question?
            </h2>
            <form action="#" method="post">
              <div className="max-w-xs lg:max-w-none mx-auto">
                <div className="flex flex-wrap -mb-6">
                  <span className="mr-4 mb-6 text-2xl xl:text-3xl text-white font-heading">
                    Hello, my name is
                  </span>
                  <div>
                    <input
                      className="block max-w-xs mr-4 px-6 pb-2 mb-6 text-center text-2xl xl:text-3xl font-heading border-b border-gray-700 bg-transparent text-gray-700 placeholder-gray-700 outline-none"
                      type="text"
                      placeholder="type here"
                    />
                  </div>
                  <span className="mb-6 text-2xl xl:text-3xl text-white font-heading">
                    and I’m looking
                  </span>
                </div>
                <div className="flex flex-wrap mt-6 -mb-6">
                  <span className="mr-4 mb-6 text-2xl xl:text-3xl text-white font-heading">
                    for a
                  </span>
                  <div>
                    <select
                      className="block max-w-xs mr-4 px-6 pb-2 mb-6 text-center text-2xl xl:text-3xl font-heading border-b border-gray-700 bg-transparent text-gray-700 outline-none"
                      aria-label="New select example"
                    >
                      <option selected="">select here</option>
                      <option value={1}>job</option>
                      <option value={1}>work</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 -mb-6">
                  <span className="mr-4 mb-6 text-2xl xl:text-3xl text-white font-heading">
                    Get in touch with me at
                  </span>
                  <div>
                    <input
                      className="block max-w-xs mr-4 px-6 pb-2 mb-6 text-center text-2xl xl:text-3xl font-heading border-b border-gray-700 bg-transparent text-gray-700 placeholder-gray-700 outline-none"
                      type="email"
                      placeholder="your Email here"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-16 mb-24">
                  <input type="checkbox" defaultValue="" id="" />
                  <label className="ml-6 text-gray-600" htmlFor="">
                    Accept all terms and conditions
                  </label>
                </div>
                <a
                  className="inline-block w-full lg:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                  href="#"
                >
                  Send message!
                </a>
              </div>
            </form>
          </div>
        </div>
        <img
          className="xl:hidden block mt-24 w-full h-128 object-cover"
          src="wrexa-assets/images/women-right-messages.png"
          alt=""
        />
      </section>


      <section>
        <div className="pt-10 pb-16 bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-start xl:items-center justify-center">
              <div className="w-1/2 xl:w-auto flex flex-wrap items-center justify-center xl:-mb-6">
                <a
                  className="inline-block w-full lg:w-auto text-sm text-white hover:text-gray-200 mb-6 mr-14"
                  href="#"
                >
                  Collection
                </a>
                <a
                  className="inline-block w-full lg:w-auto text-sm text-white hover:text-gray-200 mb-6 mr-14"
                  href="#"
                >
                  Projects
                </a>
                <a
                  className="inline-block w-full lg:w-auto text-sm text-white hover:text-gray-200 mb-6 mr-14"
                  href="#"
                >
                  About
                </a>
                <div className="w-full lg:w-auto md:mr-64 mb-6">
                  <a
                    className="inline-block text-sm text-white hover:text-gray-200 w-full sm:w-auto relative"
                    href="#"
                  >
                    <span>Careers</span>
                    <div className="absolute top-0 left-0 ml-18 -mt-1 min-w-max py-1 px-3 text-gray-900 font-medium bg-orange-800 rounded-t-xl rounded-br-xl">
                      We’re hiring!
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-1/2 xl:w-auto flex flex-wrap items-center justify-center -mb-6">
                <a
                  className="inline-block w-full lg:w-auto text-sm text-white hover:text-gray-200 mb-6 mr-14"
                  href="#"
                >
                  Plans
                </a>
                <a
                  className="inline-block w-full lg:w-auto text-sm text-white hover:text-gray-200 mb-6 mr-14"
                  href="#"
                >
                  How to Start
                </a>
                <a
                  className="inline-block w-full lg:w-auto text-sm text-white hover:text-gray-200 mb-6"
                  href="#"
                >
                  Download
                </a>
              </div>
            </div>
            <h2 className="font-heading text-center text-4xl text-white mt-20 mb-8">
              Get in touch!
            </h2>
            <div className="text-center mb-16">
              <a
                className="inline-block w-full sm:w-auto px-7 py-4 mb-4 sm:mb-0 mr-3 text-center text-white font-medium border border-gray-700 hover:border-gray-600 rounded"
                href="#"
              >
                Live chat
              </a>
              <a
                className="inline-block w-full sm:w-auto px-7 py-4 mb-4 sm:mb-0 mr-3 text-center text-white font-medium border border-gray-700 hover:border-gray-600 rounded"
                href="#"
              >
                +44 0870 5576 00
              </a>
              <a
                className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                href="#"
              >
                Send a message
              </a>
            </div>
            <div className="text-center">
              <span className="text-gray-700">I already have an account</span>
              <a
                className="ml-4 inline-flex items-center font-medium text-green-900 hover:text-green-800"
                href="#"
              >
                <span className="mr-2">Sign in</span>
                <svg
                  width={14}
                  height={11}
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.89471 0L6.81484 0.972812L11.0771 4.8125L0 4.8125L0 6.1875L11.0771 6.1875L6.81484 10.0272L7.89471 11L14 5.5L7.89471 0Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="py-12 text-center bg-gray-800">
          <div className="container px-4 mx-auto">
            <div className="sm:flex items-center justify-center mb-5">
              <a className="inline-block mb-2 sm:mb-0" href="#">
                <img
                  className="h-10"
                  src="wrexa-assets/logos/wrexa-co-logo-name.svg"
                  alt=""
                />
              </a>
              <span className="block text-sm text-white font-light">
                © 2022 Wrexa. All rights reserved.
              </span>
            </div>
            <p className="max-w-3xl mx-auto text-gray-400 text-xs font-light">
              Cookies are important to the proper functioning of a site. To improve
              your experience, we use cookies to remember log-in details and provide
              secure log-in, collect statistics to optimize site functionality, and
              deliver content tailored to your interests...
            </p>
          </div>
        </div>
      </section>

    </>
  )
}