import Hero from "@components/Hero"
import TextScrambler from 'react-scramble-text'


const problems = [
    "Web Marketing",
    "Brand Identity",
    "Web Design",
    "Social Engineering",
    "Web Development",
    "Graphic Design",
    "Logo Design",
    "Motion Graphics",
    "Technology",
    "Administration",
    "Illustration"

]


const sectors = [
    "Churches.",
    "Small Businesses",
    "Creators.",
    "Startups.",
    "Non-profits.",
    "Creative Communities.",
]


const WhoWeAre = ({ order }) => {

    return (
        <Hero order={order}
              lineTexts={{
            firstLine: "We solve",
            secondLine: (
                <>
                    <TextScrambler chars="₥৳₫ʤ←∆∂√∝∞∛⊖⊇⨂⨊" className="inline-block" phrases={problems}
                        speed={33}
                        pauseTime={3333} />problems for

                </>
            ),
            thirdLine: (
                <>
                    <TextScrambler chars="₥৳₫ʤ←∆∂√∝∞∛⊖⊇⨂⨊" className="incline-block" phrases={sectors}
                        speed={66}
                        pauseTime={12222} />
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