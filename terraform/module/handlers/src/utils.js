exports.getDate = function getDate() {
  const date = new Date();

  return Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  })
    .format(date)
    .replace(/ /g, "")
    .replace(
      /(\d{4}).(\d{1,2}).(\d{1,2})일([가-힣]{1})(.+)$/g,
      "$1.$2.$3 ($4)"
    );
};

exports.blank = function blank(count) {
  return Array(count).fill({
    object: "block",
    paragraph: {
      rich_text: [{ text: { content: "" } }],
    },
  });
};
