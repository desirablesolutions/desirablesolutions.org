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
                    lines: {
                        first: {
                            before: 'a'

                        },

                        second: {
                            before: 'b'
                        }
                    }
                }
            }
        }

    }

    const pageObject = {
        version: Date.now(),
        data: pageData[key]?.data,
        layout: layout({

            metaData: pageData[key].metaData
        })
    }

    return { ...pageObject }

}

export default pages