import meta from "@configs/meta"

const useMeta = (props) => {
    
    let isPropsDefined = props !== undefined
    let  metaData = isPropsDefined ? {...meta, ...props} : meta

    return {
        ...metaData
    }
}

export default useMeta