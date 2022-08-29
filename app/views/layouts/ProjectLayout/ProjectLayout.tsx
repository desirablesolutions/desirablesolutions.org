import PageLayout from "@views/layouts/PageLayout"
import Carousel from "react-multi-carousel";
import vendor from "@configs/vendor"
import Section from "@views/components/Section"

const ProjectLayout = ({ title, covers, impressum, description }) => {

    return (
        <PageLayout metaData={title}>

            <Section>
            <section className="bg-transparent">
                <div className="md:ml-10 py-24 md:py-40 ">
                    <div className="container px-4 mx-auto">
                        <div className="pb-20 mb-16 border-b border-gray-700">
                            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white mb-32">
                                {title}
                            </h1>
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full lg:w-1/2 px-4 mb-32 lg:mb-0">
                                    <div className="max-w-md mx-auto relative">
                                        <Carousel swipeable={false}
                                            draggable={true}
                                            showDots={false}
                                            ssr={true}
                                            infinite={true}
                                            autoPlay={true}
                                            keyBoardControl={true}
                                            transitionDuration={700} responsive={vendor.carousel.responsive}>
                                            {covers.map((cover, index) => {
                                                return (
                                                    <img key={`${index}${cover.src}`} src={cover.src} className="object-fill rounded" />
                                                )
                                            })}
                                        </Carousel>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-4">
                                    <div className="max-w-md mx-auto">
                                        <h1 className="font-heading text-5xl sm:text-6xl text-white mb-8">
                                            {impressum}
                                        </h1>
                                        <p className="max-w-sm font-light text-xl text-white mb-8">
                                            {description}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="max-w-xl 3xl:max-w-3xl mx-auto">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
                                        <h4 className="font-heading text-2xl text-white mb-8">
                                            {impressum}
                                        </h4>
                                        <p className="text-xl text-gray-200 font-light">
                                            Proin a tempor magna. Pellentesque malesuada nunc non augue
                                            fringilla some chords for.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 px-4">
                                        <h4 className="font-heading text-2xl text-white mb-8">
                                            Workflow builder
                                        </h4>
                                        <p className="text-xl text-gray-200 font-light">
                                            Sed tellus tortor, rutrum id ante sagittis, eleifend
                                            sollicitudin est. Cras lacinia arcu vitae tortor semper, sit
                                            amet mollis arcu pharetra
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-40 ">
                <div className="container px-4 mx-auto">
                    <div className="pt-18 pb-16 px-12 rounded-2xl">
                        <h3 className="font-heading text-4xl text-white mb-5">Assets</h3>
                        <div className="overflow-x-auto px-4 mb-14">
                            <table className="table-auto w-full min-w-max">
                                <thead>
                                    <tr>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">
                                                Catalog
                                            </span>
                                        </th>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">Notes</span>
                                        </th>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">
                                                All users
                                            </span>
                                        </th>
                                        <th
                                            className="pb-2 border-b border-gray-700 text-left"
                                            scope="col"
                                        >
                                            <span className="text-sm font-normal text-gray-700">
                                                Activity
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        covers.map((cover, index) => (
                                            <tr key={`${index}`}>
                                                <th className="py-5 pr-12" scope="row">
                                                    <div className="flex pr-8 items-center">
                                                        <img
                                                            className="block mr-8 h-14 rounded w-14 "
                                                            src={cover.src}
                                                            alt={cover.id}
                                                        />
                                                        <span className="font-normal text-lg text-white">
                                                            {cover.id}
                                                        </span>
                                                    </div>
                                                </th>
                                                <td className="py-5 pr-12">
                                                    <div className="max-w-xs">
                                                        <p className="text-xs text-white">
                                                            The house like a sense of truth that comes from within. The
                                                            final game.
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="py-5 pr-14">
                                                    <div className="relative flex pl-12 items-center">
                                                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-px h-3 rounded-full gray-7bg-00" />

                                                        <a
                                                            className="inline-block text-gray-700 hover:text-gray-600"
                                                            href="#"
                                                        >
                                                            <svg
                                                                width={25}
                                                                height={25}
                                                                viewBox="0 0 25 25"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <circle
                                                                    cx="12.5"
                                                                    cy="12.5"
                                                                    r="11.25"
                                                                    fill="white"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2.5"
                                                                />
                                                                <path
                                                                    d="M16.6465 11.6543H13.4609V8.35352C13.4609 7.88086 13.0781 7.49805 12.6055 7.49805C12.1328 7.49805 11.75 7.88086 11.75 8.35352V11.6543H8.35156C7.88281 11.6543 7.5 12.0371 7.5 12.5098C7.5 12.9824 7.88281 13.3652 8.35547 13.3652H11.7539V16.6465C11.7539 17.1192 12.1367 17.502 12.6094 17.502C13.082 17.502 13.4648 17.1192 13.4648 16.6465V13.3652H16.6504C17.123 13.3652 17.5059 12.9824 17.5059 12.5098C17.5 12.0371 17.1191 11.6543 16.6465 11.6543Z"
                                                                    fill="currentColor"
                                                                />
                                                                <defs>
                                                                    <rect
                                                                        width={10}
                                                                        height={10}
                                                                        fill="white"
                                                                        transform="translate(7.5 7.5)"
                                                                    />
                                                                </defs>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-xs text-white">23/01/22</span>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            </Section>
         

        </PageLayout>

    )
}

export default ProjectLayout