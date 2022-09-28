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

        },
        mission: {
            metaData: {
                pageTitle: 'Mission'
            },
            data: {

                post: {
                    title: 'Our Mission',
                }

            }
        },
        products: {
            metaData: {},
            pages: {},
            data: {

                productsSearch: {
                    title: 'Our Products',
                    items: productQuery.map((product) => ({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        value: product.value,
                        price: product.price,
                        cover: product.covers[0],
                        discount: product.discount,

                    }))
                }

            }
        },
        benefits: {},

    }

    return {
        id: 'desirable-solutions-pages-db',
        version: Date.now(),
        layout: layout,
        data: pageData[pageKey]
    }
}

export default pages