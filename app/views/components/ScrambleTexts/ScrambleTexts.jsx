import TextScrambler from 'react-scramble-text'
import theme from "@configs/theme"




const ScrambleTexts = ({ lines, speed, pauseTime }) => {


    return (
        <TextScrambler speed={speed} pauseTime={pauseTime} phrases={lines}
        className={theme.animations.textScrambler.className}
            chars={theme.animations.textScrambler.chars} />
    )

}

export default ScrambleTexts