# Getting Started with Create Server site Data lode.
# Hi, Web Hero ! 👋



01.Create Server Site A Folder `File Name`   [Vercel install site link](https://).

02.This project was `Vercel` Server site Data with [Vercel install site link](https://vercel.com/docs/cli).

03.This project was `GitHub push` Code Store Site  with [Github Repository create site link](https://github.com/).

---

# 🛠 Step By Step
## Vsode terminal Opne git Bash past this command
* npm init -y
### Folder in side create indx.js file
* index.js
### Express Installing
* npm i express
### or set up index.js file.
```Javscript
const express = require('express');
const app = express();
// server run 5000 port
const port = process.env.PORT || 5000;
const cors = require('cors')
// Data loge in json file
//cors
app.use(cors());


const coureDetails = require('./Data/courseDetails.json')

// server started our nodemon index.js
app.get('/', (req, res) => {
    res.send("Server is Runing")
})


//coursess Id 
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = coureDetails.find(c => c._id === id)
    res.send(selectedCourse);

})

//clg show web-technology-is rouning
app.listen(port, () => {
    console.log("Web-technology- is Runing", port)
})

app.get('/course', (req, res) => {
    res.send(coureDetails);
})



``` 
## This is my index.js confix

## `vercel config`
* Cors error solving -->
* vercel --> Enter
* step by step set -->
* vercel.json create folder
```Javascript
{
    "version": 2,
    "builds": [
        {
            "src": "./index.js",
            "use": "@vercel/node"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        }
    ]
}
```
* vercel --prod
* change you fetch(") location -->
## `.I mean say Hard work Is very importent is learning`

