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

// ---------------sheet move-----------------------

function sheetmove()
{
    document.getElementById("sheetplaced").style.visibility = "hidden";
    document.getElementById("sheetanimation1").style.visibility = "visible";
    document.getElementById("sheetanimation1").style.animationPlayState = "running";
    document.getElementById("sheetanimation1").style.animationIterationCount = "1";
    myTimeout = setTimeout(() => {
        document.getElementById("clip1").style.visibility="visible"
        document.getElementById("clip2").style.visibility="visible"
        document.getElementById("clip3").style.visibility="visible"
        document.getElementById("clip4").style.visibility="visible"
        document.getElementById("arrowleft1").style.visibility="hidden"
        document.getElementById("sheetext").style.visibility="hidden"
        document.getElementById("drafter-out").style.visibility="visible"
        document.getElementById("cliptext").style.visibility="visible"
        document.getElementById("aboutClip").style.visibility = "visible";
      }, 800);
}

let click = 0;

function showNextBtn(click) {
  if (click === 5)
    myTimeout = setTimeout(
      () => {
        document.getElementById("arrowleft").style.visibility = "hidden";
        document.getElementById("cliptext").style.visibility = "hidden";
        document.getElementById("back1").style.visibility = "visible";
    },
      1000
    );
}

function clipmove1() {
    document.getElementById("boardclip1").style.visibility = "visible";
    document.getElementById("clip1").style.visibility = "hidden";
    document.getElementById("boardclip1").style.animationPlayState = "running";
    document.getElementById("boardclip1").style.animationIterationCount = "1";
    click += 1;
    showNextBtn(click);
  }
  
  function clipmove2() {
    document.getElementById("boardclip2").style.visibility = "visible";
    document.getElementById("clip2").style.visibility = "hidden";
    document.getElementById("boardclip2").style.animationPlayState = "running";
    document.getElementById("boardclip2").style.animationIterationCount = "1";
    click += 1;
    showNextBtn(click);
  }
  
  function clipmove3() {
    document.getElementById("boardclip3").style.visibility = "visible";
    document.getElementById("clip3").style.visibility = "hidden";
    document.getElementById("boardclip3").style.animationPlayState = "running";
    document.getElementById("boardclip3").style.animationIterationCount = "1";
    click += 1;
    showNextBtn(click);
  }
  
  function clipmove4() {
    document.getElementById("boardclip4").style.visibility = "visible";
    document.getElementById("clip4").style.visibility = "hidden";
    document.getElementById("boardclip4").style.animationPlayState = "running";
    document.getElementById("boardclip4").style.animationIterationCount = "1";
    click += 1;
    showNextBtn(click);
  }
  
  document.getElementById("drafter-out").addEventListener("click", () => {
    document.getElementById("drafter-out").style.visibility = "hidden";
    document.getElementById("drafter-in").style.visibility = "visible";
    document.getElementById("drafter-in").style.animationPlayState = "running";
    document.getElementById("drafter-in").style.animationIterationCount = "1";
    click += 1;
    showNextBtn(click);
  });

  function draftermove1() {
    document.getElementById("arrow").style.visibility = "hidden";
    document.getElementById("drafterpng2").style.visibility = "visible";
    document.getElementById("drafterpng").style.visibility = "hidden";
    document.getElementById("drafterpng2").style.animationPlayState = "running";
    document.getElementById("drafterpng2").style.animationIterationCount = "1";
    document.getElementById("backid2").style.visibility = "visible";
    document.getElementById("draftertxt").style.visibility = "hidden";
}
