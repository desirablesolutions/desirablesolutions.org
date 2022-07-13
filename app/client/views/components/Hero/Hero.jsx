
import TextScramble  from "@twistezo/react-text-scramble"


const Hero = (props) => {

    let { lineTexts, bgImg, cta } = props

    return (
        <section style={{
            backgroundImage: `url(${props.image})`,
        }} className="relative pb-24 md:pb-52 overflow-hidden">
            <div className="bg-white h-6">
                <div className="absolute top-0 left-1/2">
                    <div className="w-px h-16 bg-gray-900" />
                    <div className="w-px h-24 bg-white" />
                </div>
            </div>
            <div className="container px-4 mx-auto">
                <div className="pt-40 sm:pt-64">
                    <h1 className="text-6xl xl:text-8xl 3xl:text-9xl text-white font-medium mb-20">
                        <span className="block leading-none">We solve</span>
                        <span className="block leading-none">
                            <TextScramble texts={[
                                "business",
                                "technology",
                                "marketing",
                                "design",
                            ]}/>
                            Brand Identity problems
                        </span>
                        <span className="relative inline-block">
                            <span className="relative z-10 block leading-none">
                            <TextScramble pauseTime={2500} letterSpeed={25} texts={[
                                "business",
                                "technology",
                                "marketing",
                                "design",
                            ]}/>                            </span>
                            <div className="hidden lg:block absolute bottom-0 left-0 w-full h-px mb-1 xl:mb-3 3xl:mb-4 bg-white" />
                        </span>
                    </h1>
                    <div>
                        <a className="inline-flex mb-20 items-center text-white" href="#">
                            <span className="mr-4">Talk to us</span>
                            <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </a>
                    </div>
               
                </div>
            </div>
        </section>

    )
}

export default Hero