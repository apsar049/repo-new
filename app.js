
//  route1: /welcome - Should serve content of type text/plain 
//  - Returned status should be 200 
//  - Response should be Welcome to Dominos!
//--------------------------------------------------------------------------------------------------------------

//  route2 - /contact - Should serve content of type application/json
//  - Returned status should be 200 
//  - Response should be 
//  {  
//      phone: '18602100000', 
//      email: 'guestcaredominos@jublfood.com' 
//  }
 //--------------------------------------------------------------------------------------------------------------

//3. Any other routes besides the ones mentioned above should send status 404
   

const express = require('express')
const    app  = express()


app.get('/welcome',(req,res)=>
{
    res.setHeader('content-type','text/plain')
    res.status(200).send("Welcome to Dominos!")
})

app.get('/contact',(req,res)=>{
    res.setHeader('content-type','application/json')
    res.status(200).send
    ({
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com'
    })
})

app.get('*',(req,res)=>{
    res.status(404).send
    ({
        status:"Failure",
        message:"404 Page Not Found"
    })
})

app.listen(5000,()=>
{
    console.log('server is up at port 3000')
})