
const pages = ({ store, key }) => {

    const pageData = {
        home: {
            metaData: {
                pageTitle:
            }
        }

    }


    const pageObject = {
        id: `${'title'}-${key}`,
        version: Date.now(),
     
    }

    return { ...pageObject }

}

export default pages