
import ScrambleTexts from "@components/ScrambleTexts";
import LinkIcon from "@components/LinkIcon";


const HeroLinkIcon = ({ color = 'gray', size = 32 }) => (<LinkIcon color={color} size={size} />)

export type FancyLine = {
    before: string,
    texts: string[],
    speed: number,
    pauseTime: number,
    after: string,
    href: string
}

export type Image = {
    src: string,
    alt: string
}

export type HeroProps = {
    lines: {
        firstLine: FancyLine,
        secondLine: FancyLine,
    },
    bgImage: {
        src: string
    },
    cta: {
        name: string,
        href: string

    }
}

const Hero = ({ lines, bgImage, cta }: HeroProps) => {

    let { firstLine, secondLine } = lines


    return (
        <section style={{
            background: `url(${bgImage.src}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            minHeight: '100vh'
        }} className="relative pb-20 md:pb-52 box-border overflow-hidden">

            <div className="container px-4 mx-auto">
                <div className="pt-36 sm:pt-64">


                    <h1 className="text-6xl xl:text-8xl 3xl:text-9xl text-white font-medium mb-20">

                        <span className="block leading-none">
                            <a className="inline-flex text-white" href={firstLine.href}>
                                <span className="mr-4 underline-from-left hover:animate-pulse transition-all">
                                    {firstLine.before}
                                    <ScrambleTexts lines={firstLine.texts}
                                        speed={firstLine.speed}
                                        pauseTime={firstLine.pauseTime} />
                                    {firstLine.after}<HeroLinkIcon />
                                </span>


                            </a>
                        </span>

                        <span className="block leading-none">
                            <a className="inline-flex text-white" href={secondLine.href}>
                                <span className="mr-4 underline-from-left hover:animate-pulse transition-all">
                                    {secondLine.before}
                                    <ScrambleTexts lines={secondLine.texts}
                                        speed={secondLine.speed}
                                        pauseTime={secondLine.pauseTime} />
                                    {secondLine.after}<HeroLinkIcon />
                                </span>
                            </a>
                        </span>

                        <span className="inline-block relative bottom text-center text-white px-5 py-4 mb-20 mt-12 mr-8 text-sm bg-red-800 outline-white opacity-95 hover:outline border-white rounded-full">
                            <a href={cta.href} className='text-white'>
                                {cta.name}
                            </a>
                        </span>


                    </h1>

                </div>
            </div>
        </section>

    )
}

export default Hero