const DataSummary = ({ order, title, heading }) => {

    return (
        <section className="relative pb-24 md:pb-40  overflow-hidden">
            <div className="bg-white h-16 mb-56">
                <div className="heartbeat absolute top-0 left-1/2">
                    <div className="w-px h-16 bg-gray-900" />
                    <div className="w-px h-24 bg-white" />
                </div>
            </div>


            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <h2 className="font-heading text-5xl sm:text-6xl text-white">
                        {heading}
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4 mb-32">
                    <div className="w-full lg:w-1/2 3xl:w-1/4 px-4 border-b lg:border-b-0 lg:border-r border-gray-800">
                        <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                            <img
                                className="block mb-6 sm:mb-0 sm:mr-8"
                                src="wrexa-assets/elements/stats-icon2.svg"
                                alt=""
                            />
                            <div>
                                <span className="text-sm text-gray-400">Your top</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    $13,560
                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                    No-look-pass
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 3xl:w-1/4 px-4 border-b lg:border-b-0 3xl:border-r border-gray-800">
                        <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                            <img
                                className="block mb-6 sm:mb-0 sm:mr-8"
                                src="wrexa-assets/elements/stats-icon1.svg"
                                alt=""
                            />
                            <div>
                                <span className="text-sm text-gray-400">Your top</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    $13,560
                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                    Some chords for a three moments
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 3xl:w-1/4 px-4 border-b lg:border-b-0 lg:border-r border-gray-800">
                        <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                            <img
                                className="block mb-6 sm:mb-0 sm:mr-8"
                                src="wrexa-assets/elements/stats-icon3.svg"
                                alt=""
                            />
                            <div>
                                <span className="text-sm text-gray-400">Your top</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    $13,560
                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                    Waiting, watching, designing
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 3xl:w-1/4 px-4">
                        <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                            <img
                                className="block mb-6 sm:mb-0 sm:mr-8"
                                src="wrexa-assets/elements/stats-icon1.svg"
                                alt=""
                            />
                            <div>
                                <span className="text-sm text-gray-400">Your top</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    +17,500
                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                    The final projects
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                        href="#"
                    >
                        All Reviews
                    </a>
                </div>
            </div>
        </section>

    )
}

export default DataSummary