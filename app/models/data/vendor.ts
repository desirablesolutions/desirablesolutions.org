import { Client } from "@notionhq/client"


export const vendor = {
    notion: new Client({
        auth: process.env.NOTION_TOKEN,
    })
}