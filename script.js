function playSong(songPath) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = songPath;
    audioPlayer.play();
    audioPlayer.hidden = false;
}
