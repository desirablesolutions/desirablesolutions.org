import PageLayout from "@layouts/PageLayout"

export default function Custom404() {
    return (
        <PageLayout>

            <section className="pb-24 md:pb-96 pt-24  relative overflow-hidden">
                <div className="hidden xl:block absolute top-0 left-0 w-8 h-full" />
                <div className="absolute bottom-0 left-0 -mb-20 w-full">
                    <img
                        className="block mx-auto"
                        src="wrexa-assets/elements/half-circles-triple.svg"
                        alt=""
                    />
                </div>
                <img
                    className="hidden md:block absolute bottom-0 right-0 mr-80"
                    src="wrexa-assets/images/women-point-left.png"
                    alt=""
                />
                <img
                    className="hidden md:block absolute bottom-0 right-0 mb-40 mr-20"
                    src="wrexa-assets/images/men-drinkin-caffe-green-background.png"
                    alt=""
                />
                <div className="container px-4 mx-auto relative">
                    <div className="max-w-4xl xl:ml-24">
                        <div className="flex items-center mb-24">
                            <span className="font-heading text-xl text-white">00</span>
                            <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                            <span className="font-heading text-xl text-white">404</span>
                        </div>
                        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
                            Ups... Something has gone wrong.
                        </h2>
                        <p className="text-white font-light mb-32">
                            The house by the pond cras ornare, some chords for a three moments, like
                            a sense of truth.
                        </p>
                        <div className="sm:flex">
                            <a
                                className="inline-flex mb-5 sm:mb-0 mr-16 items-center text-white"
                                href="#"
                            >
                                <span className="mr-4">Back to home.</span>
                                <span>
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                                            fill="white"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <a
                                className="inline-block px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                                href="#"
                            >
                                Homepage
                            </a>
                        </div>
                    </div>
                    <img
                        className="md:hidden block ml-auto mt-16"
                        src="wrexa-assets/images/men-drinkin-caffe-green-background.png"
                        alt=""
                    />
                    <img
                        className="md:hidden block mt-8"
                        src="wrexa-assets/images/women-point-left.png"
                        alt=""
                    />
                </div>
            </section>
        </PageLayout>
    )
}