const { createPage } = require("./page/create");

exports.handler = async function () {
  const result = await createPage();
  return {
    status: 200,
    body: JSON.stringify(result),
  };
};
