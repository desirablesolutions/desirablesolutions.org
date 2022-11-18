import type { FooterProps } from "@typings/Footer"

const footer = ({ email, phoneNumber }: FooterProps) => {

    const defaultObject: FooterProps = {
        email: "EMAIL_NOT_FOUND",
        phoneNumber: "PHONE_NUMBER_NOT_FOUND"
    }

    const footerObject: FooterProps = {
        email: email ?? defaultObject?.email,
        phoneNumber: phoneNumber ?? defaultObject?.phoneNumber,
    }

    return { ...footerObject } as FooterProps
}

export default footer