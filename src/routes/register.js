var express = require("express");
var router = express.Router();
const fs = require("fs");

router.get("/register",(req,res)=>{
    res.render("../views/register");
});


//const read = () =>
    JSON.parse(fs.readFileSync("../src/userData.json", "utf8"));
/* const writeJson = (data)=>{
    let stringifiedData = JSON.stringify(data,null,2);
    return fs.writeFileSync("../src/userData.json",JSON.stringify, stringifiedData);
};
 */
router.post("/register", (req,res)=>{
    const oldJson= JSON.parse(fs.readFileSync("../src/userData.json", "utf8"));
    const newUser= {id: oldJson.lenght + 1,
        name:req.body.nombre,
        username: req.body.usuario,
        email:req.body.email,
        password: req.body.contrasena}
    oldJson.push(newUser);
    let stringifiedData = JSON.stringify(oldJson,null,2);
    return fs.writeFileSync("../src/userData.json",JSON.stringify, stringifiedData);

});
/*     console.log(read());
    const oldJson= read();
    const newUser= {id: oldJson.lenght + 1,
        name:req.body.nombre,
        username: req.body.usuario,
        email:req.body.email,
        password: req.body.contrasena}
    oldJson.push(newUser);
    console.log(oldJson)
    writeJson(req.body); */

module.exports = router;