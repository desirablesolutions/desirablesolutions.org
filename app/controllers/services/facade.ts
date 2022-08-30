import { Client } from "@notionhq/client";

const myFetch = (url) => {
  return fetch(url,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      }
    })
}


const FacadeService = {


  interface: new Client({ auth: process.env.FACADE_API_KEY }),
  getAllUsers: async () => {
    let response = FacadeService.interface.users.list({}).catch(err => { return (err) });
    return response
  },

  getResponseStatus: () => {

  }

}

export default FacadeService