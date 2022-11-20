
import ScrambleTexts from "@components/ScrambleTexts";
import LinkIcon from "@components/LinkIcon";
import type { HeroProps } from "@typings/Hero";

const HeroLinkIcon = ({ color = 'gray', size = 32 }) => (<LinkIcon color={color} size={size} />)



const Hero = ({ lines, bgImage, cta }: HeroProps) => {



    return (
        <section style={{
            background: `url(${bgImage?.src}) no-repeat center center fixed`,
            backgroundSize: 'cover',
            minHeight: '100vh'
        }} className="box-border relative pb-20 overflow-hidden md:pb-52">

            <div className="container px-4 mx-auto">
                <div className="pt-36 sm:pt-64">

                    <h1 className="mb-20 text-6xl font-medium text-white xl:text-8xl 3xl:text-9xl">

                        <span className="block leading-none">
                            <a className="inline-flex text-white" href={lines?.first?.href}>
                                <span className="mr-4 transition-all underline-from-left hover:animate-pulse">
                                    {lines?.first?.before}
                                    <ScrambleTexts lines={lines?.first?.texts}
                                        speed={lines?.first?.speed}
                                        pauseTime={lines?.first?.pauseTime} />
                                    {lines?.first?.after}<HeroLinkIcon />
                                </span>


                            </a>
                        </span>

                        <span className="block leading-none">
                            <a className="inline-flex text-white" href={lines?.second.href}>
                                <span className="mr-4 transition-all underline-from-left hover:animate-pulse">
                                    {lines?.second.before}
                                    <ScrambleTexts lines={lines?.second.texts}
                                        speed={lines?.second.speed}
                                        pauseTime={lines?.second.pauseTime} />
                                    {lines?.second.after}<HeroLinkIcon />
                                </span>
                            </a>
                        </span>

                        <span className="relative inline-block px-5 py-4 mt-12 mb-20 mr-8 text-sm text-center text-white bg-red-800 border-white rounded-full bottom outline-white opacity-95 hover:outline">
                            <a href={cta?.href} className='text-white'>
                                {cta?.name}
                            </a>
                        </span>


                    </h1>

                </div>
            </div>
        </section>

    )
}

export default Hero

/*


                    
*/