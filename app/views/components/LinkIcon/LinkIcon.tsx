export type LinkIconProps = {
    color: string,
    size: number
}

const LinkIcon = ({ color, size }: LinkIconProps) => {

    return (

        <span className="relative bottom-0 left-0">
            <svg width={`${size}`} height={`${size}`} viewBox={`0 0 ${size} ${size}`} fill={`${color}`} xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9983 2.97487L12.8444 2.94712L12.9539 11.4487L1.76433 0.259107L0.261729 1.76171L11.4513 12.9513L2.94974 12.8418L2.97749 14.9957L15.1552 15.1525L14.9983 2.97487Z" fill={`${color}`}></path>
            </svg>
        </span>
    )
}

export default LinkIcon