import express from 'express';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
const port = 3000

// request woh hai jo aarahi hai
// response woh hai jo ja raha hai

// app.use is a middleware
// express middleware are are functions
// they are used to change request and response objects


// we don't make middleware in most of the casses


// app.use(express.static(path.join(__dirname, 'public')));

// using our own middleware
// app.use(harryiddleware);

// giving parameters to the get request
app.get('/hello/:name', (req, res) => {
  res.send('Hello World! ' + req.params.name)
})

app.get('/about', (req, res) => {
//   res.send('about page')
// console.log(__dirname);
    // res.sendFile(path.join(__dirname, 'index.html'))

    // sending json through express
    res.json({"Jatin": 34})
    // changing the response code
    res.status(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})