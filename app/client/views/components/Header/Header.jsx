


const Header = (props) => {

    let { user } = props

    return (
        <section>
            <nav className="relative bg-gray-900 px-6 sm:px-12 pt-4">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <a className="inline-block" href="#">
                        <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
                    </a>
                </div>
                <div className="3xl:hidden pb-4">
                    <button className="flex navbar-burger ml-auto items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-200">
                        <svg
                            width={20}
                            height={9}
                            viewBox="0 0 20 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="0.75"
                                y1="1.25"
                                x2="19.25"
                                y2="1.25"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <line
                                x1="0.75"
                                y1="8.25"
                                x2="13.25"
                                y2="8.25"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden 3xl:block">
                    <div className="pb-2">
                        <a
                            className="inline-block mr-6 text-xs text-gray-400 hover:text-gray-300"
                            href="#"
                        >
                            Account
                        </a>
                        <a
                            className="inline-block text-xs text-gray-400 hover:text-gray-300"
                            href="#"
                        >
                            Saved
                        </a>
                    </div>
                    <div>
                        <div className="flex relative">
                            <div className="w-5/12 mr-auto">
                                <div className="pt-5 pr-24 border-t border-gray-100 border-opacity-10">
                                    <ul className="flex items-center justify-end">
                                        <li className="mr-6">
                                            <a
                                                className="inline-flex items-center pb-5 pr-8 text-sm text-white hover:text-gray-200"
                                                href="#"
                                            >
                                                <span className="mr-4">Collection</span>
                                                <svg
                                                    width={12}
                                                    height={7}
                                                    viewBox="0 0 12 7"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10 2L6 6L2 2"
                                                        stroke="white"
                                                        strokeWidth="1.5"
                                                        strokeMiterlimit={10}
                                                        strokeLinecap="square"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                            <div className="border-b-4 border-lime-900" />
                                        </li>
                                        <li className="pb-6 mr-20">
                                            <a
                                                className="inline-block text-sm text-white hover:text-gray-200"
                                                href="#"
                                            >
                                                Projects
                                            </a>
                                        </li>
                                        <li className="pb-6">
                                            <a
                                                className="inline-block text-sm text-white hover:text-gray-200"
                                                href="#"
                                            >
                                                About
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-auto 3xl:w-3/12 mr-4 3xl:mr-12">
                                <div className="pt-5 2xl:pl-10 3xl:pl-24 border-t border-gray-100 border-opacity-10">
                                    <div style={{ height: 1 }} />
                                    <ul className="flex items-center">
                                        <li className="pb-6 mr-12">
                                            <a
                                                className="inline-flex items-center text-sm text-white hover:text-gray-200"
                                                href="#"
                                            >
                                                <span className="mr-4">How to Start</span>
                                                <svg
                                                    width={12}
                                                    height={7}
                                                    viewBox="0 0 12 7"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10 2L6 6L2 2"
                                                        stroke="white"
                                                        strokeWidth="1.5"
                                                        strokeMiterlimit={10}
                                                        strokeLinecap="square"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li className="pb-6">
                                            <a
                                                className="inline-block text-sm text-white hover:text-gray-200"
                                                href="#"
                                            >
                                                Design
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-auto flex-shrink-0">
                                <div className="flex -mt-4 items-center">
                                    <a
                                        className="inline-block w-full sm:w-auto px-7 py-4 mr-12 text-center font-medium text-white border border-white hover:border-gray-200 hover:text-gray-200 rounded"
                                        href="#"
                                    >
                                        Get Started
                                    </a>
                                    <button className="flex items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-200">
                                        <svg
                                            width={20}
                                            height={9}
                                            viewBox="0 0 20 9"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <line
                                                x1="0.75"
                                                y1="1.25"
                                                x2="19.25"
                                                y2="1.25"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                            <line
                                                x1="0.75"
                                                y1="8.25"
                                                x2="13.25"
                                                y2="8.25"
                                                stroke="black"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 sm:max-w-xs z-50">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
                <nav className="relative flex flex-col pt-12 pb-40 h-full w-full bg-gray-200 overflow-y-auto">
                    <div className="px-12">
                        <div>
                            <a className="inline-block mb-52" href="#">
                                <img src="wrexa-assets/logos/logo-wrexa.svg" alt="" width="auto" />
                            </a>
                            <button type="button" aria-label="Close" />
                        </div>
                        <ul>
                            <li className="mb-6">
                                <a className="flex items-center justify-between" href="#">
                                    <span>Collection</span>
                                    <svg
                                        width={12}
                                        height={7}
                                        viewBox="0 0 12 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 2L6 6L2 2"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeMiterlimit={10}
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="mb-6">
                                <a className="inline-block" href="#">
                                    Projects
                                </a>
                            </li>
                            <li className="mb-16">
                                <a className="inline-block" href="#">
                                    About
                                </a>
                            </li>
                            <li className="mb-6">
                                <a className="inline-block" href="#">
                                    How to Start
                                </a>
                            </li>
                            <li>
                                <a className="inline-block" href="#">
                                    Design
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="absolute bottom-0 left-0 w-full">
                    <a className="flex items-center pt-4 pb-5 pl-6 pr-4 bg-white" href="#">
                        <div className="relative mr-4">
                            <img
                                className="w-12 h-12 rounded-full"
                                src="wrexa-assets/images/avatar2.png"
                                alt=""
                            />
                            <div className="absolute bottom-0 left-0 -ml-2 flex items-center justify-center w-6 h-6 bg-green-800 rounded-full text-white text-xs">
                                1
                            </div>
                        </div>
                        <div className="pr-5 mr-auto">
                            <h4 className="text-xs text-gray-400">Account</h4>
                            <span>matloay</span>
                        </div>
                        <svg
                            width={12}
                            height={7}
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 2L6 6L2 2"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeMiterlimit={10}
                                strokeLinecap="square"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Header