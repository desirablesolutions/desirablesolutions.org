import type { NextApiRequest, NextApiResponse } from 'next';
import FacadeService from "@controllers/services/facade"
import { Client } from "@notionhq/client";


const ActiveProjectsFilter = {
  and: [
    {
      "property":'Organization',
      contains: '5ac2cf926d9543b486b40303f391ac59'
    },
    {
      "property":'Status',
      contains: 'Active'
    }
  ]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {


  let Facade = new Client({ auth: process.env.FACADE_API_KEY })

  const databaseId = 'dfc1d744e04f4548a6bd9829cddef83e';

  const response = Facade.databases.query({
    database_id: databaseId,

  }).then(data => {
    res.json({
      "data": data
    })
  }).catch(err => { res.json({ "error": err }) })




  res.statusCode = 200

}


