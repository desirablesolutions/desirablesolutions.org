import homePage from "@pages/homePage"
import type { NextApiRequest, NextApiResponse } from 'next'

export enum METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"

}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {


    let data = homePage.init()
    res.status(200)
    res.json(data)
}


