const Gallery = ({ title, order, heading }) => {


  return (

    <section className="pt-24 pb-24 md:pb-40">
      <div className="container px-4 mx-auto">
        <div className="flex items-center mb-6">
          <span className="font-heading text-white text-xl">{order}</span>
          <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
          <span className="font-heading text-white text-xl">{title}</span>
        </div>
        <div className="flex flex-wrap -mx-4 mb-20">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <h1 className="font-heading text-white text-5xl sm:text-6xl">{heading}</h1>
          </div>

          <div className="w-full md:w-1/2 px-4 md:text-right">
            <a className="inline-block" href="#">
              <img
                className="w-16 h-16"
                src="/assets/images/logo-transparent.png"
                alt=""
              />
            </a>
          </div>

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
              <div className="absolute top-0 left-0 -mt-2 w-full">
                <div className="mx-5 rounded-t-xl h-4 bg-gray-200" />
              </div>
              <div className="relative  rounded-md">
                <img
                  className="block w-full h-96 object-cover rounded-md"
                  src="wrexa-assets/images/men-blue-short.png"
                  alt=""
                />
                <div className="pt-12 pb-16 px-6 sm:px-12">
                  <h4 className="text-2xl text-white mb-2">Joshua Desir</h4>
                  <span className="text-gray-500">
                    Founder &amp; Master Designer
                  </span>
                  <p className="mt-8 text-white font-light">
                    The house by the pond cras ornare, some chords for a three
                    moments, like a sense of truth. The lorem ipsum house by the
                    pond cras ornare, some chords for a three moments, like.
                  </p>
                </div>
                <div className="pt-6 pb-7 px-6 sm:px-12 border-t border-gray-200">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 mr-4"
                      src="wrexa-assets/logos/logo-wrexa.svg"
                      alt=""
                    />
                    <span className="text-gray-300">London, UK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 3xl:w-auto px-4 3xl:px-12">
            <div className="max-w-md mx-auto relative">
              <div className="absolute top-0 left-0 -mt-2 w-full">
                <div className="mx-5 rounded-t-xl h-4 bg-gray-200" />
              </div>
              <div className="relative  rounded-md">
                <img
                  className="block w-full h-96 object-cover rounded-md"
                  src="wrexa-assets/images/smiling-young-woman.png"
                  alt=""
                />
                <div className="pt-12 pb-16 px-6 sm:px-12">
                  <h4 className="text-2xl text-white mb-2">Jeffrey Desir</h4>
                  <span className="text-gray-500">Technomancer</span>
                  <p className="mt-8 text-white font-light">
                    The house by the pond cras ornare, some chords for a three
                    moments, like a sense of truth. The lorem ipsum house by the
                    pond cras ornare, some chords for a three moments, like.
                  </p>
                </div>
                <div className="pt-6 pb-7 px-6 sm:px-12 border-t border-gray-200">
                  <div className="flex items-center">
                    <img
                      className="w-10 h-10 mr-4"
                      src="wrexa-assets/logos/logo-wrexa.svg"
                      alt=""
                    />
                    <span className="text-gray-300">Leeds, UK</span>
                  </div>
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

export default Gallery