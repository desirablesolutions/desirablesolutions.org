import type { Footer } from "@typings/Footer"
import type { Header } from "@typings/Header"
import type { MenuDrawer } from "@typings/MenuDrawer"
export interface ILayout {
    children?: any;
    metaData?: any;
    menu?: MenuDrawer;
    magic?: any;
    footer?: Footer;
    header?: Header;
}

export type LayoutProps = ILayout