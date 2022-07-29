import { atom } from "recoil";

const drawerStateAtom = atom({
    key: "drawerStateAtom",
    default: {
        isOpen: false,
    }
})

export default drawerStateAtom