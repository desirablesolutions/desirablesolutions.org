import FordwardLinkIcon from "@components/ForwardLinkIcon"


const Hero = ({ lineTexts, bgImg, cta }) => {

    let { firstLine, secondLine, thirdLine } = lineTexts
    let { link, text } = cta


    return (
        <section style={{
            background: `url(${bgImg}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            maxHeight: '100vh',
            minHeight: '99vh'
        }} className="relative pb-20 md:pb-52 box-border overflow-hidden">
            <div className="h-6 ">
                <div className="animate-pulse absolute top-0 heartbeat left-1/2">
                    <div className="w-px h-16 bg-gray-900" />
                    <div className="w-px h-24 bg-white" />
                </div>
            </div>


            <div className="container px-4 mx-auto">
                <div className="pt-40 sm:pt-64">


                    <h1 className="text-6xl xl:text-8xl 3xl:text-9xl text-white font-medium mb-20">


                        <span className="block leading-none">

                            <a className="inline-flex text-white" href={link}>
                                <span className="mr-4 hover:underline  hover:animate-pulse transition-all">{firstLine}</span>
                            </a>

                        </span>


                        <span className="block hover:underline transition-all  hover:animate-pulse leading-none"><a href="#">{secondLine}</a></span>

                        <span className="relative inline-block">
                            <span className="relative block hover:underline hover:animate-pulse transition-all leading-none">
                                <a href="/">
                                    {thirdLine}</a>
                            </span>
                        </span>
                    </h1>

    
                </div>
            </div>
        </section>

    )
}

export default Hero