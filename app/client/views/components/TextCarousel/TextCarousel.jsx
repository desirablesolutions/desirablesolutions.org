

const TextCarousel = () => {


    return (

        <section className="py-24 md:py-40">
            <div className="container px-4 mx-auto">
                <div className="flex items-center mb-20">
                    <span className="font-heading text-xl">04</span>
                    <div className="mx-4 rounded-full bg-white h-1 w-1" />
                    <span className="font-heading text-xl">FAQs</span>
                </div>
                <div className="max-w-max mx-auto border-b border-white mb-20">
                    <h4 className="text-center font-heading text-3xl sm:text-4xl">
                        01. Can i change my plan?
                    </h4>
                </div>
                <div className="flex flex-wrap items-center justify-center mb-20">
                    <a className="inline-block px-4" href="#">
                        <svg
                            width={11}
                            height={20}
                            viewBox="0 0 11 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 18L1 10L9 2"
                                stroke="#232126"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="square"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <div className="w-full md:w-5/6 xl:w-2/3 mx-auto text-center order-first md:order-none mb-20 md:mb-0">
                        <p
                            className="font-heading leading-relaxed text-3xl sm:text-4xl md:text-5xl"
                            style={{ lineHeight: "1.5" }}
                        >
                            <span>
                                Yees, u can try us for free for 60 days. We’ll provide u with a
                                free, personalized
                            </span>
                            <span className="border-b-2 border-black">40-minute onboarding</span>
                            <span>call to get you up and running as soon as possible.</span>
                        </p>
                    </div>
                    <a className="inline-block px-4" href="#">
                        <svg
                            width={12}
                            height={20}
                            viewBox="0 0 12 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 2L11 10L2 18"
                                stroke="#232126"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="square"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
                <div className="text-center">
                    <a
                        className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                        href="#"
                    >
                        Have any questions?
                    </a>
                </div>
            </div>
        </section>

    )
}

export default TextCarousel