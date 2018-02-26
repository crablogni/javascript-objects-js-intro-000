var playlist = {aristsNames: songTitles}

function updatePlaylist (playlist, artistName, songTitle){
  playlist.artistNames[artistName];
  playlist.songTitles[songTitle];
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistNames[artistName];
  return playlist;
}
