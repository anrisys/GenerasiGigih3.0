import { startRest } from "./app/rest.js";

if (process?.argv && process.argv[2] === "rest") {
  startRest();
}

/*

import express from "express";
import data from "./repositories/playlist/JSON/playlist.json" assert { type: "json" };

const app = express();
app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to your playlist!",
  });
});

// Add song to playlist
app.post("/playlist/add", (req, res) => {
  let newSong = { ...req.body };
  let id = data.length + 1;
  let amount_played = 0;
  newSong = {
    id,
    ...newSong,
    amount_played,
  };
  data.push(newSong);
  res.json({ message: "Song added to playlist successfully" });
});

// Play songs from playlist
app.get("/playlist/play/:id", (req, res) => {
  const id = Number(req.params.id);

  const song = data.find((song) => song.id === id);
  if (!song) {
    return res.json({ message: "Song not found" });
  } else {
    song.amount_played += 1;
    res.json(song);
  }
});

// Get list of playlist
app.get("/playlist", (req, res) => {
  res.json(data);
});

// Sorting songs on playlist
app.get("/playlist/sorted", (req, res) => {
  // tidak ada playlist
  // jumlah playlist hanya ada 1 lagu
  const sortedData = data.sort((a, b) => b.amount_played - a.amount_played);
  res.json(sortedData);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
*/
