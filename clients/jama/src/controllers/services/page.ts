import { pages } from "@pages/index"
import { definePageService } from "blakprint"

definePageService({
    connection: async () => 0,
    methods: {},
})
export async function PageService() {

    const methods = {
        getPage: async (id: string): Promise<any> => {
            const page = pages.data[id]
            return page
        },

        getMetadata: async (): Promise<any> => {
            const page = pages.metaData
            return page
        },
    
    }
    return { ...methods }
}