var playlist = {artist:"song"}

function updatePlaylist (playlist, artist, song){
  playlist[artist] = artist;
  playlist[song] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist[artistName];
  return playlist;
}
