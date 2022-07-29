import { AnimationWrapper } from 'react-hover-animation'


const Reanimator = ({ children, type, ...params }) => {

    return (
        <AnimationWrapper {...params}>
            {children}
        </AnimationWrapper>

    )
}

export default Reanimator