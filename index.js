const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
// Data loge in json file
//cors
app.use(cors());

const courses = require('./Data/wb-technology-data.json')



app.get('/', (req, res) => {
    res.send("Server is Runing")
})
//all course 
app.get('/courses', (req, res) =>{
    res.send(courses)
})

app.listen(port, () => {
    console.log("Web-technology-is Runing", port)
})