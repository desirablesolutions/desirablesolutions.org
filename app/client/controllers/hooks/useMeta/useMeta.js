import meta from "@configs/meta"

const useMeta = (props) => {
    let propCheck = props !== undefined

    let  metaData = propsCheck ? {...meta, ...props} : meta

    return {
        ...metaData
    }
}

export default useMeta