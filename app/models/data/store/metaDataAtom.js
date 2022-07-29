import meta from "@configs/meta"
import { atom } from "recoil"




const metaDataAtom = atom({
    key: 'metaDataAtom',
    default: {
        ...meta
    },

})

export default metaDataAtom