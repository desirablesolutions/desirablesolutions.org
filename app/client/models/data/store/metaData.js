import meta from "@configs/meta"
import { atom } from "recoil"




const MetaData = atom({
    key: 'MetaData',
    default: meta,

})

export default MetaData