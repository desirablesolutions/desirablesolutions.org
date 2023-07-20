



export const defaultProps = {
  favicon: {
    image: {
      src: "wrexa-assets/logos/wrexa-co-logo-name-dark.svg",
      alt: "Wrexa Co Logo Name Dark",
    },
    url: "#",
  },
};




export default function Footer({ title }: any) {
  return (
    <section className="pt-24 md:pt-32 backdrop-blur-sm">
      <div className="container px-4 mx-auto">
        <div className="pb-24">
          <div className="flex flex-wrap items-center justify-between mb-20 -mx-4">
            <div className="w-full px-4 mb-12 md:w-auto md:mb-0">
              <a href="#">
                <img
                  src="wrexa-assets/logos/wrexa-co-logo-name-dark.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="w-full px-4 md:w-auto">
              <a
                className="inline-block py-4 font-medium text-center text-white transition bg-indigo-500 rounded px-7 hover:bg-indigo-600 duration-250"
                href="#"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 mb-16 xl:w-2/6 xl:mb-0">
              <div className="max-w-md">
                <h2 className="mb-10 text-4xl font-heading">
                  {title ?? defaultProps.title}
                </h2>
                <p className="mb-6 font-light">
                  The house by the pond cras ornare
                </p>
                <div className="pb-8 border-b border-gray-200">
                  <a
                    className="inline-block mr-6 text-indigo-500 hover:text-indigo-600"
                    href="#"
                  >
                    +44 0870 5576 00
                  </a>
                  <a
                    className="inline-block text-indigo-500 hover:text-indigo-600"
                    href="#"
                  >
                    hello@wrexa.co
                  </a>
                </div>
                <div className="mt-8">
                  <a className="inline-flex items-center mr-12" href="#">
                    <img
                      className="mr-4"
                      src="wrexa-assets/logos/brands/messenger.svg"
                      alt=""
                    />
                    <span className="font-light">chatshxxk</span>
                  </a>
                  <a className="inline-flex items-center" href="#">
                    <img
                      className="mr-4"
                      src="wrexa-assets/logos/brands/snapchat.svg"
                      alt=""
                    />
                    <span className="font-light">snapshxxk</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-4 mb-8 lg:w-1/4 xl:w-1/6 lg:mb-0">
              <h4 className="mb-12">About</h4>
              <ul>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Story
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Creative Team
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Founders
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Why Us
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a className="inline-block font-light text-gray-900" href="#">
                    Idea
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 px-4 mb-8 lg:w-1/4 xl:w-1/6 lg:mb-0">
              <h4 className="mb-12">Application</h4>
              <ul>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Download Desktop
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Download Mobile
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Sign Up
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Sign In
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Your history
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a className="inline-block font-light text-gray-900" href="#">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 px-4 lg:w-1/4 xl:w-1/6">
              <h4 className="mb-12">Product</h4>
              <ul>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Plans
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Integration
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a className="inline-block font-light text-gray-900" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 px-4 lg:w-1/4 xl:w-1/6">
              <h4 className="mb-12">Support</h4>
              <ul>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    FAQ's
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Live Chat
                  </a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-light text-gray-900" href="#">
                    Hotline +442234480171
                  </a>
                </li>
                <li>
                  <a className="inline-block font-light text-gray-900" href="#">
                    Messages
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-start justify-between -mx-4">
            <div className="w-full px-4 mb-8 lg:w-2/3 xl:w-auto 2xl:mb-0">
              <span className="text-sm font-light">
                © 2022 Wrexa. All rights reserved.
              </span>
              <p className="max-w-xl mt-5 text-xs font-light text-gray-400">
                Cookies are important to the proper functioning of a site. To
                improve your experience, we use cookies to remember log-in
                details and provide secure log-in, collect statistics to
                optimize site functionality, and deliver content tailored to
                your interests...
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/3 xl:w-auto">
              <div>
                <a
                  className="inline-block mr-4 text-sm font-light text-gray-500 hover:text-gray-600"
                  href="#"
                >
                  Privacy Policy
                </a>
                <a
                  className="inline-block mr-4 text-sm font-light text-gray-500 hover:text-gray-600"
                  href="#"
                >
                  Responsible Disclosure
                </a>
                <a
                  className="inline-block mr-4 text-sm font-light text-gray-500 hover:text-gray-600"
                  href="#"
                >
                  Program Policy
                </a>
                <a
                  className="inline-block text-sm font-light text-gray-500 hover:text-gray-600"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
