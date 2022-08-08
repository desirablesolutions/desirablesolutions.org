import Drawer from "@components/Drawer"
import menuNav from "@db/menuNav"

const MenuNav = () => {

    return (
        <Drawer {...menuNav} />
    )
}

export default MenuNav