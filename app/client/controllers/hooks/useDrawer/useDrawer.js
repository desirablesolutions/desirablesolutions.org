import { useRecoilState } from "recoil"
import drawerStateAtom from "@store/drawerStateAtom"



const useDrawerStates = {
    open, 
    close,
}

const useDrawer = ({ isOpen }) => {

    let [drawerState, setDrawerState] = useRecoilState(drawerStateAtom)

    
   isOpen && setDrawerState(!drawerState)


}

export default useDrawer