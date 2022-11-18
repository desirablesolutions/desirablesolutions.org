import Headroom from "react-headroom"
import MenuIcon from "@components/MenuIcon"
import Image from 'next/image'
import useMenuDrawer from "@hooks/useMenuDrawer"

export type ImageProps = {
    alt?: string,
    src?: string
}

export type FaviconProps = {
    image?: ImageProps,
    url?: string
}
export type HeaderProps = {
    favicon?: FaviconProps
}


const Header = ({ favicon }: HeaderProps) => {

    const { toggleDrawer } = useMenuDrawer()

    return (

        <Headroom>

            <section className="relative backdrop-blur-sm z-50">
                <nav className="relative px-6 sm:px-12 pt-4">


                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <a className="inline-block" href={favicon?.url}>
                            <img src={favicon?.image?.src} alt={favicon?.image?.alt} width="70px" height="70px" />
                        </a>
                    </div>

                    <div className="3xl:hidden pb-4">
                        <button onClick={() => toggleDrawer()} className="flex navbar-burger ml-auto items-center justify-center w-12 h-12 rounded-full bg-gray-200 hover:bg-red-800">
                            <MenuIcon />
                        </button>
                    </div>


                </nav>
            </section>
        </Headroom>

    )
}

export default Header