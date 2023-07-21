import {
  showPlaylistUsecase,
  addSongUsecase,
  playSongUsecase,
  sortSongUsecase,
} from "../../usecases/playlist/playlist.js";

export const showPlaylist = (req, res) => {
  try {
    const playlist = showPlaylistUsecase();
    res.json({ playlist });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addSong = (req, res) => {
  try {
    const { title, artist, url } = req.body;
    const newSong = addSongUsecase(title, artist, url);

    res.json({
      data: newSong,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const playSong = (req, res) => {
  try {
    const songID = Number(req.params.id);
    const song = playSongUsecase(songID);
    res.json({ song });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

export const sortSong = (req, res) => {
  const sortedSongs = sortSongUsecase();
  if (!sortedSongs) {
    res.json({
      message: "There is no song yet!",
    });
  }
  res.json({ sortedSongs });
};
