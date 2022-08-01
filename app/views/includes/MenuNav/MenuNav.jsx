import Drawer from "@components/Drawer"
import useDrawer from "@hooks/useDrawer"

import meta from "@configs/meta"


const MenuNav = () => {

    return (
        <Drawer heading={"To love is to serve."}
                links={meta.pages} />
    )
}

export default MenuNav