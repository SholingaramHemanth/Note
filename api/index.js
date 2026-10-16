const app = require('../server/index');

module.exports = async (req, res) => {
  await app.connectDatabase();
  return app(req, res);
};
