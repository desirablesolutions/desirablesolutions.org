import homePage from "@pages/homePage"
import type { NextApiRequest, NextApiResponse } from 'next'
import type { APIMethods } from "@typings/APIMethods"


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let data = homePage.init()
    res.status(200)
    res.json(data)
}


