export default function FeaturedSummary() {
    return (
        <section className="relative py-24 md:pt-32">
            <div className="container px-4 mx-auto relative">
                <img
                    className="hidden md:block absolute bottom-0 left-0 mb-52 lg:mb-12 w-full"
                    src="wrexa-assets/elements/half-circles-with-logo.svg"
                    alt=""
                />
                <div className="relative">
                    <div className="flex items-center mb-24 sm:mb-40">
                        <span className="font-heading text-xl text-white">01</span>
                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                        <span className="font-heading text-xl text-white">Introduction</span>
                    </div>
                    <div className="text-center mb-32">
                        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white">
                            How it works?
                        </h1>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-24 md:mb-52">
                        <div className="w-full md:w-1/2 2xl:w-1/4 px-4 mb-16 2xl:mb-0">
                            <div className="max-w-xs mx-auto pt-8 pb-14 px-12 bg-gray-800 rounded-xl">
                                <span className="text-sm text-gray-500">Step 1</span>
                                <h4 className="text-3xl text-white mt-1 mb-8">
                                    Download our Application
                                </h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 2xl:w-1/4 px-4 2xl:mt-52 mb-16 2xl:mb-0">
                            <div className="max-w-xs mx-auto pt-8 pb-14 px-12 bg-gray-800 rounded-xl">
                                <span className="text-sm text-gray-500">Step 2</span>
                                <h4 className="text-3xl text-white mt-1 mb-8">
                                    Register your account
                                </h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 2xl:w-1/4 px-4 2xl:mt-52 mb-16 md:mb-0">
                            <div className="max-w-xs mx-auto pt-8 pb-14 px-12 bg-gray-800 rounded-xl">
                                <span className="text-sm text-gray-500">Step 3</span>
                                <h4 className="text-3xl text-white mt-1 mb-8">
                                    Find your unique style
                                </h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 2xl:w-1/4 px-4">
                            <div className="max-w-xs mx-auto pt-8 pb-14 px-12 bg-gray-800 rounded-xl">
                                <span className="text-sm text-gray-500">Step 4</span>
                                <h4 className="text-3xl text-white mt-1 mb-8">Build your home!</h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="block mx-auto md:hidden"
                        src="wrexa-assets/elements/half-circles-with-logo.svg"
                        alt=""
                    />
                    <div className="sm:flex">
                        <a
                            className="inline-block w-full sm:w-auto sm:mr-24 md:mr-40 mb-2 sm:mb-0 text-white"
                            href="#"
                        >
                            Download application
                        </a>
                        <a
                            className="inline-block w-full sm:w-auto sm:mr-auto mb-2 sm:mb-0 text-white"
                            href="#"
                        >
                            Select plan
                        </a>
                        <a className="inline-block w-full sm:w-auto text-white" href="#">
                            Start a conversation
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}