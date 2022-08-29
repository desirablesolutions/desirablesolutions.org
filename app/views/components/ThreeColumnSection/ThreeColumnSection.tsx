import Section from "@views/components/Section";
import { CubeSpinner, DominoSpinner, PongSpinner } from "react-spinners-kit";

export type ColumnProps = {
    heading: string,
    description: string,
    icon: string
}

const Column = ({ heading = "", description = "", icon = "" }) => {

    return (
        <div className="w-full lg:w-1/3 px-4 pb-20 lg:pb-0 mb-16 lg:mb-0 relative">
            <div className="hidden lg:block absolute top-0 right-0 pt-14 h-full w-px">
                <div className="h-full w-px bg-white" />
            </div>
            <div className="lg:hidden absolute bottom-0 left-0 w-full h-px bg-white shadow-2xl" />
            <div className="max-w-sm mx-auto text-center">
                <span className="inline-block text-red-500">
                    {icon}
                </span>
                <div className="mt-8">
                    <h5 className="font-heading text-xl text-white mb-16">
                        {heading}
                    </h5>
                    <div className="max-w-xs px-10 mx-auto">
                        <p className="font-light text-gray-200">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export type ThreeColumnSectionProps = {
    order: string,
    title: string,
    heading: {
        name: string,
    },
    columns: any
}

const ThreeColumnSection = ({ order, title, heading, columns }: ThreeColumnSectionProps) => {

    const { first, second, third } = columns

    return (

        <Section order={order} title={title}>
            <h2 className="text-center font-heading text-3xl sm:text-6xl md:text-5xl text-white mb-24">
                {heading.name}
            </h2>

            <div className="flex flex-wrap -mx-4">
                <Column icon={<CubeSpinner />} {...first} />
                <Column icon={<PongSpinner />} {...second} />
                <Column icon={<DominoSpinner size={70} />} {...third} />
            </div>


        </Section>

    )
}

export default ThreeColumnSection


