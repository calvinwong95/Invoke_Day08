var vid = document.getElementById("vid");

var vol = 1;

var isPlaying = false;

function playVid () {

    vid.play();
}

function pauseVid () {

    vid.pause();
}

function updateVol(num) {
    vol = vol + num;

    if(vol >= 1) {
        vol = 1;
    } else if (vol <=0) {
        vol = 0;
    }
    
    console.log(vol);
    //update video element//
    vid.volume = vol;
}

function playOrStop() {
    if (isPlaying == false) {
        vid.play();
        isPlaying = true;
        document.getElementById('switch-btn').innerHTML ="<i class='fas fa-pause fadeAnimate'></i>";
        
    } else if (isPlaying == true) {
        vid.pause();
        isPlaying = false;
        document.getElementById('switch-btn').innerHTML ="<i class='fas fa-play fadeAnimate'></i>";
    }
}

function switchVid(movie) {
    vid.src=movie;
}
