import playlist from "./json/playlist.json" assert { type: "json" };
// const playlist = import("./json/playlist.json");

// Show playlist
export const showPlaylistRepo = () => {
  if (playlist.length === 0) {
    throw Error("Playlist Anda belum ada lagu!");
  }
  return playlist;
};

// Add song
export const addSongRepo = (title, artist, url) => {
  if (!title || !artist || !url) {
    throw Error("Input tidak valid");
  }
  let id = playlist.length + 1;
  let amount_played = 0;
  const newSong = {
    id,
    title,
    artist,
    url,
    amount_played,
  };
  playlist.push(newSong);
  return newSong;
};

// Play song
export const playSongRepo = (songID) => {
  const song = playlist.find((song) => song.id === songID);
  if (!song) {
    throw Error("Lagu tidak ditemukan");
  }
  song.amount_played += 1;
  return song;
};

// Sorting songs
export const sortSongRepo = () => {
  const sortedPlaylist = playlist.sort(
    (a, b) => b.amount_played - a.amount_played
  );
  if (!sortedPlaylist) {
    return null;
  }
  return sortedPlaylist;
};
