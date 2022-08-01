import TextScrambler from 'react-scramble-text'
import theme from "@configs/theme"




const ScrambleTexts = ({ lines }) => {


    return (
        <TextScrambler phrases={lines}
        className={theme.animations.textScrambler.className}
            chars={theme.animations.textScrambler.chars} />
    )

}

export default ScrambleTexts