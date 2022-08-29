import SectionSx from "@styles/Section.sx";
import Image from "next/image"

const Logo = ({ alt, src, url }) => (
    <div className="w-full md:w-auto px-4 mb-12 md:mb-0">
        <a href={url}>
            <Image height="75px" width="75px" src={src} alt={alt} />
        </a>
    </div>
)

const Footer = ({ copyright, logo, navLinks, email, phoneNumber, heading, terminalLinks, cta }) => {


    return (

        <section style={SectionSx} className="pt-24 md:pt-32">
            <div className="container px-4 mx-auto">
                <div className="pb-24">
                    <div className="flex flex-wrap items-center justify-between -mx-4 mb-20">
                        <Logo {...logo} />

                        <div className="w-full md:w-auto px-4">
                            <a
                                className="inline-block px-7 py-4 text-center font-medium bg-red-700 hover:bg-red-500 hover:text-black text-white rounded shadow-xl transition duration-250"
                                href={cta.url}
                            >
                                {cta.name}
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full xl:w-2/6 px-4 mb-16 xl:mb-0">
                            <div className="max-w-md">
                                <h2 className="font-heading text-4xl mb-10">
                                    {heading}
                                </h2>
                                <p className="font-light mb-6">The house by the pond cras ornare</p>
                                <div className="pb-8 border-b border-gray-200">
                                    <a
                                        className="inline-block mr-6 text-red-300 hover:text-red-100"
                                        href="#"
                                    >
                                        {phoneNumber}
                                    </a>
                                    <a
                                        className="inline-block text-red-400 hover:text-red-400"
                                        href="#"
                                    >
                                        {email}
                                    </a>
                                </div>
                                <div className="mt-8">
                                    <a className="inline-flex mr-12 items-center" href="#">
                                        <img
                                            className="mr-4"
                                            src="wrexa-assets/logos/brands/messenger.svg"
                                            alt=""
                                        />
                                        <span className="font-light">chatshxxk</span>
                                    </a>
                                    <a className="inline-flex items-center" href="#">
                                        <img
                                            className="mr-4"
                                            src="wrexa-assets/logos/brands/snapchat.svg"
                                            alt=""
                                        />
                                        <span className="font-light">snapshxxk</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {
                            navLinks.map((section, index) => {
                                return (
                                    <div key={index} className="w-1/2 lg:w-1/4 xl:w-1/6 px-4 mb-8 lg:mb-0">
                                        <h4 className="mb-12">{section.heading}</h4>
                                        <ul>
                                            {
                                                section.links.map((link, index) => {
                                                    return (
                                                        <li key={index} className="mb-4">
                                                            <a className="inline-block underline-from-left text-white font-light" href={link.url}>
                                                                {link.name}
                                                            </a>
                                                        </li>
                                                    )
                                                })}

                                        </ul>
                                    </div>
                                )
                            })}

                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-start justify-between -mx-4">
                        <div className="w-full lg:w-2/3 xl:w-auto px-4 mb-8 2xl:mb-0">
                            <span className="text-sm font-light">
                                {copyright.title}
                            </span>
                            <p className="max-w-xl text-gray-400 text-xs font-light mt-5">
                                {copyright.description}
                            </p>
                        </div>
                        <div className="w-full lg:w-1/3 xl:w-auto px-4">
                            <div>
                                {
                                    terminalLinks.map((link, index) => {
                                        return (
                                            <a
                                                key={index}
                                                className="underline-from-left inline-block text-sm text-white hover:text-red-200 font-light mr-4"
                                                href={link.url}
                                            >
                                                {link.name}
                                            </a>
                                        )

                                    })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Footer
export { Logo }
