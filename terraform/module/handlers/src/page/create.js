const { notion } = require("../notionClient");
const { blank, getDate } = require("../utils");

exports.createPage = async function createPage() {
  try {
    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        title: {
          title: [
            {
              text: {
                content: getDate(),
              },
            },
          ],
        },
        Tags: {
          multi_select: [
            {
              color: "blue",
              name: "automated",
            },
          ],
        },
        Status: {
          status: {
            name: "Not started",
          },
        },
      },
      children: [...blank(5)],
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
};
