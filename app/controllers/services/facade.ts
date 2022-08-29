import {Client} from "@notionhq/client";

const FacadeService =  {

  interface: new Client({ auth: process.env.FACADE_API_KEY }),
  getResponseStatus: () =>{
    
  }

}