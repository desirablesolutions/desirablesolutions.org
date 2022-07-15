import FordwardLinkIcon from "@components/ForwardLinkIcon"


const Hero = ({ lineTexts, bgImg, cta }) => {

    let { firstLine, secondLine, thirdLine } = lineTexts
    let { link, text } = cta


    return (
        <section style={{
            background: `url(${bgImg}) no-repeat center center fixed`,
            backgroundSize: 'cover'
        }} className="relative pb-20  md:pb-52 overflow-hidden">
            <div className="bg-black h-6">
                <div className="absolute top-0 left-1/2">
                    <div className="w-px h-16 bg-gray-900" />
                    <div className="w-px h-24 bg-white" />
                </div>
            </div>
            <div className="container px-4 mx-auto">
                <div className="pt-40 sm:pt-64">


                    <h1 className="text-6xl xl:text-8xl 3xl:text-9xl text-white font-medium mb-20">
                        <span className="block leading-none">
                        
                        <a className="inline-flex text-white" href={link}>
                            <span className="mr-4">{firstLine}</span>
                            <FordwardLinkIcon />
                        </a>
                        
                        </span>
                        <span className="block leading-none">{secondLine}</span>

                        <span className="relative inline-block">
                            <span className="relative z-10 block leading-none">{thirdLine}</span>
                            <div className="hidden lg:block absolute bottom-0 left-0 w-full h-px mb-1 xl:mb-3 3xl:mb-4 bg-white" />
                        </span>
                    </h1>

                    <div>
                        <a className="inline-flex mb-20 items-center text-white" href={link}>
                            <span className="mr-4">{text}</span>
                            <FordwardLinkIcon />
                        </a>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Hero