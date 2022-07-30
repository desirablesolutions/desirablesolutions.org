import { Carousel } from 'react-responsive-carousel';
import Image from "@components/Image"
import Avatar from "@components/Avatar"
import Paper from '@mui/material/Paper';

const Showcase = ({ title, featured, latest, order, sx, heading, cta }) => {


    return (

        <section className="py-24 md:py-40">
            <div className="container px-4 mx-auto">
                <div className="flex animate-pulse items-center mb-24">
                    <span className="font-heading outline p-1 text-white text-xl">{order}</span>
                    <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                    <span className="font-heading text-white text-xl">{title}</span>
                </div>

                <div className="text-center">
                    <div className="mb-12">
                        <span className="inline-block text-white px-5 py-2 mr-6 text-sm bg-gray-900 border-white cursor-select rounded-full">
                            {featured.sector}
                        </span>
                        <span className="font-light text-sm text-white">
                            {featured.production}
                        </span>
                    </div>
                    <h2 className="font-heading tracking-in-expand text-white text-4xl sm:text-5xl mb-24">
                        {heading}
                    </h2>
                </div>
                <div className="flex flex-wrap -mx-4 pb-24 mb-20 border-b">
                    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                        <Carousel
                            infiniteLoop={true}
                            useKeyboardArrows
                            delay={7000}
                            autoPlay
                            animationHandler="fade"
                            showThumbs={false}
                            className="flex flex-row">
                            {featured.covers.map((cover, index) => (
                                <Image
                                    key={`${index}-${cover.src}`}
                                    className="block min-h-max mx-auto"
                                    src={cover.src}
                                    alt={cover.src}
                                />

                            ))}
                        </Carousel>
                    </div>
                        <div className="w-full flex lg:w-1/2 px-4">
                            <div className="max-w-sm mx-auto">

                                <div>

                                    <h4 className="text-3xl text-white mb-5">
                                        {featured.name}
                                    </h4>
                                    <a className="inline-block relative hover:text-red-300 transition-all cursor-pointer text-white mb-8" href={featured.url}>
                                        <span>
                                            {featured.description}
                                        </span>
                                        <span className="absolute bottom-0  right-0 mb-1">
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
                                    </a>
                                    <div className="pb-8 mb-6 border-b">
                                        {
                                            featured.tags.map((tag, index) => {
                                                return (
                                                    <a
                                                        key={`${tag.name}-${index}`}
                                                        className="inline-block mr-6 text-white hover:outline p-1 hover:text-gray-600 hover:underline"
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

                                    {
                                        featured.provisoners.map((provisioner, index) => {
                                            return (
                                                <>
                                                    <Avatar
                                                        className="w-12 pr-1 h-12 mr-4 rounded-full"
                                                        src={provisioner.profile.src}
                                                        alt=""
                                                    />
                                                    <span key={`${index}`} className="text-gray-200">{provisioner.name}</span>

                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>


                </div>


                <div className="flex flex-wrap -mx-4">
                    {


                        latest.map((project, index) => {
                            return (
                                <div key={`${index}`} className="w-full hover:border-white lg:w-1/3 px-4 mb-16 lg:mb-0">
                                    <div className="max-w-sm mx-auto">
                                        <span className="text-sm pr-2 text-gray-300">{project.production}</span>


                                        <a className="inline-block mt-6 mb-8 font-heading text-2xl" href={project.url}>
                                            <span className="relative">
                                                <span className="text-white">{project.name}</span>

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
                                            <Avatar
                                                className="w-12 pr-1 h-12 mr-4 rounded"
                                                src={project.covers[0].src}
                                                alt=""
                                            />
                                        </a>
                                        <div className="flex items-center">
                                            {
                                                project.provisoners.map((provisioner, index) => {
                                                    return (
                                                        <>

                                                            <Avatar
                                                                className="w-12 pr-1 h-12 mr-4 rounded"
                                                                src={provisioner.profile.src}
                                                                alt={provisioner.name}
                                                            />

                                                            <span className="text-white">{provisioner.name}</span></>
                                                    )
                                                })}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <div className="text-center">
                <a
                    className="inline-block mt-14 w-full sm:w-auto px-7 py-4 text-center font-medium bg-red-500 hover:bg-red-300 text-white hover:text-black rounded transition"
                    href="/projects"
                >
                    {cta.name}
                </a>
            </div>
        </section>

    )
}

export default Showcase