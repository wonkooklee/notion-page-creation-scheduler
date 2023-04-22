const { createPage } = require("./addItem");

exports.handler = async function () {
  const result = await createPage();
  return {
    status: 200,
    body: JSON.stringify(result),
  };
};
