import Headroom from "react-headroom"
import MenuIcon from "@components/MenuIcon"

const Header = (props) => {

    let { logoSrc, logoHref } = props

    return (
        <Headroom>
            <section>
                <nav className="relative px-6 sm:px-12 pt-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <a className="inline-block" href="">
                            <img src="" alt="" width="auto" />
                        </a>
                    </div>
                    <div className="3xl:hidden pb-4">
                        <button className="flex navbar-burger ml-auto items-center justify-center w-14 h-14 rounded-full bg-white hover:bg-gray-200">
                           <MenuIcon/>
                        </button>
                    </div>
                </nav>

            </section>
        </Headroom>

    )
}

export default Header