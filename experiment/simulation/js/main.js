//Your JavaScript goes in here

function step1(){
    document.getElementById("Step1").style.visibility = "visible";
    document.getElementById("Step").style.visibility = "hidden";
    document.getElementById("board").style.visibility = "hidden";
    document.getElementById("setup").style.visibility = "hidden";
    document.getElementById("sheet").style.visibility = "hidden";
    document.getElementById("block").style.visibility = "hidden";
    document.getElementById("pencil").style.visibility = "hidden";
    document.getElementById("setsquare").style.visibility = "hidden";
    document.getElementById("compass").style.visibility = "hidden";
    document.getElementById("lines").style.visibility = "hidden";
    document.getElementById("png14").style.visibility = "hidden";
    document.getElementById("done").style.visibility = "hidden";
    document.getElementById("png2").style.visibility = "hidden";
    document.getElementById("png8").style.visibility = "hidden";
    document.getElementById("png9").style.visibility = "hidden";
    document.getElementById("png10").style.visibility = "hidden";
    document.getElementById("png11").style.visibility = "hidden";
    document.getElementById("png14").style.visibility = "hidden";
    document.getElementById("drafter").style.visibility = "hidden";
    document.getElementById("drafterpng2").style.visibility = "hidden";
    document.getElementById("sheetpng").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Introduction to Engineering Drawing";
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
    document.getElementById("setup").load;
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Set up Drawing table";
    document.getElementById("png14").style.visibility = "visible";
    document.getElementById("png8").style.visibility = "visible";
    document.getElementById("png9").style.visibility = "visible";
    document.getElementById("png10").style.visibility = "visible";
    document.getElementById("png11").style.visibility = "visible";
    document.getElementById("drafter").style.visibility = "visible";
    document.getElementById("wr").style.visibility = "visible";
    document.getElementById("png1").style.visibility = "visible";
    document.getElementById("png3").style.visibility = "visible";
    document.getElementById("png12").style.visibility = "visible";
}
function board(){
    document.getElementById("board").style.visibility = "visible";
    
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Drawing Board";
}
function sheet(){
    document.getElementById("sheet").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Drawing Sheet";
    document.getElementById("sheetpng").style.visibility = "visible";    
}

function compass(){
    document.getElementById("compass").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Compass";
}
function square(){
    document.getElementById("setsquare").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Set Square";
}
function lines(){
    document.getElementById("lines").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("narrow").style.visibility = "hidden";
    document.getElementById("wide").style.visibility = "hidden";
    document.getElementById("zigzag").style.visibility = "hidden";
    document.getElementById("dashed").style.visibility = "hidden";
    document.getElementById("dottednarrow").style.visibility = "hidden";
    document.getElementById("dottedwide").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="lines";
}
function narrow(){
    document.getElementById("narrow").style.visibility = "visible";
    document.getElementById("lines").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="lines";
}
function wide(){
    document.getElementById("wide").style.visibility = "visible";
    document.getElementById("lines").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="lines";
}
function zigzag(){
    document.getElementById("zigzag").style.visibility = "visible";
    document.getElementById("lines").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="lines";
}
function dashed(){
    document.getElementById("dashed").style.visibility = "visible";
    document.getElementById("lines").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="lines";
}
function dottednarrow(){
    document.getElementById("dottednarrow").style.visibility = "visible";
    document.getElementById("lines").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="lines";
}
function dottedwide(){
    document.getElementById("dottedwide").style.visibility = "visible";
    document.getElementById("lines").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="lines";
}
function block(){
    document.getElementById("block").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Title Block";
}
function pencil(){
    document.getElementById("pencil").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Pencils";
}
function drafter(){
    document.getElementById("drafter").style.visibility = "visible";
    document.getElementById("Step1").style.visibility = "hidden";
    document.getElementById("headtitle").innerHTML="Mini drafter";
    
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
    document.getElementById("backid").style.visibility = "visible";
}
function draftermove1() {
    document.getElementById("arrow").style.visibility = "hidden";
    document.getElementById("drafterpng2").style.visibility = "visible";
    document.getElementById("drafterpng").style.visibility = "hidden";
    document.getElementById("drafterpng2").style.animationPlayState = "running";
    document.getElementById("drafterpng2").style.animationIterationCount = "1";
    document.getElementById("backid2").style.visibility = "visible";
    document.getElementById("draftertxt").style.visibility = "hidden";
}
