const express = require("express")

const bodyparser = require("body-parser")

const api = require("./routes/api")

const cors = require('cors')

const port = 4500

const app = express()

app.use(bodyparser.json())

app.use(cors())

app.use('/api',api)



app.get('/',function(req,res){
    res.send('hello from server')
})

app.listen(port,function(){
    console.log('localhost:'+port)
})
