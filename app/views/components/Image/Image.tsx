import { LazyLoadImage } from 'react-lazy-load-image-component';

const IMAGE_PLACEHOLDER = (width, height) => (
    `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3C/svg%3E`
)

const Image = ({ width, height, src, alt, className, beginVisible=true }) => {

    return (
        <LazyLoadImage
            className={className}
            visibleByDefault={beginVisible}
            alt={alt}
            placeHolder={IMAGE_PLACEHOLDER(width, height)}
            height={height}
            effect="black-and-white"
            src={src}
            width={width} />
    )
}

export default Image