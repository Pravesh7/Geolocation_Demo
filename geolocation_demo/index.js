const express=require('express');
const app= express();
const route= require('./routes/routes')

// Database Imported
require('./DataBase');

// body parser middleware

app.use(express.json());
app.use('/geo',route);

app.get('/', (req,res)=> {
    res.send("server running");
} )

app.listen(7000, ()=> console.log("listening"));