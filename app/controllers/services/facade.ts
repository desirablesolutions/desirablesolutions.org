const { Client } = require('@notionhq/client');

const facade = new Client({
  auth: process.env.FACADE_API_KEY,
});


export default facade