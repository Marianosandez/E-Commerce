const s = require('sequelize');
const db = require('../config/db');

class Order_Item extends s.Model { }
Order_Item.init({
  
  amount: {
    type: s.INTEGER,
    allowNull: false
  }

}, { sequelize: db, modelName: 'order_items' });


module.exports = Order_Item