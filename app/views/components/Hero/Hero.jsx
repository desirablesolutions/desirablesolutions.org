
import ScrambleTexts from "@components/ScrambleTexts"
import theme from "@configs/theme"
import HandshakeIcon from '@mui/icons-material/Handshake';

const Hero = ({ lines, bgImage, cta }) => {

    let { firstLine, secondLine } = lines


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
                                    <ScrambleTexts lines={firstLine.texts}
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
                                    <ScrambleTexts lines={secondLine.texts}
                                        speed={secondLine.speed}
                                        pauseTime={secondLine.pauseTime} />
                                    {secondLine.after}
                                </span>
                            </a>
                        </span>

                        <span className="inline-block absolute bottom text-center text-white px-5 py-4 mt-12 mr-8 text-sm bg-red-800 outline-white opacity-80 hover:outline border-white rounded-full">
                            <a href={cta.href} className='text-white'>
                                {cta.icon}{cta.name}
                            </a>
                        </span>


                    </h1>

                </div>
            </div>
        </section>

    )
}

export default Hero