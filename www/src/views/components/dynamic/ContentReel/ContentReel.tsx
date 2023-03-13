export default function ContentGrid() {
    return (
        <section className="py-24 md:pb-40 md:pt-52 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -mx-4 mb-32">
                    <div className="w-full 3xl:w-1/2 px-4 mb-16 3xl:mb-0">
                        <h2 className="max-w-3xl font-heading text-4xl sm:text-6xl xl:text-7xl text-white">
                            Enthralling global photography
                        </h2>
                    </div>
                    <div className="w-full 3xl:w-1/2 px-4 3xl:text-right">
                        <p className="text-white mb-4">
                            The house like a sense of truth that comes from within.
                        </p>
                        <select
                            className="pl-4 pr-2 py-1 bg-transparent border border-gray-500 rounded text-gray-500"
                            name=""
                            id=""
                        >
                            <option value="" selected="">
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
                        <div className="flex justify-start items-start mb-32">
                            <div className="w-full md:flex-shrink-0 max-w-md md:mr-20">
                                <a className="block text-white hover:text-gray-200" href="#">
                                    <img
                                        className="block w-full h-64 object-cover mb-6"
                                        src="wrexa-assets/images/phone-on-table.png"
                                        alt=""
                                    />
                                    <div className="flex items-center">
                                        <span className="font-heading text-xl">01</span>
                                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                                        <span className="font-heading text-xl">New Workspace</span>
                                    </div>
                                </a>
                            </div>
                            <div className="hidden md:block flex-shrink-0 w-full max-w-xl mr-20">
                                <a className="block text-white hover:text-gray-200" href="#">
                                    <img
                                        className="block w-full h-96 object-cover mb-6"
                                        src="wrexa-assets/images/first-room.png"
                                        alt=""
                                    />
                                    <div className="flex items-center">
                                        <span className="font-heading text-xl">02</span>
                                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                                        <span className="font-heading text-xl">The Light Office</span>
                                    </div>
                                </a>
                            </div>
                            <div className="hidden md:block flex-shrink-0 w-full max-w-xl">
                                <a className="block text-white hover:text-gray-200" href="#">
                                    <img
                                        className="block w-full h-96 object-cover mb-6"
                                        src="wrexa-assets/images/gallery3.png"
                                        alt=""
                                    />
                                    <div className="flex items-center">
                                        <span className="font-heading text-xl">03</span>
                                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                                        <span className="font-heading text-xl">
                                            A Little Home in Austria
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <a
                            className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
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