import Headroom from "react-headroom"
import MenuIcon from "@components/MenuIcon"
import Image from 'next/image'
const Header = ({ favicon, action }) => {

    let { src, href, alt } = favicon

    return (

        <Headroom>

            <section style={{
                borderBottom: '1px solid gray',
            }}
                className="relative backdrop-blur-xl z-50">
                <nav className="relative px-6 sm:px-12 pt-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <a className="inline-block" href={href}>
                            <Image src={src} alt={alt} width="70px" height="70px" />
                        </a>
                    </div>
                    <div className="3xl:hidden pb-4">
                        <button className="flex navbar-burger ml-auto items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-200">
                          <MenuIcon/>
                        </button>
                    </div>
                    <div className=" bg-transparent hidden 3xl:block">
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
                              
                            </div>
                        </div>
                    </div>
                </nav>
             
            </section>
        </Headroom>

    )
}

export default Header