import drawerStateAtom from "@store/drawerStateAtom";
import { getRecoil, setRecoil } from "recoil-nexus";



const useDrawer = ({ toggle = false }) => {

    const drawerState = getRecoil(drawerStateAtom)

    toggle && setRecoil(drawerStateAtom, true)
    console.log(drawerState)

    return drawerState
}

export default useDrawer
