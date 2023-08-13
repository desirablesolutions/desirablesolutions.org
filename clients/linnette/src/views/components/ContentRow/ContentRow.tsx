export default function ContentRow() {
    return (
        <section className="py-12 md:py-24 bg-coolGray-50">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-end mb-20 -mx-4">
      <div className="w-full px-4 mb-8 sm:w-1/2 sm:mb-0">
        <h1 className="text-6xl tracking-tighter font-heading sm:text-8xl md:text-10xl">
          Blog
        </h1>
      </div>
      <div className="w-full px-4 text-right sm:w-1/2">
        <a
          className="inline-flex items-center pb-2 font-medium leading-none border-b-2 border-black group"
          href="#"
        >
          <span className="mr-4">See our blog</span>
          <span className="transition duration-100 transform group-hover:rotate-45">
            <svg
              width={11}
              height={11}
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 1.5L1.5 9.5"
                stroke="black"
                strokeWidth="1.3"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 8.83571V1.5H2.16429"
                stroke="black"
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
    <div className="flex flex-wrap -mx-4">
      <div className="w-full px-4 mb-10 lg:w-5/12 xl:w-1/2 lg:mb-0">
        <a
          className="relative block overflow-hidden group h-135 sm:h-150 rounded-4xl"
          href="#"
        >
          <div className="absolute top-0 left-0 w-full h-full transition duration-200 group-hover:bg-opacity-10 group-hover:bg-black" />
          <img
            className="block object-cover w-full h-full"
            src="asitrastudio-assets/blog/blog-shadow.png"
            alt=""
          />
          <div className="absolute bottom-0 left-0 max-w-md lg:max-w-xl p-9">
            <div className="mb-3">
              <span className="inline-block mr-6 py-2 px-3 text-sm text-white group-hover:text-black leading-none border-1.5 border-white group-hover:bg-white rounded-full transition duration-200">
                Interior
              </span>
              <span className="inline-block text-sm text-white">
                9 min read
              </span>
            </div>
            <h3 className="text-4xl tracking-tight text-white sm:text-5xl">
              How to decorating ourdoor sofa
            </h3>
          </div>
        </a>
      </div>
      <div className="w-full px-4 lg:w-7/12 xl:w-1/2">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 mb-10 md:w-7/12 md:mb-0">
            <a className="block group" href="#">
              <div className="relative mb-8 overflow-hidden rounded-4xl">
                <img
                  className="block object-cover w-full h-full"
                  src="asitrastudio-assets/blog/blog2.png"
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full transition duration-200 group-hover:bg-opacity-10 group-hover:bg-black" />
              </div>
              <div className="max-w-xs">
                <div className="mb-3">
                  <span className="inline-block mr-6 py-2 px-3 text-sm text-black group-hover:text-white leading-none border-1.5 border-black group-hover:bg-black rounded-full transition duration-200">
                    Interior
                  </span>
                  <span className="inline-block text-sm font-medium text-coolGray-600">
                    9 min read
                  </span>
                </div>
                <h4 className="text-3xl tracking-tight">
                  How to decorating ourdoor sofa
                </h4>
              </div>
            </a>
          </div>
          <div className="w-full px-4 md:w-5/12">
            <a className="block group" href="#">
              <div className="relative mb-8 overflow-hidden rounded-4xl">
                <img
                  className="block object-cover w-full h-full"
                  src="asitrastudio-assets/blog/blog1.png"
                  alt=""
                />
                <div className="absolute top-0 left-0 w-full h-full transition duration-200 group-hover:bg-opacity-10 group-hover:bg-black" />
              </div>
              <div className="max-w-xs">
                <div className="mb-3">
                  <span className="inline-block mr-6 py-2 px-3 text-sm text-black group-hover:text-white leading-none border-1.5 border-black group-hover:bg-black rounded-full transition duration-200">
                    Interior
                  </span>
                  <span className="inline-block text-sm font-medium text-coolGray-600">
                    9 min read
                  </span>
                </div>
                <h4 className="text-3xl tracking-tight">
                  How to decorating ourdoor sofa
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}