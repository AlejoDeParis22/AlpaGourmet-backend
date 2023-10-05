var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/",(req,res)=>{
    res.render("../views/register");
});

router.post("/", (req, res)=>{
    const users = JSON.parse(fs.readFileSync("./userData.json", "utf-8"));
    const newUser = {nombre: req.body.usuario, email: req.body.email, password: req.body.contrasena};
    users.push(newUser);

    fs.writeFileSync("./userData.json", JSON.stringify(users));
    res.send('Usuario creado');
});

module.exports = router;