import { atom } from "recoil";

const drawerStateAtom = atom({
    name: "drawerStateAtom",
    default: {
        isOpen: false,
    }
})

export default drawerStateAtom