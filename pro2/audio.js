function playPause() {    
    var music = document.getElementById('music');    
    var music_btn = document.getElementById('music_btn');    
    if (music.paused){    
        music.play();    
        music_btn.src = 'bfq.png';    
    }    
    else{    
        music.pause();    
        music_btn.src = 'bfq2.png';     
    }    
}   