import layout from "@configs/layout"

const pages = (store, pageKey) => {


    const pageData = {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: {
                hero: {

                }

            },

        }
    }

    return {
        id: 'desirable-solutions-pages-db',
        version: Date.now(),
        layout: layout,
        data: pageData[pageKey]
    }
}

export default pages