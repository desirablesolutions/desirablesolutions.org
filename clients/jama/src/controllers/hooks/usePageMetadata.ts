import { PageService } from "@services/page"

export default async function usePageMetadata() {
    const { getMetadata } = await PageService()

    const data = await getMetadata()

    return data
}