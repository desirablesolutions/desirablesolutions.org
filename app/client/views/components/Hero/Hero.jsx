import FordwardLinkIcon from "@components/ForwardLinkIcon"


const Hero = ({ lineTexts, bgImg, cta }) => {

    let { firstLine, secondLine, thirdLine } = lineTexts
    let { link, text } = cta


    return (
        <section style={{
            background: `url(${bgImg}) no-repeat center center fixed`,
            backgroundSize: 'cover'
        }} className="relative pb-20  md:pb-52 overflow-hidden">
            <div className="bg-transparent h-6 ">
                <div className="absolute top-0 heartbeat left-1/2">
                    <div className="w-px h-16 bg-gray-900" />
                    <div className="w-px h-24 bg-white" />
                </div>
            </div>
            <div className="container px-4 mx-auto">
                <div className="pt-40 sm:pt-64">


                    <h1 className="text-6xl xl:text-8xl 3xl:text-9xl text-white font-medium mb-20">
                        <span className="block leading-none">
                        
                        <a className="inline-flex text-white" href={link}>
                            <span className="mr-4 hover:underline">{firstLine}</span>
                            <FordwardLinkIcon />
                        </a>
                        
                        </span>
                        <span className="block hover:underline leading-none">{secondLine}</span>

                        <span className="relative inline-block">
                            <span className="relative z-10 block hover:underline leading-none">{thirdLine}</span>
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