import Headroom from "react-headroom"
import MenuIcon from "@components/MenuIcon"
import Image from 'next/image'

const Header = (props) => {


    let { imgSrc, imgAlt, imgHref } = props


    return (

        <Headroom>
            <section style={{
                backgroundImage: 'url("/assets/images/bg.png")',
            }} className="relative border-b-white backdrop-blur-md z-50">
                <nav className="relative px-6 sm:px-12 pt-4">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                        <a className="inline-block" href={imgHref}>
                            <Image src={imgSrc} alt={imgAlt} width="70px" height="70px" />
                        </a>
                    </div>
                    <div className="3xl:hidden pb-4">
                        <button className="flex navbar-burger ml-auto items-center justify-center w-14 h-14">
                            <MenuIcon />
                        </button>
                    </div>
                </nav>

            </section>
        </Headroom>

    )
}

export default Header