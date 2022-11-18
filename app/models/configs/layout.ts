import type { LayoutProps } from "@typings/Layout"
import { default as headerConfig } from "@configs/header"
import { default as footerConfig } from "@configs/footer"
import { default as menuConfig } from "@configs/menu"


const layout = ({ header, footer, menu, metaData }: LayoutProps) => {

    const defaultObject = {
        header: headerConfig({}),
        footer: footerConfig({}),
        menu: menuConfig({}),
        metaData: {}
    }

    const layoutObject = {
        header: headerConfig({ ...header }) ?? defaultObject.header,
        footer: footerConfig({ ...footer }) ?? defaultObject.footer,
        menu: menuConfig({ ...menu }) ?? defaultObject.menu,
        metaData: metaData ?? defaultObject.metaData
    }


    return { ...layoutObject } as LayoutProps
}

export default layout