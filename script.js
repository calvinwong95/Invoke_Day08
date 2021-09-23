var vid = document.getElementById("video");

var vol = 1;

var width = 90;


var i = 1;

var isPlaying = false;


document.getElementById("play-prev").addEventListener('mouseover', hoverbtn);
document.getElementById("play-stop").addEventListener('mouseover', hoverbtn);
document.getElementById("play-next").addEventListener('mouseover', hoverbtn);
document.getElementById("volume-up").addEventListener('mouseover', hoverbtn);
document.getElementById("volume-down").addEventListener('mouseover', hoverbtn);

function hoverbtn() {
    this.style.transform="scale(1.5)";
}

document.getElementById("play-prev").addEventListener('mouseout', hoveraway);
document.getElementById("play-stop").addEventListener('mouseout', hoveraway);
document.getElementById("play-next").addEventListener('mouseout', hoveraway);
document.getElementById("volume-up").addEventListener('mouseout', hoveraway);
document.getElementById("volume-down").addEventListener('mouseout', hoveraway);

function hoveraway() {
    this.style.transform="scale(1)";
}

function playSwitch() {
    if (isPlaying == false) {
        vid.play();
        isPlaying = true;
        document.getElementById('play-stop').innerHTML ="<i class='fas fa-pause fadeAnimate'></i>";
        
    } else if (isPlaying == true) {
        vid.pause();
        isPlaying = false;
        document.getElementById('play-stop').innerHTML ="<i class='fas fa-play fadeAnimate'></i>";
    }
}

function volChange(num) {

    vol = vol + num;

    if (vol >= 1) {
        vol = 1;
    } else if (vol <=0) {
        vol = 0;
    }

    console.log(vol);
    vid.volume = vol;

}


function switchVid(movie) {
    
    i += movie
    console.log(i)

    if (i > 3) {
        i = 1;
    } else if ( i <= 0) {
        i = 3;
    }
    
    if (i == 1) {
        vid.src="mov_bbb.mp4";
    } else if (i == 2) {
        vid.src="movie.mp4";
    } else if (i == 3) {
        vid.src="videoplayback.mp4"
    }
    
}