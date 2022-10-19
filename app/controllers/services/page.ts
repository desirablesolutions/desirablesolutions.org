import pages from "@pages/index"
import NotionService from "@services/notion"

const PageService = () => {

    const serviceObject = {

        getPage: async (pageKey: string) => {

            const { getCentralDogma } = NotionService()

            const CentralDogma = (await getCentralDogma())

            const { id, version } = pages({ store: CentralDogma, key: pageKey })

            const pageObject = {
                id,
                version,

            }

            return { ...pageObject }

        },

    }

    return { ...serviceObject }

}




export default PageService