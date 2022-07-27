const Product = require("./Product");
const User = require("./User.js");
const Order = require("./Order");
const Order_Item = require("./Order_Items");

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Order_Item);

Product.hasMany(Order_Item);

Order_Item.belongsTo(Product);


module.exports = { Product, User, Order, Order_Item };
