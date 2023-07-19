export default function StatsGrid() {
    return (
        <section className="relative overflow-hidden">
            <div className="pt-40 sm:pt-64 pb-52 sm:pb-64">
                <div className="absolute top-0 left-0 w-full">
                    <div className="h-8 mx-10 bg-white" />
                </div>
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 3xl:w-1/4 px-4 mb-20 3xl:mb-0">
                            <div className="max-w-xs mx-auto px-10">
                                <div className="flex w-26 h-26 mb-12 items-center justify-center rounded-full bg-white">
                                    <span className="font-heading text-3xl">96%</span>
                                </div>
                                <h4 className="font-heading text-2xl mb-6">Projects is good</h4>
                                <p className="font-light mb-14">
                                    Really, like a sense of truth that comes from within. The final
                                    game.
                                </p>
                                <a
                                    className="inline-flex items-center text-green-800 hover:text-green-900"
                                    href="#"
                                >
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
                                    <span className="ml-3">Details</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 3xl:w-1/4 px-4 mb-20 3xl:mb-0">
                            <div className="max-w-xs mx-auto px-10">
                                <div className="flex w-26 h-26 mb-12 items-center justify-center rounded-full bg-white">
                                    <span className="font-heading text-3xl">89%</span>
                                </div>
                                <h4 className="font-heading text-2xl mb-6">Projects is perfect!</h4>
                                <p className="font-light mb-14">
                                    Really, like a sense of truth that comes from within. The final
                                    game.
                                </p>
                                <a
                                    className="inline-flex items-center text-green-800 hover:text-green-900"
                                    href="#"
                                >
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
                                    <span className="ml-3">Details</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 3xl:w-1/4 px-4 mb-20 lg:mb-0">
                            <div className="max-w-xs mx-auto px-10">
                                <div className="flex w-26 h-26 mb-12 items-center justify-center rounded-full bg-white">
                                    <span className="font-heading text-3xl">10M</span>
                                </div>
                                <h4 className="font-heading text-2xl mb-6">Wrexa's users</h4>
                                <p className="font-light mb-14">
                                    Really, like a sense of truth that comes from within. The final
                                    game.
                                </p>
                                <a
                                    className="inline-flex items-center text-green-800 hover:text-green-900"
                                    href="#"
                                >
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
                                    <span className="ml-3">Details</span>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 3xl:w-1/4 px-4">
                            <div className="max-w-xs mx-auto px-10">
                                <div className="flex w-26 h-26 mb-12 items-center justify-center rounded-full bg-white">
                                    <span className="font-heading text-3xl">14d</span>
                                </div>
                                <h4 className="font-heading text-2xl mb-6">Trial is enough</h4>
                                <p className="font-light mb-14">
                                    Really, like a sense of truth that comes from within. The final
                                    game.
                                </p>
                                <a
                                    className="inline-flex items-center text-green-800 hover:text-green-900"
                                    href="#"
                                >
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
                                    <span className="ml-3">Details</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-1/2">
                <div className="w-px h-18 bg-gray-900" />
                <div className="w-px h-12 bg-gray-200" />
            </div>
        </section>

    )
}