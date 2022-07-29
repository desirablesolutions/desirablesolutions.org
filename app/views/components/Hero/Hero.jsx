
import TextScrambler from 'react-scramble-text'
import theme from "@configs/theme"

const Hero = ({ lines, bgImage }) => {

    let { firstLine, secondLine } = lines

    const { animations: {
        textScrambler
    } } = theme

    return (
        <section style={{
            background: `url(${bgImage.src}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            maxHeight: '100vh',
            minHeight: '99vh'
        }} className="relative pb-20 md:pb-52 box-border overflow-hidden">

            <div className="container px-4 mx-auto">
                <div className="pt-40 sm:pt-64">


                    <h1 className="text-6xl xl:text-8xl 3xl:text-9xl text-white font-medium mb-20">

                        <span className="block leading-none">
                            <a className="inline-flex text-white" href={firstLine.href}>
                                <span className="mr-4 underline-from-left hover:animate-pulse transition-all">
                                    {firstLine.before}
                                    <TextScrambler chars={textScrambler.chars} className={textScrambler.className} phrases={firstLine.texts}
                                        speed={firstLine.speed}
                                        pauseTime={firstLine.pauseTime} />
                                    {firstLine.after}
                                </span>
                            </a>
                        </span>

                        <span className="block leading-none">
                            <a className="inline-flex text-white" href={secondLine.href}>
                                <span className="mr-4 underline-from-left hover:animate-pulse transition-all">
                                    {secondLine.before}
                                    <TextScrambler chars={textScrambler.chars} className={textScrambler.className} phrases={secondLine.texts}
                                        speed={secondLine.speed}
                                        pauseTime={secondLine.pauseTime} />
                                    {secondLine.after}
                                </span>
                            </a>
                        </span>


                    </h1>

                </div>
            </div>
        </section>

    )
}

export default Hero