import type { NavLink } from "@typings/NavLink"
import type { Link } from "@typings/Link"
import type { Favicon } from "@typings/Favicon"

export type Footer = {
    copyright: {
        title: string,
        description: string
    },
    socials: any,
    favicon: Favicon,
    heading: string,
    navLinks: NavLink[],
    email: string,
    phoneNumber: string,
    terminalLinks: Link[],
    cta: {
        name: string,
        url: string
    }
}