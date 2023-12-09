import { PageService } from "@services/page"


export async function usePage(id: string) {

    const { getPage } = await PageService()

    const pageQuery = await getPage(id)

    return { ...pageQuery, version: Date.now() }
}