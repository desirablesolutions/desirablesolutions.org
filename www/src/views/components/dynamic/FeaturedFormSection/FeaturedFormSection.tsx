export default function FeaturedFormSection() {
    return (
        <section className="bg-gray-900 relative overflow-hidden">
            <img
                className="hidden lg:block absolute top-0 left-0 w-3/5 h-full mt-10 object-cover"
                src="wrexa-assets/images/young-students.png"
                alt=""
            />
            <div className="container px-4 mx-auto">
                <div className="w-full lg:w-1/3 pt-32 lg:pb-40 ml-auto">
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center mb-24">
                            <span className="font-heading text-xl text-white">03</span>
                            <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                            <span className="font-heading text-xl text-white">Newsletter</span>
                        </div>
                        <form action="#" method="post">
                            <h1 className="font-heading text-4xl sm:text-6xl 3xl:text-7xl text-white mb-16">
                                Join our mailing list
                            </h1>
                            <div className="relative flex items-center justify-between lg:justify-start pb-2 mb-16 border-b-2 border-gray-700">
                                <div className="w-auto">
                                    <input
                                        className="w-full lg:w-72 pr-6 font-heading text-3xl placeholder-gray-700 text-gray-700 bg-transparent outline-none"
                                        type="email"
                                        placeholder="Drop Email here"
                                    />
                                </div>
                                <div className="w-auto">
                                    <svg
                                        width={17}
                                        height={20}
                                        viewBox="0 0 17 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M17 11.2782L15.4966 9.73549L9.5625 15.8244L9.5625 -3.25103e-07L7.4375 -4.1799e-07L7.4375 15.8244L1.50344 9.73549L-4.92984e-07 11.2782L8.5 20L17 11.2782Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex mb-2 items-center">
                                <div className="flex mr-6 items-center justify-center w-8 h-8 bg-indigo-500 rounded-full">
                                    <svg
                                        width={11}
                                        height={9}
                                        viewBox="0 0 11 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.6209 1.61585L9.70839 0.669536C9.67848 0.638397 9.64294 0.613688 9.6038 0.596828C9.56467 0.579968 9.5227 0.571289 9.48032 0.571289C9.43794 0.571289 9.39598 0.579968 9.35684 0.596828C9.3177 0.613688 9.28216 0.638397 9.25225 0.669536L4.58652 5.77725L1.91214 3.00276C1.85084 2.93921 1.76771 2.90351 1.68103 2.90351C1.59435 2.90351 1.51121 2.93921 1.44991 3.00276L0.525397 3.96223C0.464114 4.0258 0.429688 4.112 0.429688 4.20188C0.429688 4.29177 0.464114 4.37797 0.525397 4.44153L4.329 8.47733C4.36412 8.51302 4.40678 8.53974 4.4536 8.55537C4.50042 8.57099 4.5501 8.57509 4.59871 8.56735C4.64876 8.57637 4.70017 8.57291 4.74868 8.55726C4.7972 8.54161 4.84142 8.51421 4.8777 8.47733L10.6209 2.08913C10.6815 2.02636 10.7155 1.94123 10.7155 1.85246C10.7155 1.7637 10.6815 1.67857 10.6209 1.6158V1.61585Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <span className="text-gray-500">
                                    Beautiful and awesome interface
                                </span>
                            </div>
                            <div className="flex mb-2 items-center">
                                <div className="flex mr-6 items-center justify-center w-8 h-8 bg-indigo-500 rounded-full">
                                    <svg
                                        width={11}
                                        height={9}
                                        viewBox="0 0 11 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.6209 1.61585L9.70839 0.669536C9.67848 0.638397 9.64294 0.613688 9.6038 0.596828C9.56467 0.579968 9.5227 0.571289 9.48032 0.571289C9.43794 0.571289 9.39598 0.579968 9.35684 0.596828C9.3177 0.613688 9.28216 0.638397 9.25225 0.669536L4.58652 5.77725L1.91214 3.00276C1.85084 2.93921 1.76771 2.90351 1.68103 2.90351C1.59435 2.90351 1.51121 2.93921 1.44991 3.00276L0.525397 3.96223C0.464114 4.0258 0.429688 4.112 0.429688 4.20188C0.429688 4.29177 0.464114 4.37797 0.525397 4.44153L4.329 8.47733C4.36412 8.51302 4.40678 8.53974 4.4536 8.55537C4.50042 8.57099 4.5501 8.57509 4.59871 8.56735C4.64876 8.57637 4.70017 8.57291 4.74868 8.55726C4.7972 8.54161 4.84142 8.51421 4.8777 8.47733L10.6209 2.08913C10.6815 2.02636 10.7155 1.94123 10.7155 1.85246C10.7155 1.7637 10.6815 1.67857 10.6209 1.6158V1.61585Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <span className="text-gray-500">
                                    Online collaborative anytime, anywhere.
                                </span>
                            </div>
                            <div className="flex items-center mb-24">
                                <div className="flex mr-6 items-center justify-center w-8 h-8 bg-indigo-500 rounded-full">
                                    <svg
                                        width={11}
                                        height={9}
                                        viewBox="0 0 11 9"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.6209 1.61585L9.70839 0.669536C9.67848 0.638397 9.64294 0.613688 9.6038 0.596828C9.56467 0.579968 9.5227 0.571289 9.48032 0.571289C9.43794 0.571289 9.39598 0.579968 9.35684 0.596828C9.3177 0.613688 9.28216 0.638397 9.25225 0.669536L4.58652 5.77725L1.91214 3.00276C1.85084 2.93921 1.76771 2.90351 1.68103 2.90351C1.59435 2.90351 1.51121 2.93921 1.44991 3.00276L0.525397 3.96223C0.464114 4.0258 0.429688 4.112 0.429688 4.20188C0.429688 4.29177 0.464114 4.37797 0.525397 4.44153L4.329 8.47733C4.36412 8.51302 4.40678 8.53974 4.4536 8.55537C4.50042 8.57099 4.5501 8.57509 4.59871 8.56735C4.64876 8.57637 4.70017 8.57291 4.74868 8.55726C4.7972 8.54161 4.84142 8.51421 4.8777 8.47733L10.6209 2.08913C10.6815 2.02636 10.7155 1.94123 10.7155 1.85246C10.7155 1.7637 10.6815 1.67857 10.6209 1.6158V1.61585Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <span className="text-gray-500">More plugins</span>
                            </div>
                            <button
                                className="inline-block w-full px-8 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                                type="submit"
                            >
                                Join now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <img
                className="block lg:hidden mt-24 object-cover"
                src="wrexa-assets/images/young-students.png"
                alt=""
            />
        </section>

    )
}