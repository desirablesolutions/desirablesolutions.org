import images from "@db/images"

export type HeaderProps = {
    favicon: {
        src: string,
        url: string,
        alt: string
    }
}


const logo = images({
    property: 'id',
    value: 'logo-transparent',
})

const header: HeaderProps = {

    favicon: {
        src: logo.src,
        url: "/",
        alt: logo.alt

    }
}
export default header