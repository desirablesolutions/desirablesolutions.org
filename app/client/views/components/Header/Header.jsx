import Headroom from "react-headroom"

const Header = (props) => {

    let { logoSrc, logoHref } = props

    return (
        <Headroom>
            <section className="bg-black">
                <nav className="relative px-6 sm:px-12 pt-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <a className="inline-block" href="">
                            <img src="" alt="" width="auto" />
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
                </nav>
            </section>
        </Headroom>

    )
}

export default Header