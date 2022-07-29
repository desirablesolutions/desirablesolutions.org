import Button from "@components/Button"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const NavLink = ({ key, icon, href, name }) => (
    <>

        <Button key={key} href={href} icon={icon}>
            {name}
        </Button>

    </>
)

const Footer = ({ copyright, navLinks, actionLinks, contact, impressum }) => {

    return (

        <section style={{
            borderTop: '1px solid #e6e6e6',
        }}>
            <div className="pt-10 pb-16">
                <div className="container px-4 mx-auto">

                    <div className="flex flex-wrap items-start xl:items-center justify-center">
                        <div className="w-1/2 xl:w-auto flex flex-wrap items-center justify-center xl:-mb-6">

                            {
                                navLinks.major.map((link, index) => (
                                    <NavLink key={`${link.name}-${index}`} name={link.name} href={link.href} icon={link.icon} />
                                ))}

                        </div>
                        <div className="w-1/2 xl:w-auto flex flex-wrap items-center justify-center -mb-6">
                            {
                                navLinks.minor.map((link, index) => (
                                    <NavLink key={`${link.name}-${index}`}
                                        icon={link.icon}
                                        name={link.name}
                                        href={link.href} />
                                ))}
                        </div>
                    </div>

                    <h2 className="font-heading text-center text-4xl text-white mt-20 mb-8">
                        {actionLinks.title.icon}{actionLinks.title.text}
                    </h2>
                    <div className="text-center mb-16">

                        {
                            actionLinks.links.map((link, index) => (
                                <CopyToClipboard onClick={() => alert('text copied!')} text={link.name}>

                                    <Button variant="text" icon={link.icon} key={`${link.name}-${index}`} href={link.href}>
                                        {link.name}
                                    </Button>
                                </CopyToClipboard>

                            ))
                        }

                    </div>

                </div>
            </div>
            <div className="py-12 text-center">
                <div className="container px-4 mx-auto">
                    <div className="sm:flex items-center justify-center mb-5">
                        <a className="inline-block mb-2 sm:mb-0" href="/">
                            <img
                                className="h-10 pr-4"
                                src={copyright.logo.src}
                                alt=""
                            />
                        </a>
                        <span className="block text-sm text-shadow-2 transition-all hover:text-gray-500 text-white font-light">
                            {copyright.text}
                        </span>
                    </div>
                    <p class="max-w-3xl animate-pulse mx-auto text-gray-400 text-xs font-light">
                        {impressum}
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Footer
export { NavLink }