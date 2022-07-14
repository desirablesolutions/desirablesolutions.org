import Hero from "@components/Hero"
import TextScrambler from 'react-scramble-text'


const problems = [
    "Web Marketing",
    "Brand Identity",
    "Web Design",
    "Web Development",
    "Graphic Design",
    "Logo Design",
    "Motion Graphics",
    "Technology Orchestration",
    "Illustration"

]


const sectors = [
    "Churches",
    "Small Businesses",
    "Creators",
    "Startups",
    "Non-profits",
    "Creative Production Agencies",
    "Communities"
]


const WhoWeAre = () => {

    return (
        <Hero lineTexts={{
            firstLine: "We solve",
            secondLine: (
                <>
                    <TextScrambler className="inline-block" phrases={problems}
                        speed={40}
                        pauseTime={12000} /> problems for

                </>
            ),
            thirdLine: (
                <>
                    <TextScrambler phrases={sectors}
                        speed={40}
                        pauseTime={4343} />
                </>
            )
        }}
            bgImg="/assets/images/banner-primary.png"
            cta={{
                link: '/contact',
                text: 'Talk to Us'
            }} />
    )
}

export default WhoWeAre