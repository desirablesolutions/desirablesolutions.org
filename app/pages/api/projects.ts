import type { NextApiRequest, NextApiResponse } from 'next';
import FacadeService from "@controllers/services/facade"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {


  let data = FacadeService.getAllUsers()

  res.json(data)
  res.statusCode = 200

}


