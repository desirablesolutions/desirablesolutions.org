const NavLink = ({ key, href, name }) => (
    <a key={key}
        className="inline-block w-full lg:w-auto text-sm text-white hover:transition-all hover:rounded hover:bg-blue-600 hover:text-gray-200 mb-6 mr-14"
        href={href}
    >
        {name}
    </a>
)

const Footer = ({ copyright, navLinks, actionLinks, contact }) => {

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
                                    <NavLink key={`${link.name}-${index}`} {...link} />
                                ))}

                        </div>
                        <div className="w-1/2 xl:w-auto flex flex-wrap items-center justify-center -mb-6">
                            {
                                navLinks.minor.map((link, index) => (
                                    <NavLink key={`${link.name}-${index}`} {...link} />
                                ))}
                        </div>
                    </div>

                    <h2 className="font-heading text-center text-4xl text-white mt-20 mb-8">
                        {actionLinks.title}                    </h2>
                    <div className="text-center mb-16">
                        {
                            actionLinks.links.map((link, index) => (
                                <a
                                    key={`${link.name}-${index}`}
                                    className="inline-block w-full sm:w-auto px-7 py-4 mb-4 sm:mb-0 mr-3 text-center text-white font-medium border border-gray-700 hover:border-gray-600 rounded"
                                    href={link.href}
                                >
                                    {link.name}
                                </a>
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
                        <span className="block text-sm border-b transition-all hover:text-gray-500 text-white font-light">
                            {copyright.text}
                        </span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Footer
export { NavLink }