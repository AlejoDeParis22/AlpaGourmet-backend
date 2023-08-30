const express=require("express")
const app=express()
const path=require("path")

const PORT=3000

app.set("view engine", "ejs");

app.listen(PORT, ()=>console.log ("Escuchando al puerto: ", PORT))

app.use(express.static("../public"));


//OBJETOS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const cuchilloSantoku = { nombre: "Cuchillo santoku", precio:5000}


//RUTAS (EJS)~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get("/home",(req,res)=>{
    res.render("index");
});

app.get("/carrito",(req,res)=>{
    res.render("cart");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/producto",(req,res)=>{
    res.render("product");
});

app.get("/register",(req,res)=>{
    res.render("register");
});








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