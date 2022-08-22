import Avatar from "@components/Avatar";
import LinkArrowIcon from '@components/LinkArrowIcon';
import Carousel from "react-multi-carousel";
import vendor from "@configs/vendor"
import Section from "@components/Section"


const Showcase = ({ title, featured, latest, order, heading, cta }) => {


    return (

        <Section order={order} title={title}>
            <div className="container px-4 mx-auto">
                <div className="text-center">
                    <div className="mb-12">
                        <span className="inline-block text-white px-5 py-2 mr-6 text-sm bg-gray-900 hover:outline rounded-full">
                            <a href="/" className='text-white'>
                                {featured.tags[0].name}
                            </a>
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
                        <Carousel swipeable={false}
                            draggable={true}
                            showDots={true}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            keyBoardControl={true}
                            transitionDuration={700} responsive={vendor.carousel.responsive}>
                            {featured.covers.map((cover, index) => {
                                return (
                                    <img key={`${index}${cover.src}`} src={cover.src} className="w-auto object-fill" />
                                )
                            })}
                        </Carousel>

                    </div>
                    <div className="w-full flex lg:w-1/2 px-4">
                        <div className="max-w-sm mx-auto">

                            <div>

                                <h4 className="text-3xl underline-from-left text-white mb-5">
                                    <a className="text-white" href={featured.url}>
                                        {featured.name}
                                    </a>
                                </h4>
                                <a className="inline-block relative hover:text-red-400 transition-all cursor-pointer text-white mb-8" href={featured.url}>
                                    <span>
                                        {featured.description}
                                    </span>
                                    <LinkArrowIcon />
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
                                                <span key={`${index}`} className="text-gray-200 underline-from-left">
                                                    <a href="/team" className="text-gray-200">{provisioner.name}</a>
                                                </span>

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
                                                <span className="text-white underline-from-left">{project.name}</span>

                                                <span className="absolute bottom-0 right-0 -mr-8 mb-1">

                                                    <LinkArrowIcon />

                                                </span>

                                            </span>

                                            <Avatar
                                                className="w-12 pr-1 h-12 mr-4 rounded"
                                                src={project.covers[0].src}
                                                alt=""
                                            />
                                        </a>


                                        <a

                                            className="inline-block mr-6 text-white hover:outline p-1 hover:text-gray-600 hover:underline"
                                            href={featured.tags[0].href}
                                        >
                                            #{featured.tags[0].name}
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

                                                            <span className="text-white">
                                                                <a href={`/team/${provisioner.id}`} className="text-white  underline-from-left">{provisioner.name}</a>
                                                            </span></>
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
                    className="inline-block mt-14 w-full sm:w-auto px-7 py-4 text-center font-medium bg-red-700 hover:bg-red-200 text-white hover:text-black rounded transition"
                    href={cta.href}
                >
                    {cta.name}
                </a>
            </div>
        </Section>

    )
}

export default Showcase