import { atom } from "recoil";

const drawerStateAtom = atom({
    key: "drawerStateAtom",
    default: {
        isOpen: true
    }
})

export default drawerStateAtom