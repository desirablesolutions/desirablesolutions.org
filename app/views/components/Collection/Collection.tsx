import SectionSx from "@styles/Section.sx"


const Collection = () => {

    return (
        <section style={SectionSx} className="py-24 md:py-40">
        <div className="container px-4 mx-auto">
          <div className="flex items-center mb-12">
            <span className="font-heading text-xl">07</span>
            <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
            <span className="font-heading text-xl">Our Blog</span>
          </div>
          <div className="text-center mb-24">
            <span className="inline-block px-5 py-2 mb-12 text-sm bg-white rounded-full">
              Latest articles
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl mb-24">
              Designed by experts, inspired by real life
            </h2>
          </div>
          <div className="flex flex-wrap justify-center -mx-4 relative">
            <a
              className="hidden lg:inline-block absolute top-1/2 left-0 ml-2 2xl:ml-4"
              href="#"
            >
              <svg
                width={11}
                height={20}
                viewBox="0 0 11 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L1 10L9 2"
                  stroke="#232126"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="hidden lg:inline-block absolute top-1/2 right-0 mr-2 2xl:mr-4"
              href="#"
            >
              <svg
                width={12}
                height={20}
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L11 10L2 18"
                  stroke="#232126"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="square"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div className="w-full lg:w-1/2 3xl:w-auto px-4 3xl:px-12 mb-16 lg:mb-0 lg:border-r">
              <div className="max-w-md mx-auto relative pb-16 lg:pb-0 border-b lg:border-b-0">
                <div className="bg-white rounded-b">
                  <img
                    className="block w-full h-64 mb-12 rounded"
                    src="wrexa-assets/images/swing.png"
                    alt=""
                  />
                  <div className="pb-10 px-8 lg:px-12 border-b">
                    <a className="block" href="#">
                      <h4 className="text-3xl mb-5">
                        We’re excited to reveal a brand new take on a Wrexa Set.
                      </h4>
                      <p className="mb-10">
                        The house by the pond cras ornare, some chords for a three
                        moments, like a sense of truth.
                      </p>
                    </a>
                    <a
                      className="inline-block mr-5 text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      #interiodesign
                    </a>
                    <a
                      className="inline-block text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      #design
                    </a>
                  </div>
                  <div className="flex items-center px-12 pt-5 pb-6">
                    <img
                      className="w-10 h-10 mr-4 rounded-full"
                      src="wrexa-assets/images/avatar-women1.png"
                      alt=""
                    />
                    <span className="text-gray-400">Pora Kakkeren</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 3xl:w-auto px-4 3xl:px-12">
              <div className="max-w-md mx-auto relative">
                <div className="bg-white rounded-b">
                  <img
                    className="block w-full h-64 mb-12 rounded"
                    src="wrexa-assets/images/chair.png"
                    alt=""
                  />
                  <div className="pb-10 px-8 lg:px-12 border-b">
                    <a className="block" href="#">
                      <h4 className="text-3xl mb-5">
                        Update, february: Only with us you will learn the real trends
                      </h4>
                      <p className="mb-10">
                        The house by the pond cras ornare, some chords for a three
                        moments, like a sense of truth.
                      </p>
                    </a>
                    <a
                      className="inline-block mr-5 text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      #interiodesign
                    </a>
                    <a
                      className="inline-block text-indigo-500 hover:text-indigo-600"
                      href="#"
                    >
                      #design
                    </a>
                  </div>
                  <div className="flex items-center px-12 pt-5 pb-6">
                    <img
                      className="w-10 h-10 mr-4 rounded-full"
                      src="wrexa-assets/images/avatar2.png"
                      alt=""
                    />
                    <span className="text-gray-400">Ethan O. Son</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden mt-16 text-center">
              <a className="inline-block mr-6" href="#">
                <svg
                  width={11}
                  height={20}
                  viewBox="0 0 11 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L1 10L9 2"
                    stroke="#232126"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="inline-block" href="#">
                <svg
                  width={12}
                  height={20}
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L11 10L2 18"
                    stroke="#232126"
                    strokeWidth="1.5"
                    strokeMiterlimit={10}
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    )
}
export default Collection