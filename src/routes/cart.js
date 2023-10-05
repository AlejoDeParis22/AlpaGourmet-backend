var express = require("express");
var router = express.Router();

router.get("/carrito",(req,res)=>{
    res.render("../views/cart");
});



module.exports = router;