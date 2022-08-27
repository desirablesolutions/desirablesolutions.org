import type { NextApiRequest, NextApiResponse } from 'next'
import facade from "@services/facade"


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const data = facade.databases.list({})

  res.status(200).json(data)

}


