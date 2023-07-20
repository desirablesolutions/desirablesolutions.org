export default function ContentGrid() {
    return (
        <section className="py-24 overflow-hidden md:pb-40 md:pt-52">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center mb-32 -mx-4">
                    <div className="w-full px-4 mb-16 3xl:w-1/2 3xl:mb-0">
                        <h2 className="max-w-3xl text-4xl text-white font-heading sm:text-6xl xl:text-7xl">
                            Enthralling global photography
                        </h2>
                    </div>
                    <div className="w-full px-4 3xl:w-1/2 3xl:text-right">
                        <p className="mb-4 text-white">
                            The house like a sense of truth that comes from within.
                        </p>
                        <select
                            className="py-1 pl-4 pr-2 text-gray-500 bg-transparent border border-gray-500 rounded"
                            name=""
                            id=""
                        >
                            <option value="" selected={false}>
                                2022
                            </option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div className="container px-4 mx-auto">
                    <div>
                        <div className="flex items-start justify-start mb-32">
                            <div className="w-full max-w-md md:flex-shrink-0 md:mr-20">
                                <a className="block text-white hover:text-gray-200" href="#">
                                    <img
                                        className="block object-cover w-full h-64 mb-6"
                                        src="wrexa-assets/images/phone-on-table.png"
                                        alt=""
                                    />
                                    <div className="flex items-center">
                                        <span className="text-xl font-heading">01</span>
                                        <div className="w-1 h-1 mx-4 bg-gray-200 rounded-full" />
                                        <span className="text-xl font-heading">New Workspace</span>
                                    </div>
                                </a>
                            </div>
                            <div className="flex-shrink-0 hidden w-full max-w-xl mr-20 md:block">
                                <a className="block text-white hover:text-gray-200" href="#">
                                    <img
                                        className="block object-cover w-full mb-6 h-96"
                                        src="wrexa-assets/images/first-room.png"
                                        alt=""
                                    />
                                    <div className="flex items-center">
                                        <span className="text-xl font-heading">02</span>
                                        <div className="w-1 h-1 mx-4 bg-gray-200 rounded-full" />
                                        <span className="text-xl font-heading">The Light Office</span>
                                    </div>
                                </a>
                            </div>
                            <div className="flex-shrink-0 hidden w-full max-w-xl md:block">
                                <a className="block text-white hover:text-gray-200" href="#">
                                    <img
                                        className="block object-cover w-full mb-6 h-96"
                                        src="wrexa-assets/images/gallery3.png"
                                        alt=""
                                    />
                                    <div className="flex items-center">
                                        <span className="text-xl font-heading">03</span>
                                        <div className="w-1 h-1 mx-4 bg-gray-200 rounded-full" />
                                        <span className="text-xl font-heading">
                                            A Little Home in Austria
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <a
                            className="inline-block w-full py-4 font-medium text-center text-white transition bg-indigo-500 rounded sm:w-auto px-7 hover:bg-indigo-600 duration-250"
                            href="#"
                        >
                            Create Account
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}