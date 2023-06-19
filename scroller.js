const delay = 25;
let intervalId;

function startScroller() {
    intervalId = setInterval(
        () => (document.getElementById('scrollerWindow').scrollLeft += 3),
        delay,
    );
}

function stopScroller() {
    clearInterval(intervalId);
}

scrollerParent.addEventListener('mouseout', startScroller);
scrollerParent.addEventListener('mouseover', stopScroller);
document.getElementById("scrollerWindow").scrollLeft = 1

function log() {
    var st = document.getElementById("scrollerWindow").scrollLeft
    console.log(st)
    if (st >= document.getElementById("scrollerWindow").scrollWidth/2) {
        document.getElementById("scrollerWindow").scrollLeft -= document.getElementById("scrollerWindow").scrollWidth/2
    }
    if (st < 1) {
        document.getElementById("scrollerWindow").scrollLeft += document.getElementById("scrollerWindow").scrollWidth/2-1
    }
}