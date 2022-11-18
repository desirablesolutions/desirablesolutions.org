import layout from "@configs/layout"

const pages = ({ store, key }) => {

    const pageData = {
        home: {
            metaData: {
                pageTitle: "Home"
            },
            data: {
                hero: {
                    title: "Home Hero Title",
                }
            }
        }

    }

    const layoutData = layout({
        header: {
        },
        footer: {},
        menu: {},
        metaData: pageData[key].metaData
    })


    const pageObject = {
        version: Date.now(),
        data: pageData[key]?.data,
        layout: layoutData
    }

    return { ...pageObject }

}

export default pages