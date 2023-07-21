import {
  showPlaylistRepo,
  addSongRepo,
  playSongRepo,
  sortSongRepo,
} from "../../repositories/playlist/playlist.js";

export const showPlaylistUsecase = () => {
  return showPlaylistRepo();
};

export const addSongUsecase = (title, artist, url) => {
  return addSongRepo(title, artist, url);
};

export const playSongUsecase = (songID) => {
  return playSongRepo(songID);
};

export const sortSongUsecase = () => {
  const sortData = sortSongRepo();
  if (!sortData) {
    return null;
  }
  return sortData;
};
