const express=require('express')
const { createTodo, updateTodo } = require('./types')

const app=express()
const PORT=3000

app.use(express.json())

app.post("/todo",(req,res)=>{
     const createPayload=req.body;
     const parsedPayload=createTodo.safeParse(createPayload);
     if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent wrong inputs",
        })
        return;
     }

     TodoistProvider.create({
        parsedPayload
     });
     res.json({
        message:"success"
     })
      
})
app.get("/todos",(req,res)=>{
         
})
app.put("/completed",(req,res)=>{
      const updatePayload=req.body;
      const parsedPayload=updateTodo.safeParse(updatePayload)
      if(!parsedPayload){
        res.status(411).json({
            msg:"You Sent the wrong inputs"
        })
      }
})


app.listen(PORT,()=>{
    `port running on port ${Port} `
})