var express = require("express");
var router = express.Router();

router.get("/producto",(req,res)=>{
    res.render("../views/product");
});


module.exports = router;