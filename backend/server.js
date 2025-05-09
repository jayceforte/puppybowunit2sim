const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let puppies = [
  { id: 1, name: "Boss", breed: "Rottweiler", imageUrl: "https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg", team: "Blue", score: 0 },
  { id: 2, name: "Charles", breed: "Bulldog", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bulldog_inglese.jpg/1200px-Bulldog_inglese.jpg", team: "Red", score: 0 },
  { id: 3, name: "Champ", breed: "Boxer", imageUrl: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/01/05092842/Boxer-puppy-sitting-in-the-grass.null_.jpg", team: "Blue", score: 0 },
];

app.get("/puppies", (req, res) => {
  res.json(puppies);
});

app.post("/puppies/:id/cheer", (req, res) => {
  const id = parseInt(req.params.id);
  const puppy = puppies.find(p => p.id === id);
  if (puppy) {
    puppy.score++;
    res.json(puppy);
  } else {
    res.status(404).json({ error: "Puppy not found" });
  }
});

app.listen(PORT, () => {
  console.log(`🐾 Puppy API running at http://localhost:${PORT}`);
});
