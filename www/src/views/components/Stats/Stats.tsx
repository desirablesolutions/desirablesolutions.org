export default function Stats() {
    return (
<section className="py-12 md:py-24 bg-coolGray-50">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap mb-16 -mx-4">
      <div className="px-4 mb-12 lg:w-8/12 lg:mb-0">
        <h1 className="mb-8 text-6xl font-heading md:text-10xl tracking-tightest">
          About us
        </h1>
        <p className="text-2xl tracking-tight">
          <span>
            KW70 Fix is a leading real estate investment firm in the World,
            headquartered in New York with offices in
          </span>
          <span className="text-coolGray-600">
            London, Chicago, Barcelona, Vienna, Rome, Las Vegas.
          </span>
        </p>
      </div>
      <div className="px-4 text-right lg:w-4/12 lg:mt-8">
        <a
          className="inline-flex items-center pb-2 font-medium leading-none border-b-2 border-black group"
          href="#"
        >
          <span className="mr-4">Get to know us</span>
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
      <div className="w-full px-4 mb-20 lg:w-1/2 xl:w-7/12 xl:mb-0">
        <div className="xl:max-w-2xl">
          <div className="flex flex-wrap -mx-4 align-items-stretch">
            <div className="w-full px-2 mb-4 md:w-1/2 md:mb-0">
              <div
                className="flex items-end pb-10 pl-8 pr-1 mb-4 border xl:pl-10 pt-28"
                style={{ borderRadius: 50 }}
              >
                <div>
                  <h5 className="text-4xl tracking-tighter xl:text-7xl">
                    40 000+
                  </h5>
                  <span className="block text-coolGray-600">
                    It is a long established
                  </span>
                </div>
              </div>
              <div
                className="flex items-end py-10 pt-16 pl-8 pr-1 border xl:pl-10"
                style={{ borderRadius: 50 }}
              >
                <div>
                  <h5 className="text-4xl tracking-tighter xl:text-7xl">
                    500+
                  </h5>
                  <span className="block text-coolGray-600">
                    It is a long established
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full px-2 md:w-1/2">
              <div
                className="flex items-end pt-16 pb-10 pl-8 pr-1 mb-4 border xl:pl-10"
                style={{ borderRadius: 50 }}
              >
                <div>
                  <h5 className="text-4xl tracking-tighter xl:text-7xl">
                    <span>20+m</span>
                    <sup className="ms-n3">2</sup>
                  </h5>
                  <span className="block text-coolGray-600">
                    It is a long established
                  </span>
                </div>
              </div>
              <div
                className="flex items-end pb-10 pl-8 pr-1 border xl:pl-10 pt-28"
                style={{ borderRadius: 50 }}
              >
                <div>
                  <h5 className="text-4xl tracking-tighter xl:text-7xl">
                    <span>24 700m</span>
                    <sup className="ms-n3">2</sup>
                  </h5>
                  <span className="block text-coolGray-600">
                    It is a long established
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
        <div className="ml-auto lg:max-w-sm xl:max-w-none">
          <p className="text-2xl tracking-tight">
            KW70 Fix initiative seeks out regions and markets with robust
            underlying catalysts, such as burgeoning technology sectors, a
            diverse workforce, and a strong entrepreneurial culture. In those
            carefully selected markets and locations, we bring capital and
            expertise to such as burgeoning technology sectors, a diverse
            workforce, and a strong entrepreneurial culture.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}