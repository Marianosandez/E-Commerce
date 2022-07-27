const sequelize = require("sequelize");

const s = new sequelize("blackcat", null, null, {
  dialect: "postgres",
  host: "localhost",
  logging: false,
});

module.exports = s;