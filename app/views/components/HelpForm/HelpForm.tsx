
const HelpForm = ({ order, title, heading, services }) => {

    return (
        <section className="pt-24 md:pt-40 xl:pb-40  relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <img
                    className="hidden xl:block absolute top-0 right-0 w-1/4 mt-10 h-full object-cover"
                    src="/assets/images/banner.png"
                    alt=""
                />

                <div className="w-full xl:w-4/5">
                    <div className="flex items-center mb-12">
                        <span className="font-heading text-xl outline p-1 text-white">{order}</span>
                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                        <span className="font-heading text-xl text-white">{title}</span>
                    </div>

                    <h2 className="font-heading text-5xl sm:text-6xl xl:text-7xl text-white mb-24">
                        {heading}
                    </h2>
                    <form action="#" method="post">
                        <div className="max-w-xs lg:max-w-none mx-auto">
                            <div className="flex flex-wrap -mb-6">
                                <span className="mr-4 mb-6 text-2xl xl:text-3xl text-white font-heading">
                                    Hello, my name is
                                </span>
                                <div>
                                    <input
                                        className="block max-w-xs mr-4 px-6 pb-2 mb-6 text-center text-2xl xl:text-3xl font-heading border-b border-gray-700 bg-transparent text-gray-700 placeholder-gray-700 outline-none"
                                        type="text"
                                        placeholder="type here"
                                    />
                                </div>
                                <span className="mb-6 text-2xl xl:text-3xl text-white font-heading">
                                    and I’m looking
                                </span>
                            </div>
                            <div className="flex flex-wrap mt-6 -mb-6">
                                <span className="mr-4 mb-6 text-2xl xl:text-3xl text-white font-heading">
                                    for
                                </span>
                                <div>
                                    <select
                                        className="bg-transparent block max-w-xs mr-4 px-6 pb-2 mb-6 text-center text-2xl xl:text-3xl font-heading border-b outline-none"
                                        aria-label="Our Services"
                                    >
                                        <option selected={true}>select service</option>

                                        {
                                            services.map((service, index) => {
                                                return (
                                                    <option className="text-black text-center" key={index} value={index}>{service}</option>
                                                )
                                            })
                                        }


                                    </select>
                                </div>
                                <span className="mb-6 text-2xl xl:text-3xl text-white font-heading">
                                    services.
                                </span>
                            </div>
                            <div className="flex flex-wrap mt-6 -mb-6">
                                <span className="mr-4 mb-6 text-2xl xl:text-3xl text-white font-heading">
                                    Get in touch with me at
                                </span>
                                <div>
                                    <input
                                        className="block max-w-xs mr-4 px-6 pb-2 mb-6 text-center text-2xl xl:text-3xl font-heading border-b border-gray-700 bg-transparent text-gray-700 placeholder-gray-700 outline-none"
                                        type="email"
                                        placeholder="my@organization.com"
                                    />
                                </div>
                            </div>

                            <a
                                className="inline-block w-full lg:w-auto px-7 py-4 mt-3 text-center font-medium bg-red-700 hover:bg-red-400 hover:text-black text-white rounded transition duration-250"
                                href="#"
                            >
                                Send!
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <img
                className="xl:hidden block mt-24 w-full h-128 object-cover"
                src="/assets/images/banner.png"
                alt=""
            />
        </section>

    )
}

export default HelpForm