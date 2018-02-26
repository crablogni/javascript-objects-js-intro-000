var playlist = {artist:"song"}

function updatePlaylist (playlist, artistName, songTitle){
  playlist.artist = artistName;
  playlist.song = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistNames[artistName];
  return playlist;
}
