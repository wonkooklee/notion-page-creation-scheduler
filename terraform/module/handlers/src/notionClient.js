const { Client } = require("@notionhq/client");

exports.notion = new Client({ auth: process.env.NOTION_API_KEY });
