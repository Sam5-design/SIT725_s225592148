var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var plants = [
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
]

app.get('/api/plants', (req, res) => {
  res.json({ statusCode: 200, data: plants, message: "Success" })
})

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App listening to: " + port)
}) 