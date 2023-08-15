const express=require("express")
const app=express()
const path=require("path")

const PORT=3000

app.listen(PORT, ()=>console.log ("Escuchando al puerto: ", PORT))

app.use(express.static("public"))

//RUTAS~~~~~~~~~~~~~~

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
})