const express = require("express")
const orderRouter = express.Router()

const transporter = require('../config/mailer')
const models = require('../models')

//Crear una orden
orderRouter.post("/buy", async (req, res) => {
  let idOrder = 0
  let items = req.body.data[1]
  let datos = req.body.data[0]
  try {
    const data = await models.Order.create({ userId: datos.userId })
    idOrder = data.id,
      res.status(201).send(data)

    items.forEach(item => {
      models.Order_Item.create({
        amount: item.amount,
        orderId: idOrder,
        productId: item.productId
      })
    }),
      await transporter.sendMail({
        from: '"Blackcat" <blackcatpasteleria@gmail.com>',
        to: datos.email,
        subject: "Pedido Realizado!",
        html:
          `<h1>¡ Gracias por comprar en BlackCat!</h1>
                 <h3>Hola, ${datos.payerName}. Estos son los datos de tu pedido:</h3>
                 <b><u>Datos de Facturacion:</u></b>
                 <p>Nombre y Apellido : ${datos.payerName + " " + datos.payerSurname}</p>
                 <p>Telefono de contacto: ${datos.payerPhone}</p>
                <b><u>Datos de envio o retiro:</u></b>
                <p>Direccion de envio: ${datos.adress.length === 0 ? "Retiro en el local" : datos.adress}</p>
                <p>Nombre y Apellido : ${datos.seekerName + " " + datos.seekerSurname}</p>
                <p>Telefono de contacto: ${datos.seekerPhone}</p>
                <h2>Recorda que tu pedido sera confirmado una vez que tu pago sea aprobado.</h2>
                <h4>Una vez que esto ocurra, te llegara otro mail a esta casilla confirmando tu compra.</h4>`
      })
  } catch (error) {
    console.log(error)
  }
})


//Todas las ordenes de un usuario
orderRouter.get("/all/:id", async (req, res) => {
  try {
    const data = await models.Order.findAll({
      where: { userId: req.params.id },
      include: { model: models.Order_Item }
    })
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

//Trae una orden
orderRouter.get("/get/:id", async (req, res) => {
  try {
    const data = await models.Order.findOne({
      where: { id: req.params.id },
      include: { model: models.Order_Item }
    })
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

// Borrar una orden
orderRouter.delete("/:id", async (req, res) => {
  try {
    await models.Order.destroy({ where: { id: req.params.id } })
    res.status(204).send("DELETED")
  } catch (error) {
    console.log(error)
  }
});




//////////////////////
// RUTAS ORDER-ITEM //
//////////////////////


//Agregar un Order Item
orderRouter.post("/additem", async (req, res) => {
  try {
    const data = await models.Order_Item.create(req.body)
    res.status(201).send(data)
  } catch (error) {
    console.log(error)
  }
})

//Devuelve todos los Order Item
orderRouter.get("/items", async (req, res) => {
  try {
    const data = await models.Order_Item.findAll({ include: { model: models.Product } })
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

//Devuelve un Order Item por ID
orderRouter.get("/item/:id", async (req, res) => {
  try {
    const data = await models.Order_Item.findByPk(req.params.id, { include: { model: models.Product } })
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

// Borrar un Order-Item
orderRouter.delete("/item/:id", async (req, res) => {
  try {
    await models.Order_Item.destroy({ where: { id: req.params.id } })
    res.status(204).send("DELETED")
  } catch (error) {
    console.log(error)
  }
});


module.exports = orderRouter
