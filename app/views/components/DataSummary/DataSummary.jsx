import CountUp from 'react-countup';
import Link from "@components/Link"
import Ornament from "@components/Ornament"

const DataSummary = ({ order, title, heading, cta, data }) => {

    return (
        <section style={{
            borderTop: '1px solid #e6e6e6',
            background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
            filter: 'opacity(0.91)'

        }} className="relative pb-24 md:pb-40 overflow-hidden">

            <Ornament />

            <div className="flex items-center m-4 mb-12">
                <span className="animate-pulse font-heading text-xl outline p-1 text-white">{order}</span>
                <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                <span className="font-heading text-xl text-white">{title}</span>
            </div>


            <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <h2 className="font-heading text-5xl sm:text-6xl text-white">
                        {heading.icon}{heading.name}
                    </h2>
                </div>


                <div className="flex flex-wrap -mx-4 mb-32">

                    {
                        data.map((item, index) => {

                            return (

                                <div key={`${index}--${item.title.name}`} className="w-full lg:w-1/2 3xl:w-1/4 px-4 border-b lg:border-b-0 lg:border-r border-gray-100">
                                    <div className="sm:flex max-w-xs mx-auto 3xl:px-10 py-10 items-start">
                                        <img
                                            className="block mb-6 w-1/2 h-1/2 sm:mb-0 sm:mr-8"
                                            src={item.image.src}
                                            alt={item.image.alt}
                                        />
                                        <div>
                                            <span className="text-sm text-gray-400">{item.title.icon}{item.title.name}</span>
                                            <h4 className="font-heading text-3xl text-white mt-2 mb-7">
                                                {item.value.before}<CountUp duration={6} delay={4} end={item.value.number} />
                                            </h4>

                                            <span className="text-xs text-gray-400 font-light">
                                                {item.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                </div>


                <div className="text-center">
                    <Link name={cta.name} href={cta.href} />
                </div>

            </div>


        </section>

    )
}

export default DataSummary