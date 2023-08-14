export default function FeaturedMedia() {
    return (
        <section className="py-12 md:py-24 bg-coolGray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-start w-full mx-auto mb-8 text-center">
              <h1 className="pt-4 text-3xl tracking-tighter font-heading xs:text-5xl sm:text-7xl md:text-8xl lg:text-10xl">
                Selected projects
              </h1>
              <span className="block -mb-4 text-xl text-right sm:mr-12 lg:mr-8 sm:text-2xl text-coolGray-600">
                (21)
              </span>
            </div>
            <ul className="flex flex-wrap items-center -mb-2">
              <li className="mb-2 mr-2 md:mr-6">
                <a
                  className="inline-block py-2.5 px-5 text-lg text-white leading-none bg-black rounded-full transition duration-100"
                  href="#"
                >
                  All
                </a>
              </li>
              <li className="mb-2 mr-2 md:mr-6">
                <a
                  className="inline-block py-2.5 px-5 text-lg text-black hover:text-white leading-none hover:bg-black rounded-full border-1.5 hover:border-transparent border-black transition duration-100"
                  href="#"
                >
                  Villa
                </a>
              </li>
              <li className="mb-2 mr-2 md:mr-6">
                <a
                  className="inline-block py-2.5 px-5 text-lg text-black hover:text-white leading-none hover:bg-black rounded-full border-1.5 hover:border-transparent border-black transition duration-100"
                  href="#"
                >
                  Residance
                </a>
              </li>
              <li className="mb-2">
                <a
                  className="inline-block py-2.5 px-5 text-lg text-black hover:text-white leading-none hover:bg-black rounded-full border-1.5 hover:border-transparent border-black transition duration-100"
                  href="#"
                >
                  Apartaments
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap -mx-3 -mb-6">
            <div className="w-full px-3 mb-6 lg:w-7/12">
              <a
                className="relative block overflow-hidden group h-112 sm:h-166 rounded-4xl"
                href="#"
              >
                <div className="absolute top-0 left-0 w-full h-full transition-all duration-200 group-hover:bg-black group-hover:bg-opacity-10" />
                <img
                  className="block object-cover w-full h-full"
                  src="asitrastudio-assets/projects/image-six-1.png"
                  alt=""
                />
                <div className="absolute bottom-0 left-0 w-full px-5 py-10 xs:pl-10 xs:pe-20">
                  <div className="relative">
                    <div className="max-w-xs md:max-w-md">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-2 mr-3 text-sm bg-white rounded-full">
                          Spain, Girona
                        </span>
                        <span className="inline-block px-3 py-2 text-sm bg-white rounded-full">
                          2023
                        </span>
                      </div>
                      <h3 className="text-3xl tracking-tight text-white xs:text-4xl lg:text-6xl xl:text-7xl">
                        Althhorpe Street Leamigton Spa
                      </h3>
                    </div>
                    <span className="absolute bottom-0 right-0 inline-block transition duration-100 transform xs:mr-10 group-hover:rotate-45">
                      <svg
                        width={33}
                        height={33}
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30 3L3 30"
                          stroke="white"
                          strokeWidth="4.3875"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30 27.758V3H5.24196"
                          stroke="white"
                          strokeWidth="4.3875"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full px-3 mb-6 lg:w-5/12">
              <img
                className="block w-full mb-6 overflow-hidden h-80 rounded-4xl"
                src="asitrastudio-assets/projects/image-six-2.png"
                alt=""
              />
              <img
                className="block w-full overflow-hidden h-80 rounded-4xl"
                src="asitrastudio-assets/projects/image-six-3.png"
                alt=""
              />
            </div>
            <div className="w-full px-3 mb-6 lg:w-1/2">
              <img
                className="block object-cover w-full h-80 rounded-4xl"
                src="asitrastudio-assets/projects/image-six-4.png"
                alt=""
              />
            </div>
            <div className="w-full px-3 mb-6 lg:w-1/2">
              <img
                className="block object-cover w-full h-80 rounded-4xl"
                src="asitrastudio-assets/projects/image-six-5.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-20 text-center">
            <a
              className="group inline-flex py-4 px-6 md:px-30 font-medium text-black hover:text-white items-center justify-center border-1.5 border-black rounded-full hover:bg-black transition duration-200"
              href="#"
            >
              <span className="mr-2">View all (21)</span>
              <span className="transition duration-100 transform group-hover:rotate-45">
                <svg
                  width={10}
                  height={11}
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1.5L1 9.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 8.83571V1.5H1.66429"
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
      </section>
      

    )
}