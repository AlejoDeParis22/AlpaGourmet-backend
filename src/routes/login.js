var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/login",(req,res)=>{
    res.render("../views/login.ejs");
    
});



//ROUTER POST
//const contraseñaHash = "9450476b384b32d8ad8b758e76c98a69"; //hola123

const read = () =>
    JSON.parse(fs.readFileSync("../src/userData.json", "utf8"));
module.exports = read;

router.post("/login", (req,res)=>{

    const oldJson= read();
    const newUser= {id: oldJson.lenght + 1,
        name:req.body.nombre,
        username: req.body.usuario,
        email:req.body.email,
        password: req.body.contrasena}
    oldJson.push(newUser);
    console.log(oldJson)
});


//MUESTRA POR CONSOLA USUARIO Y CONTRASEÑA
/*     const body = req.body;
    console.log(body)
    //INTENTO DE SABER USAR IF
    if (body.usuario=="alejo"){
        res.send(body)
    } */



/*     console.log(req.usuario)
    let confirm =bcrypt.compareSync(req.body.password, contraseñaHash);
    res.send(confirm); 
})*/


module.exports = router;