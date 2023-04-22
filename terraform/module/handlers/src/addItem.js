const { Client } = require("@notionhq/client");
const { blank, getDate } = require("./utils");
const randomEmoji = require("@0xadada/random-emoji");

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: NOTION_API_KEY });

exports.createPage = async function createPage() {
  try {
    const response = await notion.pages.create({
      parent: { database_id: NOTION_DATABASE_ID, type: "database_id" },
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
      icon: {
        emoji: randomEmoji("food"),
        type: "emoji",
      },
      children: [
        {
          object: "block",
          callout: {
            rich_text: [
              {
                text: {
                  content: `이 페이지는 scheduled-lambda에 의헤 \`${new Date().toISOString()}\`에 생성되었습니다.`,
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
                  content: "✅ Todo",
                },
              },
            ],
            color: "gray_background",
          },
        },
        {
          object: "block",
          to_do: {
            rich_text: [
              {
                text: {
                  content: "",
                },
              },
            ],
            checked: false,
          },
        },
        ...blank(3),
        {
          object: "block",
          heading_1: {
            rich_text: [
              {
                text: {
                  content: "✏️ Note",
                },
              },
            ],
            color: "gray_background",
          },
        },
        ...blank(4),
        {
          object: "block",
          heading_1: {
            rich_text: [
              {
                text: {
                  content: "✨ TIL",
                },
              },
            ],
            color: "gray_background",
          },
        },
        ...blank(4),
      ],
    });
    console.log(response);
    console.log("Success! Entry added.");
  } catch (error) {
    console.error(error.body);
  }
};
