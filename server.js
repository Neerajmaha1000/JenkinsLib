const express=require('express')
const app=express()


app.get('/',(request,response)=>
{
	response.send("Welcome TO NEERAJ WEBSITE")
})

app.listen(4000,'0.0.0.0',()=>
{
console.log("Server started on 4000")
})
