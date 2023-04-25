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
              color: "yellow",
              name: "new",
            },
            {
              color: "blue",
              name: "daily",
            },
          ],
        },
        Status: {
          status: {
            name: "Not started",
          },
        },
      },
      children: [
        {
          object: "block",
          callout: {
            rich_text: [
              {
                text: {
                  content: `이 페이지는 scheduled-lambda에 의헤 \`${getDate(
                    true
                  )} (KST)\`에 생성되었습니다.`,
                },
                type: "text",
                annotations: {
                  italic: true,
                },
              },
            ],
          },
        },
        {
          object: "block",
          heading_1: {
            rich_text: [
              {
                text: {
                  content: " Todo",
                },
              },
            ],
            color: "gray_background",
          },
        },
        {
          object: "block",
          synced_block: {
            synced_from: {
              block_id: "4e2047a3549d4c3097ab7f3b228335b6",
              type: "block_id",
            },
          },
        },
        ...blank(4),
        {
          object: "block",
          heading_1: {
            rich_text: [
              {
                text: {
                  content: " Note",
                },
              },
            ],
            color: "gray_background",
          },
        },
        ...blank(5),
        {
          object: "block",
          heading_1: {
            rich_text: [
              {
                text: {
                  content: " TIL",
                },
              },
            ],
            color: "gray_background",
          },
        },
        ...blank(5),
      ],
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
};
