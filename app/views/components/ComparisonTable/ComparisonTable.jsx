

const ComparisonTable = ({ order, title, heading }) => {

    return (

        <section style={{
            borderTop: '1px solid var(--red-100)',
            background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
            filter: 'opacity(0.91)'
        }} className="pt-32 pb-40">
            <div className="container px-4 mx-auto mb-24 sm:mb-40">
                <div className="flex items-center mb-12">
                    <span className="animate-pulse font-heading text-xl outline p-1 text-white">{order}</span>
                    <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                    <span className="font-heading text-xl text-white">{title}</span>
                </div>

                <div className="text-center">
                    <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white mb-7">
                        Choose the plan
                    </h1>
                    <p className="text-gray-500 mb-16">The house by the pond cras ornare.</p>
                    
                </div>
            </div>
            <div className="relative">
                <div className="hidden lg:block absolute bottom-0 left-0 h-px w-full mb-68  bg-opacity-50 z-10" />
                <div className="hidden lg:block absolute bottom-0 left-0 h-px w-full mb-92  bg-opacity-50 z-10" />
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 relative">
                            <div className="lg:hidden absolute bottom-0 left-0 h-px w-full mb-36 bg-gray-700 bg-opacity-50" />
                            <div className="lg:hidden absolute bottom-0 left-0 h-px w-full mb-12 bg-gray-700 bg-opacity-50" />
                            <div className="max-w-md mx-auto pt-18">
                                <h2 className="font-heading text-4xl text-white mb-4">Lite</h2>
                                <p className="text-gray-500 mb-26">
                                    The house by the pond cras ornare.
                                </p>
                                <h5 className="text-lg text-white mb-14">Cloud storage</h5>
                                <h5 className="text-lg text-white mb-14">Users</h5>
                                <h5 className="text-lg text-white">Commercial right</h5>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0 relative">
                            <div className="lg:hidden absolute bottom-0 left-0 h-px w-full mb-68 bg-opacity-50" />
                            <div className="lg:hidden absolute bottom-0 left-0 h-px w-full mb-92 bg-opacity-50" />
                            <div className="max-w-md mx-auto pt-18 px-12 pb-20 bg-gray-800 rounded-2xl">
                                <h2 className="font-heading text-4xl text-white mb-8">Team</h2>
                                <div className="flex mb-20">
                                    <span className="mr-2 text-2xl text-white">£</span>
                                    <span className="text-3xl text-white">22.49</span>
                                    <span className="self-end text-sm text-gray-500">/per mo</span>
                                </div>
                                <div className="mb-20">
                                    <div className="flex items-center mb-14">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle opacity="0.1" cx={14} cy={14} r={14} fill="#95A8FF" />
                                            <path
                                                d="M18.9172 11.914L18.1187 11.086C18.0926 11.0587 18.0615 11.0371 18.0272 11.0223C17.993 11.0076 17.9563 11 17.9192 11C17.8821 11 17.8454 11.0076 17.8111 11.0223C17.7769 11.0371 17.7458 11.0587 17.7196 11.086L13.6371 15.5552L11.297 13.1275C11.2434 13.0719 11.1706 13.0407 11.0948 13.0407C11.019 13.0407 10.9462 13.0719 10.8926 13.1275L10.0836 13.9671C10.03 14.0227 9.99988 14.0981 9.99988 14.1768C9.99988 14.2554 10.03 14.3308 10.0836 14.3865L13.4118 17.9178C13.4425 17.949 13.4798 17.9724 13.5208 17.9861C13.5618 17.9997 13.6052 18.0033 13.6478 17.9965C13.6916 18.0044 13.7366 18.0014 13.779 17.9877C13.8214 17.974 13.8601 17.9501 13.8919 17.9178L18.9172 12.3281C18.9702 12.2732 18.9999 12.1987 18.9999 12.121C18.9999 12.0434 18.9702 11.9689 18.9172 11.9139V11.914Z"
                                                fill="#95A8FF"
                                            />
                                            <defs>
                                                <rect
                                                    width={9}
                                                    height={7}
                                                    fill="white"
                                                    transform="translate(10 11)"
                                                />
                                            </defs>
                                        </svg>
                                        <span className="ml-4 text-white font-light">10TB</span>
                                    </div>
                                    <div className="flex items-center mb-14">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle opacity="0.1" cx={14} cy={14} r={14} fill="#95A8FF" />
                                            <path
                                                d="M18.9172 11.914L18.1187 11.086C18.0926 11.0587 18.0615 11.0371 18.0272 11.0223C17.993 11.0076 17.9563 11 17.9192 11C17.8821 11 17.8454 11.0076 17.8111 11.0223C17.7769 11.0371 17.7458 11.0587 17.7196 11.086L13.6371 15.5552L11.297 13.1275C11.2434 13.0719 11.1706 13.0407 11.0948 13.0407C11.019 13.0407 10.9462 13.0719 10.8926 13.1275L10.0836 13.9671C10.03 14.0227 9.99988 14.0981 9.99988 14.1768C9.99988 14.2554 10.03 14.3308 10.0836 14.3865L13.4118 17.9178C13.4425 17.949 13.4798 17.9724 13.5208 17.9861C13.5618 17.9997 13.6052 18.0033 13.6478 17.9965C13.6916 18.0044 13.7366 18.0014 13.779 17.9877C13.8214 17.974 13.8601 17.9501 13.8919 17.9178L18.9172 12.3281C18.9702 12.2732 18.9999 12.1987 18.9999 12.121C18.9999 12.0434 18.9702 11.9689 18.9172 11.9139V11.914Z"
                                                fill="#95A8FF"
                                            />
                                            <defs>
                                                <rect
                                                    width={9}
                                                    height={7}
                                                    fill="white"
                                                    transform="translate(10 11)"
                                                />
                                            </defs>
                                        </svg>
                                        <span className="ml-4 text-white font-light">
                                            10 team members
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle opacity="0.1" cx={14} cy={14} r={14} fill="#95A8FF" />
                                            <path
                                                d="M18.9172 11.914L18.1187 11.086C18.0926 11.0587 18.0615 11.0371 18.0272 11.0223C17.993 11.0076 17.9563 11 17.9192 11C17.8821 11 17.8454 11.0076 17.8111 11.0223C17.7769 11.0371 17.7458 11.0587 17.7196 11.086L13.6371 15.5552L11.297 13.1275C11.2434 13.0719 11.1706 13.0407 11.0948 13.0407C11.019 13.0407 10.9462 13.0719 10.8926 13.1275L10.0836 13.9671C10.03 14.0227 9.99988 14.0981 9.99988 14.1768C9.99988 14.2554 10.03 14.3308 10.0836 14.3865L13.4118 17.9178C13.4425 17.949 13.4798 17.9724 13.5208 17.9861C13.5618 17.9997 13.6052 18.0033 13.6478 17.9965C13.6916 18.0044 13.7366 18.0014 13.779 17.9877C13.8214 17.974 13.8601 17.9501 13.8919 17.9178L18.9172 12.3281C18.9702 12.2732 18.9999 12.1987 18.9999 12.121C18.9999 12.0434 18.9702 11.9689 18.9172 11.9139V11.914Z"
                                                fill="#95A8FF"
                                            />
                                            <defs>
                                                <rect
                                                    width={9}
                                                    height={7}
                                                    fill="white"
                                                    transform="translate(10 11)"
                                                />
                                            </defs>
                                        </svg>
                                        <span className="ml-4 text-white font-light">Yes</span>
                                    </div>
                                </div>
                                <div>
                                    <a
                                        className="inline-block w-full px-8 py-4 text-center font-medium bg-red-500 hover:bg-red-200 text-white rounded transition-all"
                                        href="#"
                                    >
                                        Start free trial
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 px-4 relative">
                            <div className="lg:hidden absolute bottom-0 left-0 h-px w-full mb-68 bg-gray-700 bg-opacity-50" />
                            <div className="lg:hidden absolute bottom-0 left-0 h-px w-full mb-92 bg-gray-700 bg-opacity-50" />
                            <div className="max-w-md mx-auto pt-18 px-12 pb-20 bg-gray-800 rounded-2xl">
                                <h2 className="font-heading text-4xl text-white mb-8">Plus</h2>
                                <div className="flex mb-20">
                                    <span className="mr-2 text-2xl text-white">£</span>
                                    <span className="text-3xl text-white">25.49</span>
                                    <span className="self-end text-sm text-gray-500">/per mo</span>
                                </div>
                                <div className="mb-20">
                                    <div className="flex items-center mb-14">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle opacity="0.1" cx={14} cy={14} r={14} fill="#95A8FF" />
                                            <path
                                                d="M18.9172 11.914L18.1187 11.086C18.0926 11.0587 18.0615 11.0371 18.0272 11.0223C17.993 11.0076 17.9563 11 17.9192 11C17.8821 11 17.8454 11.0076 17.8111 11.0223C17.7769 11.0371 17.7458 11.0587 17.7196 11.086L13.6371 15.5552L11.297 13.1275C11.2434 13.0719 11.1706 13.0407 11.0948 13.0407C11.019 13.0407 10.9462 13.0719 10.8926 13.1275L10.0836 13.9671C10.03 14.0227 9.99988 14.0981 9.99988 14.1768C9.99988 14.2554 10.03 14.3308 10.0836 14.3865L13.4118 17.9178C13.4425 17.949 13.4798 17.9724 13.5208 17.9861C13.5618 17.9997 13.6052 18.0033 13.6478 17.9965C13.6916 18.0044 13.7366 18.0014 13.779 17.9877C13.8214 17.974 13.8601 17.9501 13.8919 17.9178L18.9172 12.3281C18.9702 12.2732 18.9999 12.1987 18.9999 12.121C18.9999 12.0434 18.9702 11.9689 18.9172 11.9139V11.914Z"
                                                fill="#95A8FF"
                                            />
                                            <defs>
                                                <rect
                                                    width={9}
                                                    height={7}
                                                    fill="white"
                                                    transform="translate(10 11)"
                                                />
                                            </defs>
                                        </svg>
                                        <span className="ml-4 text-white font-light">10TB</span>
                                    </div>
                                    <div className="flex items-center mb-14">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle opacity="0.1" cx={14} cy={14} r={14} fill="#95A8FF" />
                                            <path
                                                d="M18.9172 11.914L18.1187 11.086C18.0926 11.0587 18.0615 11.0371 18.0272 11.0223C17.993 11.0076 17.9563 11 17.9192 11C17.8821 11 17.8454 11.0076 17.8111 11.0223C17.7769 11.0371 17.7458 11.0587 17.7196 11.086L13.6371 15.5552L11.297 13.1275C11.2434 13.0719 11.1706 13.0407 11.0948 13.0407C11.019 13.0407 10.9462 13.0719 10.8926 13.1275L10.0836 13.9671C10.03 14.0227 9.99988 14.0981 9.99988 14.1768C9.99988 14.2554 10.03 14.3308 10.0836 14.3865L13.4118 17.9178C13.4425 17.949 13.4798 17.9724 13.5208 17.9861C13.5618 17.9997 13.6052 18.0033 13.6478 17.9965C13.6916 18.0044 13.7366 18.0014 13.779 17.9877C13.8214 17.974 13.8601 17.9501 13.8919 17.9178L18.9172 12.3281C18.9702 12.2732 18.9999 12.1987 18.9999 12.121C18.9999 12.0434 18.9702 11.9689 18.9172 11.9139V11.914Z"
                                                fill="#95A8FF"
                                            />
                                            <defs>
                                                <rect
                                                    width={9}
                                                    height={7}
                                                    fill="white"
                                                    transform="translate(10 11)"
                                                />
                                            </defs>
                                        </svg>
                                        <span className="ml-4 text-white font-light">
                                            10 team members
                                        </span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg
                                            width={28}
                                            height={28}
                                            viewBox="0 0 28 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle opacity="0.1" cx={14} cy={14} r={14} fill="#95A8FF" />
                                            <path
                                                d="M18.9172 11.914L18.1187 11.086C18.0926 11.0587 18.0615 11.0371 18.0272 11.0223C17.993 11.0076 17.9563 11 17.9192 11C17.8821 11 17.8454 11.0076 17.8111 11.0223C17.7769 11.0371 17.7458 11.0587 17.7196 11.086L13.6371 15.5552L11.297 13.1275C11.2434 13.0719 11.1706 13.0407 11.0948 13.0407C11.019 13.0407 10.9462 13.0719 10.8926 13.1275L10.0836 13.9671C10.03 14.0227 9.99988 14.0981 9.99988 14.1768C9.99988 14.2554 10.03 14.3308 10.0836 14.3865L13.4118 17.9178C13.4425 17.949 13.4798 17.9724 13.5208 17.9861C13.5618 17.9997 13.6052 18.0033 13.6478 17.9965C13.6916 18.0044 13.7366 18.0014 13.779 17.9877C13.8214 17.974 13.8601 17.9501 13.8919 17.9178L18.9172 12.3281C18.9702 12.2732 18.9999 12.1987 18.9999 12.121C18.9999 12.0434 18.9702 11.9689 18.9172 11.9139V11.914Z"
                                                fill="#95A8FF"
                                            />
                                            <defs>
                                                <rect
                                                    width={9}
                                                    height={7}
                                                    fill="white"
                                                    transform="translate(10 11)"
                                                />
                                            </defs>
                                        </svg>
                                        <span className="ml-4 text-white font-light">Yes</span>
                                    </div>
                                </div>
                                <div>
                                    <a
                                        className="inline-block w-full px-8 py-4 text-center font-medium bg-indigo-500 hover:bg-indigo-600 text-white rounded transition duration-250"
                                        href="#"
                                    >
                                        Start free trial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ComparisonTable