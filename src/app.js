const express=require("express")
const app=express()
const path=require("path")
const bcrypt=require("bcrypt")
const {body, validationResult}=require("express-validator")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const sessions = require("express-sessions")
const unDia = 1000*60*60*24


const PORT=3000

app.set("view engine", "ejs");

app.listen(PORT, ()=>console.log ("Escuchando al puerto: ", PORT))

app.use(express.static("../public"));

app.use (bodyParser.urlencoded({extended:true}));




//RUTAS
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const cart = require("./routes/cart");
app.use("/", cart);

const login = require("./routes/login");
app.use("/", login);

const product = require("./routes/product");
app.use("/", product);

const register = require("./routes/register");
app.use("/", register);






/* 
//OBJETOS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const cuchilloSantoku = { nombre: "Cuchillo santoku", precio:5000}
 */


/* //RUTAS~~~~~~~~~~~~~~

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/index.html"))
})

app.get("/product", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/product.html"))
})

app.get("/cart", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/cart.html"))
})

app.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/register.html"))
})

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname,"views/login.html"))
}) */