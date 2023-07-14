const express = require("express");
const app = express();
const data = require("./playlist.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    "Welcome!": "These are some navigation:",
    "To show playlist": `http://localhost:port/playlist`,
    "To add song to playlist": `http://localhost:port/playlist/add`,
    "To play song on playlist": `http://localhost:port/playlist/play/:songID`,
  });
});

app.post("/playlist/add", (req, res) => {
  let newSong = { ...req.body };
  let id = data.length + 1;
  newSong = {
    id,
    ...newSong,
  };
  data.push(newSong);
  res.json({ message: "Song added to playlist successfully" });
});

app.get("/playlist/play/:id", (req, res) => {
  const id = Number(req.params.id);

  const song = data.find((song) => song.id === id);
  if (!song) {
    return res.json({ message: "Song not found" });
  } else {
    res.json(song);
  }
});

app.get("/playlist", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
