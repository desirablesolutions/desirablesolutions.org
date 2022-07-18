
import { Affix } from 'antd';
import FadeAnimation from '@components/FadeAnimation';


const Showcase = ({ title, featured, name, latest, id, sx }) => {



    return (

        <section  className="py-24 md:py-40">
            <div className="container px-4 mx-auto">
                <Affix offsetTop={15}>
                    <div className="flex items-center sticky mb-24">
                        <span className="font-heading text-white text-xl">{id}</span>
                        <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                        <span className="font-heading text-white text-xl">{name}</span>
                    </div>
                </Affix>

                <div className="text-center">
                    <div className="mb-12">
                        <span className="inline-block px-5 py-2 mr-6 text-sm bg-white rounded-full">
                            {featured.sector}
                        </span>
                        <span className="font-light text-sm text-white">
                            {featured.completed}
                        </span>
                    </div>
                    <h2 className="font-heading tracking-in-expand text-white text-4xl sm:text-5xl mb-24">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4 pb-24 mb-20 border-b">
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <img
                            className="block mx-auto"
                            src={featured.cover.src}
                            alt={featured.cover.alt}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="max-w-sm mx-auto">

                            <div>

                                <h4 className="text-3xl text-white mb-5">
                                    {featured.name}
                                </h4>
                                <a className="inline-block relative text-white mb-8" href="#">
                                    <span>
                                        {featured.description}
                                    </span>
                                    <span className="absolute bottom-0 right-0 mb-1">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <div className="pb-8 mb-6 border-b">
                                    {
                                        featured.tags.map((tag, index) => {
                                            return (
                                                <a
                                                    key={`${tag.name}-${index}`}
                                                    className="inline-block mr-6 text-white hover:text-gray-600 hover:underline"
                                                    href={tag.href}
                                                >
                                                    #{tag.name}
                                                </a>
                                            )
                                        }
                                        )
                                    }

                                </div>
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 mr-4 rounded-full"
                                    src="wrexa-assets/images/avatar-male2.png"
                                    alt=""
                                />
                                <span className="text-gray-400">{featured.provisoner.name}</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
                        <div className="max-w-sm mx-auto">
                            <span className="text-sm text-gray-600">January 13, 2022</span>
                            <a className="inline-block mt-6 mb-8 font-heading text-2xl" href="#">
                                <span className="relative">
                                    <span>How to find the best tools for designing?</span>
                                    <span className="absolute bottom-0 right-0 -mr-8 mb-1">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 mr-4 rounded-full"
                                    src="wrexa-assets/images/avatar.png"
                                    alt=""
                                />
                                <span className="text-gray-400">Pela Gunder</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-0">
                        <div className="max-w-sm mx-auto">
                            <span className="text-sm text-gray-600">January 13, 2022</span>
                            <a className="inline-block mt-6 mb-8 font-heading text-2xl" href="#">
                                <span className="relative">
                                    <span>Only with us you will learn the real trends</span>
                                    <span className="absolute bottom-0 right-0 -mr-8 mb-1">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 mr-4 rounded-full"
                                    src="wrexa-assets/images/avatar-male2.png"
                                    alt=""
                                />
                                <span className="text-gray-400">Ethan O. Son</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-4">
                        <div className="max-w-sm mx-auto">
                            <span className="text-sm text-gray-600">January 13, 2022</span>
                            <a className="inline-block mt-6 mb-8 font-heading text-2xl" href="#">
                                <span className="relative">
                                    <span>Are you decorating your kitchen? Get inspired!</span>
                                    <span className="absolute bottom-0 right-0 -mr-8 mb-1">
                                        <svg
                                            width={16}
                                            height={16}
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </a>
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 mr-4 rounded-full"
                                    src="wrexa-assets/images/avatar-women1.png"
                                    alt=""
                                />
                                <span className="text-gray-400">Hannah Redmond</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Showcase