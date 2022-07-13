import Hero from "@components/Hero"
import TextScrambler from 'react-scramble-text'




const phrases = ["The way to get started is to", "quit talking", "and", "begin doing", "-Walt Disney"]

const WhoWeAre = () => {

    return (
        <Hero lineTexts={{
            firstLine: "We solve",
            secondLine: (
                <>
                    <TextScrambler phrases={phrases}
                        speed={50}
                        pauseTime={800} /> problems.

                </>
            ),
            thirdLine: (
                <>
                    for
                    <TextScrambler phrases={phrases}
                        speed={50}
                        pauseTime={800} />
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