import drawerStateAtom from "@store/drawerStateAtom";
import { getRecoil, setRecoil } from 'recoil-nexus'


const useDrawer = ({ toggle = false }) => {
    let { isOpen } = getRecoil(drawerStateAtom)

    toggle && setRecoil(drawerStateAtom, { isOpen: !isOpen })

    console.log(`[Drawer State]: ${toggle} | ${isOpen}`)

    return isOpen
}

export default useDrawer
