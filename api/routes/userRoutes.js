const express = require("express");
const userRouter = express.Router();

const User = require("../models/User");
const Order = require("../models/Order");
const transporter = require("../config/mailer");
const passport = require("passport");
const s = require("sequelize");

//Registro de un Usuario
userRouter.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
});

//Log in
userRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

//Log Out
userRouter.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
});

//Actualiza los datos del User
userRouter.put("/edit/:id", async (req, res) => {
  try {
    const newData = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send(newData);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Devuelve todos los users menos quien pide
userRouter.get("/all/:id", async (req, res) => {
  try {
    const data = await User.findAll({
      where: { [s.Op.not]: { id: req.params.id } },
      include: { model: Order },
    });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//Devuelve un User x id
userRouter.get("/get/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: { model: Order },
    });
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

//Promueve o degrada a Admin
userRouter.put("/promote/:id", async (req, res) => {
  try {
    const newData = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send(newData);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Eliminar un User
userRouter.delete("/delete/:id", async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(204).send("DELETED");
  } catch (error) {
    console.log(error);
  }
});

//Contacto
<<<<<<< HEAD
userRouter.post("/contacto", async (req, res) => {
  console.log(req.body);
  try {
    await transporter.sendMail({
      from: `${req.body.name} <blackcatpasteleria@gmail.com>`,
      to: "blackcatpasteleria@gmail.com",
      subject: "Formulario de contacto",
      html: `<b>${req.body.text}</b> <p>Mail: ${req.body.email} Tel: ${req.body.phone}</p> `,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});
userRouter.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  console.log("SUCCESS");
  res.send(req.user);
});
=======
userRouter.post("/contacto", async (req,res) => {
 try {
  await transporter.sendMail({
          from: `${req.body.name} <blackcatpasteleria@gmail.com>`,
          to: "blackcatpasteleria@gmail.com",
          subject: "Formulario de contacto",
          html: `<b>${req.body.text}</b> <p>Mail: ${req.body.email} Tel: ${req.body.phone}</p> `
        })
      res.sendStatus(200)
} catch (error) {
  console.log(error)
} 
})

>>>>>>> 82e26b8e6efb91cc56cd0b900c3795ba0a28d228

module.exports = userRouter;
