import Head from "next/head"



const defaultParameters = {
    title: "Eduardo",
}


const Meta = (props) => {

    const { title, description, url, image } = props || {}
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Aplicativo de gestão de conteúdo para o site da empresa" />
            <meta name="keywords" content="conteúdo, gestão, site, empresa" />
            <meta name="author" content="Eduardo" />
            <meta name="robots" content="index, follow" />
            <meta name="revisit-after" content="1 day" />
            <meta name="language" content="pt-br" />
            <meta name="generator" content="Next.js" />
            <meta name="copyright" content="Eduardo" />
            <meta name="publisher" content="Eduardo" />
            <meta name="reply-to" content="" />
        </Head>
    )

}

export default Meta