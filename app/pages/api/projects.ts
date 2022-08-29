import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const isReadOnly = req.method === 'GET'

    const dirRelativeToPublicFolder = 'images'

    const dir = path.resolve('./public/assets/', dirRelativeToPublicFolder);
  
    const filenames = fs.readdirSync(dir);

    const { query } = req
  
    const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))
  
    res.statusCode = 200
    res.json(images)

}


