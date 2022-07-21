import { LazyLoadImage } from 'react-lazy-load-image-component';




const Image = ({ width, height, src, alt, className }) => {

    return (
        <LazyLoadImage
            classNmae={className}
            alt={alt}
            height={height}
            effect="black-and-white"
            src={src}
            width={width} />
    )
}

export default Image