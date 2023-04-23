const dayjs = require("dayjs");
const timezone = require("dayjs/plugin/timezone");
const utc = require("dayjs/plugin/utc");

dayjs.extend(utc);
dayjs.extend(timezone);

exports.getDate = function getDate(isISOString) {
  const now = dayjs().tz("Asia/Seoul");
  if (isISOString) {
    return now.utc(true).toISOString();
  }
  return now.format("YYYY.MM.DD (ddd)");
};

exports.blank = function blank(count) {
  return Array(count).fill({
    object: "block",
    paragraph: {
      rich_text: [{ text: { content: "" } }],
    },
  });
};
