const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/myprojectDB');

const PlantSchema = new mongoose.Schema({
  name: String,
  photoUrl: String,
  moreInfoLink: String,
  careNotes: String,
  difficulty: String
});

const Plant = mongoose.model('Plant', PlantSchema);

const plants = [
  {
    name: "Monstera Deliciosa",
    photoUrl: "images/monstera.jpg",
    moreInfoLink: "About Monstera",
    careNotes: "Famous for its large, glossy, split leaves. Loves bright, indirect light.",
    difficulty: "Easy"
  },
  {
    name: "Snake Plant",
    photoUrl: "images/snake-plant.jpg",
    moreInfoLink: "About Snake Plant",
    careNotes: "Extremely hardy, tolerates low light and irregular watering.",
    difficulty: "Very Easy"
  },
  {
    name: "Golden Pothos",
    photoUrl: "images/pothos.jpg",
    moreInfoLink: "About Pothos",
    careNotes: "Trailing vine that thrives almost anywhere, great for beginners.",
    difficulty: "Easy"
  },
  {
    name: "Fiddle Leaf Fig",
    photoUrl: "images/fiddle-leaf-fig.jpg",
    moreInfoLink: "About Fiddle Leaf Fig",
    careNotes: "Statement plant with large violin-shaped leaves. Fussy about light changes.",
    difficulty: "Hard"
  }
];

async function seedDatabase() {
  await Plant.deleteMany({});
  await Plant.insertMany(plants);
  console.log("Old data cleared and sample plants saved!");
  mongoose.connection.close();
}

seedDatabase();