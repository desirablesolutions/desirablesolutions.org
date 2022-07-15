
const Footer = (props) => {

    return (

        <section>
            <div className="pt-10 pb-16">
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
                        Talk to us
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
                            © 2022 Desirable Solutions. All rights reserved.
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

    )
}

export default Footer