

const Section = ({ children, order, title }) => {

    return (
        <section className="pt-24 pb-24 md:pb-40">


            <div className="container px-4 mx-auto">
                <div className="flex items-center mb-6">
                    <span className="font-heading text-white text-xl">02</span>
                    <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
                    <span className="font-heading text-white text-xl">Creative team</span>
                </div>

                <div className="flex flex-wrap -mx-4 mb-20">
                    <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                        <h1 className="font-heading text-white text-5xl sm:text-6xl">Our Team</h1>
                    </div>
                </div>

                { children }
            </div>

        </section>
    )
}