import images from "@db/images"
import useDrawer from "@hooks/useDrawer"

const navBar = {
    favicon: {
        src: images.logo.transparent.src,
        href: '/'
    },
    action: () => [
        useDrawer({ toggle: true })
    ]
}

export default navBar