import CountUp from 'react-countup';

const DataSummary = ({ order, title, heading }) => {

    return (
        <section className="relative pb-24 md:pb-40  overflow-hidden">

            <div className="bg-white h-16 mb-56">
                <div className="heartbeat absolute top-0 left-1/2">
                    <div className="w-px h-16 bg-gray-900" />
                    <div className="w-px h-24 bg-white" />
                </div>
            </div>
            <div className="flex items-center m-4 mb-12">
                <span className="animate-pulse font-heading text-xl outline p-1 text-white">{order}</span>
                <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                <span className="font-heading text-xl text-white">{title}</span>
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
                                <span className="text-sm text-gray-400">Value</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    $<CountUp duration={6} delay={4} end={500000} />
                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                    To be provided to non-profits & ethical organizations.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 3xl:w-1/4 px-4 border-b lg:border-b-0 3xl:border-r border-gray-200">
                        <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                            <img
                                className="block mb-6 sm:mb-0 sm:mr-8"
                                src="wrexa-assets/elements/stats-icon1.svg"
                                alt=""
                            />
                            <div>
                                <span className="text-sm text-gray-400">Services</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    +<CountUp duration={6} delay={4} end={100} />
                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                   To be developed & decentralized for B2B & P2P.
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
                                <span className="text-sm text-gray-400">Identities</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    +<CountUp duration={6} delay={4} end={1500} />

                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                    To be cohered into a single body of skills & services from every race, ethnicity, sex, age, & ability.
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
                                <span className="text-sm text-gray-400">Infrastructures</span>
                                <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                    *<CountUp duration={6} delay={4} end={21} />
                                </h4>
                                <span className="text-xs text-gray-400 font-light">
                                    Run by evil governments & corporations to be replaced with a meritocracy of development & vision.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <a
                        className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-red-500 hover:bg-red-300 text-white hover:text-black rounded transition"
                        href="/vision"
                    >
                        Our Vision
                    </a>
                </div>
            </div>
        </section>

    )
}

export default DataSummary