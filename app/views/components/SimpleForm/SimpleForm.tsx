import SectionSx from "@styles/Section.sx"



const SimpleForm = () => {

    return (
        <section style={SectionSx} className="relative pt-32 lg:pb-32 overflow-hidden">
            <img
                className="hidden lg:block absolute top-0 right-0 h-full py-10 w-1/2 3xl:w-3/5 object-cover"
                src="wrexa-assets/images/laptop-table.png"
                alt=""
            />
            <div className="container px-4 mx-auto">
                <div className="max-w-md mx-auto lg:mx-0">
                    <div className="flex items-center mb-6">
                        <span className="font-heading text-xl text-white">07</span>
                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                        <span className="font-heading text-xl text-white">
                            Join our mailing list
                        </span>
                    </div>
                    <h1 className="font-heading text-5xl sm:text-6xl 2xl:text-7xl text-white mb-10">
                        Newsletter
                    </h1>
                    <p className="text-xs text-gray-500 mb-14">
                        No spam, we hate it more than you do.
                    </p>
                    <div>
                        <form action="#" method="post">
                            <div className="flex items-center justify-between pl-2 py-2 pr-2 rounded-lg">
                                <input
                                    className="block px-6 w-full text-lg bg-transparent outline-none"
                                    type="text"
                                    placeholder="mat@shuffle.dev"
                                    aria-label=""
                                />
                                <button
                                    className="flex-shrink-0 inline-block px-6 py-4 text-center font-medium bg-red-500 hover:bg-red-600 text-white rounded transition duration-250"
                                    type="submit"
                                >
                                    Join now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <img
                className="lg:hidden block w-full h-64 sm:h-96 mt-24 px-4 object-cover"
                src="wrexa-assets/images/laptop-table.png"
                alt=""
            />
        </section>

    )
}
export default SimpleForm