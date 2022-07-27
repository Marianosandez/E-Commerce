const s = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class User extends s.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    name: {
      type: s.STRING,
      allowNull: false,
    },
    surname: {
      type: s.STRING,
      allowNull: false,
    },
    email: {
      type: s.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: s.STRING,
      allowNull: false,
    },
    salt: {
      type: s.STRING,
    },
    adress: {
      type: s.STRING,
    },
    phone: {
      type: s.INTEGER,
    },
    admin: {
      type: s.BOOLEAN,
      defaultValue: false,
    },
    photo: {
      type: s.STRING,
      defaultValue:
        "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
    },
    completeName: {
      type: s.VIRTUAL,
      get() {
        return this.name + " " + this.surname;
      },
    },
  },
  { sequelize: db, modelName: "users" }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    })
    .then(() => {
      (user.name =
        user.name[0].toUpperCase() + user.name.toLowerCase().slice(1)),
        (user.surname =
          user.surname[0].toUpperCase() + user.surname.toLowerCase().slice(1));
    });
});

module.exports = User;
