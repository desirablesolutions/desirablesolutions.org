import Section from "@components/Section"
import projects from "@db/projects"
import tags from "@db/tags"


const Portfolio = ({ order, title, heading, tags, collection }) => {

    return (
        <Section>
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -mx-4 mb-32">
                    <div className="w-full 3xl:w-1/2 px-4 mb-16 3xl:mb-0">
                        <h2 className="max-w-3xl font-heading text-4xl sm:text-6xl xl:text-7xl text-white">
                            Our Projects
                        </h2>
                    </div>
                    <div className="w-full 3xl:w-1/2 px-4 3xl:text-right">
                        <p className="text-white mb-4">
                            The house like a sense of truth that comes from within.
                        </p>
                        <select
                            className="pl-4 pr-2 text-white py-1 bg-transparent border rounded "
                            name=""
                            id=""
                        >
                            <option value="" selected="">
                                2022
                            </option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div className="container px-4 mx-auto">
                    <div>
                        <div style={{ overflowX: 'scroll' }} className="flex justify-start items-start mb-32">
                            {projects.map((project, index) => {
                                return (
                                    <div className="w-full md:flex-shrink-0 max-w-md md:mr-20">
                                        <a className="block text-white hover:text-gray-200" href={project.url}>
                                            <img
                                                className="block w-full h-64 object-cover mb-6"
                                                src={project.covers[0].src}
                                                alt={project.name}
                                            />
                                            <div className="flex items-center">
                                                <span className="font-heading text-xl">{index + 1}</span>
                                                <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                                                <span className="font-heading text-xl">{project.name}</span>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                    <a
                        className="inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-red-700 hover:bg-red-300 hover:text-black text-white rounded transition duration-250"
                        href="/manifest"
                    >
                        See Manifest        
                                    </a>
                </div>
            </div>


        </Section >

    )
}

export default Portfolio