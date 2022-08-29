const { Client } = require('@notionhq/client');


const facade =  fetch(('/api/projects/'),
  {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
      "Authorization": `${process.env.FACADE_API_KEY}`

    }}
)




export default facade