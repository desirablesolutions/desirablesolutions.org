import Head from "next/head"
import useMeta from "@hooks/useMeta"

const Meta = (props) => {

    const { title, description, url, image } = props || {}


    return (
        <Head>
        

           <title>Desirable Solutions</title>
            

        </Head>
    )

}

export default Meta