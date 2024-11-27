import express from "express"
import Route from "./routes/index.js"

const app = express()

const PORT = 3000;
app.listen(PORT, ()=> console.log("Hi there"))


app.use('/nodejs', (res, req) =>{
    req.send("A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül.")
})

app.use('/express', (res, req) =>{
    req.send("Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.")
})

app.use('/greeting', (res, req) =>{
    req.send("Hello Surányi István")
})

app.use('/', Route)



const users = [
    {id:"1", name:"John Doe"},
    {id:"2", name:"Jane Smith"},
    {id:"3", name:"Sam Johnson"}
]

const statuszkod = 0;

app.use('/api/users', (res, req) =>{
   if(req.send(console.log(users) != null)){
        statuszkod += 200;
   }
   return statuszkod
})