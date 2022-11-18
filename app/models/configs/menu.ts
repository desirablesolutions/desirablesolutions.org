import type { MenuDrawerProps } from "@typings/MenuDrawer"

const menu = ({ favicon, links }: MenuDrawerProps) => {

    const defaultObject: MenuDrawerProps = {
        favicon: {
            image: {
                src: "IMAGE_NOT_FOUND",
            },
            url: "URL_NOT_FOUND"
        },
        links: [
            {
                name: "LINK_NOT_FOUND"
            }
        ]
    }

    const headerObject: MenuDrawerProps = {
        favicon: favicon ?? defaultObject?.favicon,
        links: links ?? defaultObject?.links
    }

    return { ...headerObject } as MenuDrawerProps
}

export default menu