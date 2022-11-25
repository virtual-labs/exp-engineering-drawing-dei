//Your JavaScript goes in here
function step1(){
    document.getElementById("Step1").style.visibility = "visible";
    document.getElementById("Step").style.visibility = "hidden";
}
function step2(){
    document.getElementById("Step2").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
}
function step3(){
    document.getElementById("Step3").style.visibility = "visible";
    document.getElementById("Step2").style.visibility = "hidden";
    document.getElementById("png18").style.visibility = "hidden";
}
function setUp(){
    document.getElementById("setup").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
}
function board(){
    document.getElementById("board").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
}
function sheet(){
    document.getElementById("sheet").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
}
function block(){
    document.getElementById("block").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
}
function pencil(){
    document.getElementById("pencil").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
}
function move() {
    document.getElementById("png1").style.animationPlayState = "running";
    document.getElementById("png1").style.animationIterationCount = "1";
    document.getElementById("png3").style.visibility = "hidden";
    myTimeout = setTimeout(myGreeting, 1200);
}
function movescrew() {
    document.getElementById("png18").style.visibility = "visible";
    document.getElementById("png15").style.visibility = "hidden";
    document.getElementById("png16").style.visibility = "hidden";
}

function myGreeting() {
    document.getElementById("png2").style.visibility = "visible";
    document.getElementById("png1").style.visibility = "hidden";
    document.getElementById("wr").style.visibility = "hidden";
    document.getElementById("png4").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "visible";
    document.getElementById("png6").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "visible";
    document.getElementById("wr1").style.visibility = "visible";
    document.getElementById("aboutClip").style.visibility = "visible";
    document.getElementById("png13").style.visibility = "visible";

    myStopFunction();
}

function myStopFunction() {
    clearTimeout(myTimeout);

}

function clipmove() {
    document.getElementById("png8").style.visibility = "visible";
    document.getElementById("png4").style.visibility = "hidden";
    document.getElementById("png8").style.animationPlayState = "running";
    document.getElementById("png8").style.animationIterationCount = "1";
}

function clipmove1() {
    document.getElementById("png9").style.visibility = "visible";
    document.getElementById("png5").style.visibility = "hidden";
    document.getElementById("png9").style.animationPlayState = "running";
    document.getElementById("png9").style.animationIterationCount = "1";
}

function clipmove2() {
    document.getElementById("png10").style.visibility = "visible";
    document.getElementById("png6").style.visibility = "hidden";
    document.getElementById("png10").style.animationPlayState = "running";
    document.getElementById("png10").style.animationIterationCount = "1";
}

function clipmove3() {
    document.getElementById("png11").style.visibility = "visible";
    document.getElementById("png7").style.visibility = "hidden";
    document.getElementById("png11").style.animationPlayState = "running";
    document.getElementById("png11").style.animationIterationCount = "1";
}

function draftermove() {
    document.getElementById("png14").style.visibility = "visible";
    document.getElementById("png13").style.visibility = "hidden";
    document.getElementById("png14").style.animationPlayState = "running";
    document.getElementById("png14").style.animationIterationCount = "1";
    document.getElementById("png12").style.visibility = "hidden";
    document.getElementById("wr1").style.visibility = "hidden";
    document.getElementById("aboutClip").style.visibility = "hidden";
    document.getElementById("done").style.visibility = "visible";
}


