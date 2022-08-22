import dynamic from "next/dynamic"

const load = ({ path }) => {

    console.log(`[Loading] ${path}`)
    
    return (
        dynamic(import(`${path}`), { ssr: false })
    )
}

export default load;