

export const defaultProps: any = {
    title: "How Did we Get Here?",
    features: [
        {

        }
    ],
    heading: {
        order: 0,
        name: "Introduction",
        bgImage: {
            src: "/images/hero-bg.png",
        }
    }
}

export default function FeaturedSummary(props: any):any {


    const Title = () => {
        return (
            <div className="z-0 mb-32 text-center">
                <h1 className="text-5xl text-white font-heading sm:text-6xl md:text-7xl">
                    {props?.title ?? defaultProps.title}
                </h1>
            </div>
        )
    }

    const Heading = () => {
        return (
            <div className="flex items-center mb-24 sm:mb-40">
                <span className="text-xl text-white font-heading">01</span>
                <div className="w-1 h-1 mx-4 bg-gray-200 rounded-full" />
                <span className="text-xl text-white font-heading">Introduction</span>
            </div>
        )
    }
    return (
        <section className="relative py-24 md:pt-32">
            <div className="container relative px-4 mx-auto">
                <img
                    className="absolute bottom-0 left-0 hidden w-full md:block mb-52 lg:mb-12"
                    src={props?.heading?.bgImage?.src ?? defaultProps.heading.bgImage.src}
                    alt=""
                />
                <div className="relative">
                    <Heading />
                    <Title />
                    <div className="flex flex-wrap mb-24 -mx-4 md:mb-52">
                        <div className="w-full px-4 mb-16 md:w-1/2 2xl:w-1/4 2xl:mb-0">
                            <div className="max-w-xs px-12 pt-8 mx-auto bg-gray-800 pb-14 rounded-xl">
                                <span className="text-sm text-gray-500">Step 1</span>
                                <h4 className="mt-1 mb-8 text-3xl text-white">
                                    Download our Application
                                </h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-16 md:w-1/2 2xl:w-1/4 2xl:mt-52 2xl:mb-0">
                            <div className="max-w-xs px-12 pt-8 mx-auto bg-gray-800 pb-14 rounded-xl">
                                <span className="text-sm text-gray-500">Step 2</span>
                                <h4 className="mt-1 mb-8 text-3xl text-white">
                                    Register your account
                                </h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 mb-16 md:w-1/2 2xl:w-1/4 2xl:mt-52 md:mb-0">
                            <div className="max-w-xs px-12 pt-8 mx-auto bg-gray-800 pb-14 rounded-xl">
                                <span className="text-sm text-gray-500">Step 3</span>
                                <h4 className="mt-1 mb-8 text-3xl text-white">
                                    Find your unique style
                                </h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 2xl:w-1/4">
                            <div className="max-w-xs px-12 pt-8 mx-auto bg-gray-800 pb-14 rounded-xl">
                                <span className="text-sm text-gray-500">Step 4</span>
                                <h4 className="mt-1 mb-8 text-3xl text-white">Build your home!</h4>
                                <div>
                                    <span className="font-light text-gray-500">Get started.</span>
                                    <a
                                        className="inline-block font-light text-gray-500 hover:text-gray-400"
                                        href="#"
                                    >
                                        Click here
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className="block mx-auto md:hidden"
                        src="wrexa-assets/elements/half-circles-with-logo.svg"
                        alt=""
                    />
                    <div className="sm:flex">
                        <a
                            className="inline-block w-full mb-2 text-white sm:w-auto sm:mr-24 md:mr-40 sm:mb-0"
                            href="#"
                        >
                            Download application
                        </a>
                        <a
                            className="inline-block w-full mb-2 text-white sm:w-auto sm:mr-auto sm:mb-0"
                            href="#"
                        >
                            Select plan
                        </a>
                        <a className="inline-block w-full text-white sm:w-auto" href="#">
                            Start a conversation
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}