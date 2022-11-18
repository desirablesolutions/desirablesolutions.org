import pages from "@pages/index"
import NotionService from "@services/notion"

const PageService = () => {

    const serviceObject = {

        getLayout: async () => { },

        getPage: async (pageKey: string) => {

            const { getCentralDogma } = NotionService()

            const CentralDogma = await getCentralDogma()

            const { data,  version } = pages({ store: CentralDogma, key: pageKey })

            const pageObject = {
                version,
                data
            }

            return { ...pageObject }

        },

    }

    return { ...serviceObject }

}




export default PageService