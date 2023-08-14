export default function ContentGrid() {
    return (
        <section className="py-12 overflow-hidden md:py-20 bg-coolGray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center mb-20 -mx-4">
            <div className="w-full px-4 mb-8 lg:w-8/12 xl:w-1/2 lg:mb-0">
              <h1 className="text-6xl tracking-tighter font-heading md:text-10xl">
                Meet the team
              </h1>
            </div>
            <div className="w-full px-4 lg:w-4/12 xl:w-1/2">
              <div className="flex items-center justify-end">
                <a
                  className="inline-flex items-center justify-center w-16 h-16 mr-8 text-black transition duration-200 border border-black rounded-full sm:h-18 sm:w-18 hover:text-white hover:bg-black"
                  href="#"
                >
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.7051 7.12817L4.15732 13.6759L10.7051 20.2237"
                      stroke="currentColor"
                      strokeWidth="1.61806"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.4941 13.6759H4.33949"
                      stroke="currentColor"
                      strokeWidth="1.61806"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center w-16 h-16 text-black transition duration-200 border border-black rounded-full sm:h-18 sm:w-18 hover:text-white hover:bg-black"
                  href="#"
                >
                  <svg
                    width={27}
                    height={27}
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.2949 7.12817L22.8427 13.6759L16.2949 20.2237"
                      stroke="currentColor"
                      strokeWidth="1.61806"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.50586 13.6759H22.6605"
                      stroke="currentColor"
                      strokeWidth="1.61806"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 w-full max-w-md mr-6 xl:mr-12">
              <img
                className="block mb-8"
                src="asitrastudio-assets/team/people-big-circle1.png"
                alt=""
              />
              <div className="max-w-sm">
                <span className="text-sm text-coolGray-600">
                  Director of Marketing
                </span>
                <h4 className="mt-1 mb-6 text-3xl">Leslie Alexander</h4>
                <p className="text-lg text-coolGray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-md mr-6 xl:mr-12">
              <img
                className="block mb-8"
                src="asitrastudio-assets/team/people-big-circle2.png"
                alt=""
              />
              <div className="max-w-sm">
                <span className="text-sm text-coolGray-600">
                  Director of Marketing
                </span>
                <h4 className="mt-1 mb-6 text-3xl">Leslie Alexander</h4>
                <p className="text-lg text-coolGray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-md mr-6 xl:mr-12">
              <img
                className="block mb-8"
                src="asitrastudio-assets/team/people-big-circle3.png"
                alt=""
              />
              <div className="max-w-sm">
                <span className="text-sm text-coolGray-600">
                  Director of Marketing
                </span>
                <h4 className="mt-1 mb-6 text-3xl">Leslie Alexander</h4>
                <p className="text-lg text-coolGray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-md">
              <img
                className="block mb-8"
                src="asitrastudio-assets/team/people-big-circle2.png"
                alt=""
              />
              <div className="max-w-sm">
                <span className="text-sm text-coolGray-600">
                  Director of Marketing
                </span>
                <h4 className="mt-1 mb-6 text-3xl">Leslie Alexander</h4>
                <p className="text-lg text-coolGray-500">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text
                  ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}