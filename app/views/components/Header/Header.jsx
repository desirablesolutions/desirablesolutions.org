import Headroom from "react-headroom"
import MenuIcon from "@components/MenuIcon"
import Image from 'next/image'

const Header = ({ favicon, action }) => {

    let { src, href, alt } = favicon

    return (

        <Headroom>
            <section
                style={{
                    borderBottom: '1px solid gray',
                }}
                className="relative backdrop-blur-xl z-50">
                <nav className="relative px-6 sm:px-12 pt-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <a className="inline-block" href={href}>
                            <Image src={src} alt={alt} width="70px" height="70px" />
                        </a>
                    </div>

                    <div className="3xl:hidden pb-4">
                        <button className="flex navbar-burger ml-auto items-center justify-center w-14 h-14">
                        </button>
                    </div>

                </nav>

            </section>
        </Headroom>

    )
}

export default Header