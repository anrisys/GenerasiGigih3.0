import express from "express";

import {
  showPlaylist,
  addSong,
  playSong,
  sortSong,
} from "../controller/playlist/playlist.js";

const router = express.Router();

router.get("/show", showPlaylist);
router.post("/add", addSong);
router.get("/play/:id", playSong);
router.get("/sort", sortSong);

export default router;
