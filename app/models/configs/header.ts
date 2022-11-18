import type { HeaderProps } from "@typings/Header"

const header = ({ favicon }: HeaderProps) => {

    const defaultObject: HeaderProps = {
        favicon: {
            image: {
                src: "IMAGE_NOT_FOUND",
            },
            url: "URL_NOT_FOUND"
        }
    }

    const headerObject: HeaderProps = {
        favicon: favicon ?? defaultObject?.favicon,
    }

    return { ...headerObject } as HeaderProps
}

export default header