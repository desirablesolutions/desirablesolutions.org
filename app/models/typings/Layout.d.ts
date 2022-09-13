import type { Footer } from "@typings/Footer"
import type { Header } from "@typings/Header"
export interface ILayout {
    children: any;
    metaData?: {};
    footer?: Footer;
    header?: Header;
}