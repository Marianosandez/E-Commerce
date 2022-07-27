const express = require("express");
const { errorMonitor } = require("nodemailer/lib/xoauth2");
const productRouter = express.Router();

const Product = require("../models/Product");

//Agrega un producto
productRouter.post("/add", async (req, res) => {
  try {
    data = await Product.create(req.body);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
});

//Trae todos los productos
productRouter.get("/all", async (req, res) => {
  try {
    const data = await Product.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//Busca un producto en especifico (Por id)
productRouter.get("/get/:id", async (req, res) => {
  try {
    const data = await Product.findByPk(req.params.id);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//Editar un producto
productRouter.put("/edit/:id", async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});

//Eliminar un producto
productRouter.delete("/:id", async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    res.status(204).send("DELETED");
  } catch (error) {
    console.log(error);
  }
});

productRouter.post("/addmany", async (req, res) => {
  try {
    const data = await Product.bulkCreate(req.body);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = productRouter;
