const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://paolo:zxc123@clustercreativeproject.vqpze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

// Configure multer so that it will upload to '../front-end/public/images'


// Create a scheme for items in the museum: a title and a path to an image.
const itemSchema = new mongoose.Schema({
  BarbershopName: String,
  review: String,
  value: Number,
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);
// connect to the database

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    BarbershopName: req.body.BarbershopName,
    review: req.body.Review,
    value: req.body.value,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.put('/api/items/:id', async (req, res) => {
  let item = await Item.findOne({
    _id: req.params.id,
  });
  try {
    item.BarbershopName = req.body.BarbershopName;
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
app.listen(3001, () => console.log('Server listening on port 3001!'));
