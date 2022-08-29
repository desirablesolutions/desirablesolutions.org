const Section = ({ children, order="", title="" }) => {


    const Stylizer = {
        borderTop: '1px solid #e6e6e6',
        background: `url('/assets/images/bg.png') #000000 no-repeat center center fixed`,
        filter: 'opacity(0.91)'

    }

    const Header = () => (
        <div className="flex items-center mb-10">
            <span className="font-heading text-xl outline p-1 text-white">{order}</span>
            <div className="mx-4 rounded-full bg-gray-200 h-1 w-1" />
            <span className="font-heading text-xl text-white">
                {title}
            </span>
        </div>
    )


    return (

        <section style={Stylizer} className="py-24 md:py-40">
            <div className="container px-4 mx-auto">
                <Header />
                {children}
            </div>
        </section>
    )
}

export default Section