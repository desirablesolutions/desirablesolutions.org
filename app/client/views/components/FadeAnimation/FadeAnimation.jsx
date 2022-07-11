import Fade from "react-reveal"

const FadeAnimation =(props) => {


    let { children }= props
    return (

        <Fade>
            { children }
        </Fade>
    )
}


export default FadeAnimation