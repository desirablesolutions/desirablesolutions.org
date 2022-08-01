import { Carousel as ReactMultiCarousel } from "react-multi-carousel";
import vendor from "@configs/vendor"


const Carousel = ({ children }) => {

    return (

        <ReactMultiCarousel 
            swipeable={false}
            draggable={true}
            showDots={true}
            ssr={true}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            transitionDuration={700} 
            responsive={vendor.carousel.responsive}>
            {children}
        </ReactMultiCarousel>
    )
}

export default Carousel