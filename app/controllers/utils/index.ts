export type NotionFileProps = {
    url?: string,
    name?: string,
}

export type NotionLastEdited = {
    last_edited_time?: string,
}

export type NotionSelectProps = {
    name?: string,
}

export type NotionMultiSelectProps = {
    
}
export type NotoionFilesProps = NotionFileProps[]

const utils = () => {

    const utilsObject = {
        notion: {
            isDatabase: (key, data) => {

                const { select } = utilsObject.notion
                const { Database } = utilsObject.notion.getProperties(data)
                return select(Database).name === key
            },
            getProperties: (data) => {
                return { ...data?.properties } ?? null
            },
            last_edited: (data) => {
                return data?.last_edited_time
            },
            status: (data) => {
                if (Array.isArray(data?.status)) {
                    return data?.status?.map((status) => (status.name)) ?? null
                } else {
                    return null
                }
            },
            multi_select: (data) => {
                return data?.multi_select?.map((item) => item?.name ? item?.name : null) ?? null
            },
            email: (data) => {
                return data?.email ?? null
            },

            phone: (data) => {
                return data?.phone_number ?? null
            },
            select: (data) => {
                return data?.select ?? "SELECT_NOT_FOUND"
            },
            date: (data) => {
                return data?.date?.start ?? null
            },
            number: (data) => {
                return data?.number ?? 0
            },
            formula: (data) => {
                return data?.formula?.number ?? 0
            },
            rich_text: (data) => {
                if (Array.isArray(data?.rich_text)) {
                    return data?.rich_text.map((text) => (text.plain_text)) ?? "NOT_FOUND"
                } else {
                    return "NOT_FOUND"
                }
            },
            title: (data) => {
                return data?.title[0]?.text?.content ?? "TITLE_NOT_FOUND"
            },
            files: (data) => {
                return data?.files?.map(file => ({
                    url: file?.file?.url ?? "URL_NOT_FOUND",
                    name: file?.file?.name ?? "NAME_NOT_FOUND",
                })) as NotoionFilesProps ?? null
            },
            url: (data) => {
                return data?.url ?? "URL_NOT_FOUND"
            }

        },


    }

    return { ...utilsObject }
}

export default utils