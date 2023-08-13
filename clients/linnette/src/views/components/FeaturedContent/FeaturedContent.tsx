export default function FeaturedContent() {
    return (
        <section className="relative py-12 overflow-hidden md:py-24 bg-coolGray-50">
  <div className="container px-4 mx-auto">
    <h1 className="mb-20 text-6xl tracking-tighter font-heading md:text-10xl">
      Testimonials
    </h1>
    <div className="flex flex-wrap -mx-4">
      <div className="order-last w-full px-4 lg:w-4/12 lg:order-first">
        <div>
          <button className="block px-12 py-6 mb-8 text-left bg-white shadow-lg rounded-3xl">
            <div className="flex items-center">
              <img
                className="block mr-6 h-15 w-15"
                src="asitrastudio-assets/testimonials/avatar-circle1.png"
                alt=""
              />
              <div>
                <span className="block mb-1 text-black">Wade Warren</span>
                <span className="block text-sm text-coolGray-600">
                  CEO, Since Industry
                </span>
              </div>
            </div>
          </button>
          <button className="block px-12 py-6 mb-8 text-left transition duration-150 rounded-3xl hover:bg-white hover:shadow-lg">
            <div className="flex items-center">
              <img
                className="block mr-6 h-15 w-15"
                src="asitrastudio-assets/testimonials/avatar-circle2.png"
                alt=""
              />
              <div>
                <span className="block mb-1 text-black">Wade Warren</span>
                <span className="block text-sm text-coolGray-600">
                  CEO, Since Industry
                </span>
              </div>
            </div>
          </button>
          <button className="block px-12 py-6 text-left transition duration-150 rounded-3xl hover:bg-white hover:shadow-lg">
            <div className="flex items-center">
              <img
                className="block mr-6 w-15 h-15"
                src="asitrastudio-assets/testimonials/avatar-circle3.png"
                alt=""
              />
              <div>
                <span className="block mb-1 text-black">Wade Warren</span>
                <span className="block text-sm text-coolGray-600">
                  CEO, Since Industry
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className="w-full px-4 lg:w-8/12">
        <div className="max-w-xl pt-8 lg:max-w-lg xl:max-w-3xl lg:ml-auto">
          <img
            className="block mb-8"
            src="asitrastudio-assets/testimonials/stars.svg"
            alt=""
          />
          <h3 className="mb-5 text-2xl">
            “KW70 Fix is a leading real estate investment firm in the World,
            headquartered in New York with offices
          </h3>
          <p className="mb-10 text-xl leading-normal">
            <span>
              “KW70 Fix is a leading real estate investment firm in the World,
              headquartered in New York with offices in
            </span>
            <span className="text-coolGray-600">
              London, Chicago, Barcelona, Vienna, Rome, Las Vegas.
            </span>
            <span>
              KW70 Fix initiative seeks out regions and markets with robust
              underlying catalysts, such as burgeoning technology sectors, a
              diverse workforce, and a strong entrepreneurial culture.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}