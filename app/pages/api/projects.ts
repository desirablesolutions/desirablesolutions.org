import resolveURL from "@utils/resolveURL"
import type { NextApiRequest, NextApiResponse } from 'next'
import facade from "@services/facade"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  let dataQuery;

  res.statusCode = 200
  facade.databases.retrieve({ database_id: process.env.PROJECTS_DB_ID }).then(data => { dataQuery = data })
  res.json(`${dataQuery}`)

}


