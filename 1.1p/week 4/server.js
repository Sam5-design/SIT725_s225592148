var express = require("express")
var app = express()
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

const PlantSchema = new mongoose.Schema({
  name: String,
  photoUrl: String,
  moreInfoLink: String,
  careNotes: String,
  difficulty: String
});

const Plant = mongoose.model('Plant', PlantSchema);

app.get('/api/plants', async (req, res) => {
  const plants = await Plant.find({});
  res.json({ statusCode: 200, data: plants, message: "Success" })
})

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port)
})