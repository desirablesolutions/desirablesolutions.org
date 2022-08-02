


const Link = ({ href, name }) => {

    const twClasses = () => (`inline-block w-full sm:w-auto px-7 py-4 text-center font-medium bg-red-700 hover:bg-red-200 text-white hover:text-black rounded`)

    return (
        <a
            className={twClasses()}
            href={href}
        >
            {name}
        </a>
    )

}


export default Link