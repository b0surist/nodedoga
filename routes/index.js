import express from "express"
import path from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser"

const app = express()
const router = express.Router()
const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName) 

app.use(bodyParser.urlencoded({extended : false}))

app.get("/", (res, req) =>{
    app.sendFile(path.join(__dirName, '..', 'public', 'index.html'))
})

export default router