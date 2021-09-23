var score = 0;

function count(num) {
    console.log("it's clicked");

    score = score + num;


    if(score <= 0 ) {
        score = 0;
    } 

    document.querySelector('h1').innerHTML = score;
    
    if(score > 20) {
        document.querySelector("#container").style.backgroundColor = 'gold';
    }
    else if (score > 10 && score <= 20){
        document.querySelector("#container").style.backgroundColor = 'silver';
    }
    else {
        document.querySelector("#container").style.backgroundColor = 'white';
    }
}

function changeBg(bgColor) {
    
    document.querySelector("#container").style.backgroundColor = bgColor;
}








document.getElementById('green-btn').addEventListener('mouseover', overBtn);
document.getElementById('red-btn').addEventListener('mouseover', overBtn);
document.getElementById('blue-btn').addEventListener('mouseover', overBtn);

function overBtn(evt) {
    this.style.backgroundColor = "gray";
}

document.getElementById('green-btn').addEventListener('mouseup', upBtn);
document.getElementById('red-btn').addEventListener('mouseup', upBtn);
document.getElementById('blue-btn').addEventListener('mouseup', upBtn);

function upBtn(evt) {
    this.style.backgroundColor = "lightgray";
}

document.getElementById('green-btn').addEventListener('mouseout', outBtn);
document.getElementById('red-btn').addEventListener('mouseout', outBtn);
document.getElementById('blue-btn').addEventListener('mouseout', outBtn);

function outBtn(evt) {
    this.style.backgroundColor = "white";
}

document.getElementById('green-btn').addEventListener('mousedown', downBtn);
document.getElementById('red-btn').addEventListener('mousedown', downBtn);
document.getElementById('blue-btn').addEventListener('mousedown', downBtn);

function downBtn() {
    this.style.backgroundColor = "yellow";
}