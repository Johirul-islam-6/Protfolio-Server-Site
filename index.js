const express = require('express');
const app = express();
// server run 5000 port
const port = process.env.PORT || 5000;
const cors = require('cors')

require('dotenv').config()

//middle ware
app.use(cors());
app.use(express.json())

// MongoDb connected


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@rasel-01.uhpxwkk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const cetagoryCollection = client.db('Portfolio').collection('Cetagorys');
        const SkillCollection = client.db('Portfolio').collection('Skills');
        const projectCollection = client.db('Portfolio').collection('project_lisht');
        const reviewCollection = client.db('Portfolio').collection('review');

        // post review
 app.post('/review', async (req, res) => {
  const data = req.body;
  try {
    // Insert the review data into the MongoDB collection
    const result = await reviewCollection.insertOne(data);

    res.status(201).json({ message: 'Review added successfully', reviewId: result.insertedId });
  } catch (error) {
    console.error('Error inserting review:', error);
    res.status(500).json({ message: 'An error occurred while adding the review' });
  }
});

 app.get('/reviews', async (req, res) => {
            
            const result = await reviewCollection.find({ }).toArray();
            res.send(result);

        })


        app.get('/cetegors', async (req, res) => {
            const query = {};
            const result = await cetagoryCollection.find(query).toArray();
            res.send(result);

        })
        app.get('/development/:id', async (req, res) => {
            const id = req.params.id
            const query = { development: id };
            const result = await SkillCollection.find(query).toArray();
            res.send(result);

        })
        // ======PROJECT===========
        app.get('/simple', async (req, res) => {
            const query = {};
            const result = await projectCollection.find(query).toArray();
            res.send(result);

        })
        app.get('/simple-project/:id', async (req, res) => {
            const id = req.params.id
            const query = { id: id };
            const result = await projectCollection.find(query).toArray();
            res.send(result);

        })
        //all skill select one skill details
        app.get('/details/:id', async (req, res) => {
            const id = req.params.id
            const query = { id: id };
            console.log(query);
            const result = await SkillCollection.find(query).toArray();
            res.send(result);

        })
        //skill base data lode in data base
        app.get('/skills', async (req, res) => {
            const query = {};
            const result = await SkillCollection.find(query).toArray();
            res.send(result);

        })
        //coursess Id 
        app.get('/skills/:id', async (req, res) => {
            const id = req.params.id;
            const query = { id: id }
            const result = await SkillCollection.findOne(query)
            // console.log("first", result)
            res.send(result);

        })



    } catch (err) {
        console.log(err);
    }


}

run().catch(err => console.log(err))

//mongoDb end


// server started our nodemon index.js
app.get('/', (req, res) => {
    res.send("Server is Runing")
})


//coursess Id 
// app.get('/course/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedCourse = coureDetails.find(c => c._id === id)
//     res.send(selectedCourse);

// })


//clg show web-technology-is rouning
app.listen(port, () => {
    console.log("Web-technology- is Runing", port)
})
//that is ?