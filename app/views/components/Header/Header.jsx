import Headroom from "react-headroom"
import MenuIcon from "@components/MenuIcon"
import Image from 'next/image'
import useDrawer from "@controllers/hooks/useDrawer"

const Header = ({ favicon }) => {

    let { src, href, alt } = favicon


    return (

        <Headroom>


            <section style={{
                borderBottom: '1px solid white',
            }}
                className="relative backdrop-blur-xl z-50">
                <nav className="relative px-6 sm:px-12 pt-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <a className="inline-block" href={href}>
                            <Image priority src={src} alt={alt} width="70px" height="70px" />
                        </a>
                    </div>
                    <div className="3xl:hidden pb-4">
                        <button onClick={() => useDrawer({ toggle: true })} className="flex navbar-burger ml-auto items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-red-800">
                            <MenuIcon />
                        </button>
                    </div>
                </nav>

            </section>
        </Headroom>

    )
}

export default Header