import Drawer from "@components/Drawer"
import useDrawer from "@hooks/useDrawer"

import meta from "@configs/meta"


const MenuNav = () => {

    return (
        <Drawer links={meta.pages} />
    )
}

export default MenuNav