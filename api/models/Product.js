const s = require('sequelize');
const db = require('../config/db');


class Product extends s.Model {}
Product.init({
  name: {
    type: s.STRING,
    allowNull: false
  },
  price: {
    type: s.INTEGER,
    allowNull: false
  },
  stock: {
    type: s.INTEGER,
    defaultValue: 0
  },
  description: {
    type: s.STRING,
  },
  ingredients: {
    type: s.STRING,
  },
  rating: {
  type: s.FLOAT,
  defaultValue: 0
  },
  review:{
  type: s.TEXT
  },
  categories:{
  type: s.STRING
  },
  photo: {
    type: s.STRING,
    defaultValue: "https://casachinaar.com/wp-content/uploads/2020/06/graphic_product_tangible.png"
    },
}, { sequelize: db, modelName: 'products' });

module.exports= Product