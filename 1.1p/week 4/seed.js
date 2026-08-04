const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

const PlantSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Plant = mongoose.model('Plant', PlantSchema);

const plants = [
  {
    title: "Monstera Deliciosa",
    image: "images/monstera.jpg",
    link: "About Monstera",
    description: "Famous for its large, glossy, split leaves. Loves bright, indirect light."
  },
  {
    title: "Snake Plant",
    image: "images/snake-plant.jpg",
    link: "About Snake Plant",
    description: "Extremely hardy, tolerates low light and irregular watering."
  },
  {
    title: "Golden Pothos",
    image: "images/pothos.jpg",
    link: "About Pothos",
    description: "Trailing vine that thrives almost anywhere, great for beginners."
  },
  {
    title: "Fiddle Leaf Fig",
    image: "images/fiddle-leaf-fig.jpg",
    link: "About Fiddle Leaf Fig",
    description: "Statement plant with large violin-shaped leaves. Fussy about light changes."
  }
];

Plant.insertMany(plants)
  .then(() => {
    console.log("Sample plants saved!");
    mongoose.connection.close();
  });