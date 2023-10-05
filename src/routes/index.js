var express = require("express");
var router = express.Router();

router.get("/home",(req,res)=>{
    res.render("../views/index");
});


module.exports = router;