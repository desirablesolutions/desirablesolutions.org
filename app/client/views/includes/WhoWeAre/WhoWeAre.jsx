import Hero from "@components/Hero"

const WhoWeAre = () => {

    return (
        <Hero lineTexts={{
            firstLine: "We solve",
            secondLine: "{y} problems",
            thirdLine: "for {x}."
        }}
            bgImg="/assets/images/banner-primary.png"
            cta={{
                link: '/contact',
                text: 'Talk to Us'
            }} />
    )
}

export default WhoWeAre