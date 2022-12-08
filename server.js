const express=require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/calculator.html")
})

app.post('/add',(req,res)=>{
    
    let a=parseInt(req.body.x)
    let b=parseInt(req.body.y)
    let ans=a+b

     res.send(JSON.stringify(ans));
    
})

app.post('/sub',(req,res)=>{
    let a=parseInt(req.body.x)
    let b=parseInt(req.body.y)
    let ans=a-b
    res.send(JSON.stringify(ans));

})

app.post('/mult',(req,res)=>{
    let a=parseInt(req.body.x)
    let b=parseInt(req.body.y)
    let ans=a*b
    res.send(JSON.stringify(ans))
})

app.post('/div',(req,res)=>{
    let a=parseInt(req.body.x)
    let b=parseInt(req.body.y)
    let ans=a/b
    res.send(JSON.stringify(ans))
})

app.listen(3000,(res)=>{
    console.log('server started at http://localhost:3000')
})