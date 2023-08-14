export default function Contact() {
    return (
        <section
            className="relative pt-24 overflow-hidden md:pt-40 xl:pb-40"
        >
            <div className="container px-4 mx-auto">
                <img
                    className="absolute top-0 right-0 hidden object-cover w-1/4 h-full mt-10 xl:block"
                    src="wrexa-assets/images/women-right-messages.png"
                    alt=""
                />
                <div className="w-full xl:w-4/5">
                    <div className="flex items-center mb-12">
                        <span className="text-xl text-white font-heading">07</span>
                        <div className="w-1 h-1 mx-4 bg-gray-200 rounded-full"></div>
                        <span className="text-xl text-white font-heading">Contact us</span>
                    </div>
                    <h2
                        className="mb-24 text-5xl text-white font-heading sm:text-6xl xl:text-7xl"
                    >
                        Have a question?
                    </h2>
                    <form action="#" method="post">
                        <div className="max-w-xs mx-auto lg:max-w-none">
                            <div className="flex flex-wrap -mb-6">
                                <span
                                    className="mb-6 mr-4 text-2xl text-white xl:text-3xl font-heading"
                                >
                                    Hello, my name is
                                </span>
                                <div>
                                    <input
                                        className="block max-w-xs px-6 pb-2 mb-6 mr-4 text-2xl text-center text-gray-700 placeholder-gray-700 bg-transparent border-b border-gray-700 outline-none xl:text-3xl font-heading"
                                        type="text"
                                        placeholder="type here"
                                    />
                                </div>
                                <span className="mb-6 text-2xl text-white xl:text-3xl font-heading">
                                    and I’m looking
                                </span>
                            </div>
                            <div className="flex flex-wrap mt-6 -mb-6">
                                <span
                                    className="mb-6 mr-4 text-2xl text-white xl:text-3xl font-heading"
                                >
                                    for a
                                </span>
                                <div>
                                    <select
                                        className="block max-w-xs px-6 pb-2 mb-6 mr-4 text-2xl text-center text-gray-700 bg-transparent border-b border-gray-700 outline-none xl:text-3xl font-heading"
                                        aria-label="New select example"
                                    >
                                        <option selected={false}>select here</option>
                                        <option value={1}>job</option>
                                        <option value={1}>work</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-wrap mt-6 -mb-6">
                                <span
                                    className="mb-6 mr-4 text-2xl text-white xl:text-3xl font-heading"
                                >
                                    Get in touch with me at
                                </span>
                                <div>
                                    <input
                                        className="block max-w-xs px-6 pb-2 mb-6 mr-4 text-2xl text-center text-gray-700 placeholder-gray-700 bg-transparent border-b border-gray-700 outline-none xl:text-3xl font-heading"
                                        type="email"
                                        placeholder="your Email here"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center mt-16 mb-24">
                                <input type="checkbox" defaultValue="" id="" />
                                <label className="ml-6 text-gray-600" htmlFor="">
                                    Accept all terms and conditions
                                </label>
                            </div>
                            <a
                                className="inline-block w-full py-4 font-medium text-center text-white transition bg-indigo-500 rounded lg:w-auto px-7 hover:bg-indigo-600 duration-250"
                                href="#"
                            >
                                Send message!
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <img
                className="block object-cover w-full mt-24 xl:hidden h-128"
                src="wrexa-assets/images/women-right-messages.png"
                alt=""
            />
        </section>

    )
}